import React from 'react';
import { Subtract } from 'utility-types';
import axios from 'axios'

export interface InjectedDataProps {
  buyPrice: number,
  sellPrice: number,
  spotPrice: number,
  currency: string,
  loading: boolean,
	success: boolean,
  onRefresh: Function
}

type PriceType = 'buy' | 'sell' | 'spot';

async function loadPrice(pair: string, priceType: PriceType){

  const { data: { data: { amount } } } = await axios.get(
    'https://api.coinbase.com/v2/prices/' + 
    pair + 
    '/' + 
    priceType
  );

	return parseFloat(amount)

}

interface Prices {
  buy: number,
  sell: number,
  spot: number
}

async function loadAllPrices(pair: string): Promise<Prices>{
	let buy = await loadPrice(pair, 'buy');
	let sell = await loadPrice(pair, 'sell');
	let spot = await loadPrice(pair, 'spot');
	return { buy, sell, spot };
}

const withData = (pair: string) => 
	<P extends InjectedDataProps>(
		Component: React.ComponentType<P>
	) =>
		(props: Subtract<P, InjectedDataProps>) => {

				const [buyPrice, setBuyPrice] = React.useState(0);
				const [sellPrice, setSellPrice] = React.useState(0);
				const [spotPrice, setSpotPrice] = React.useState(0);
				const [loading, setLoading] = React.useState(false);
				const [success, setSuccess] = React.useState(true);

        function load(){
          setLoading(true)
          loadAllPrices(pair)
            .then(({ buy, sell, spot}) => {
              setBuyPrice(buy);
              setSellPrice(sell);
              setSpotPrice(spot);
              setLoading(false);
              setSuccess(true);
            })
            .catch((e) => {
              setLoading(false);
              setSuccess(false);
            });
        }

        function handleRefresh(){
          load();
        }

				React.useEffect(() => {
          load();
				}, [])

				React.useEffect(() => {
          let intervalId = setInterval(load, 3000);
          return function(){
            clearInterval(intervalId);
          }
				}, [])

				return (
					<Component
						{...props as P}
						buyPrice={ buyPrice }
						sellPrice={ sellPrice }
						spotPrice={ spotPrice } 
						currency="USD"
            loading={ loading }
            success={ success }
            onRefresh={ handleRefresh }
					/>
				);
		};

export default withData
