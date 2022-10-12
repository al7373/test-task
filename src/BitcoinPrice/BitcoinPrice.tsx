import React from 'react';
import Display from '../Display/Display';
import btcImg from '../assets/bitcoin.jpg';
import withData, { InjectedDataProps } from '../utils/withData';

function BitcoinPrice(props: InjectedDataProps) {
		return <Display 
			{ ...props }
			assetImg={ btcImg }
			assetName="bitcoin"
		/>
}

export default withData("BTC-USD")(BitcoinPrice);

