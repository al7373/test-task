import React from 'react';
import Display from '../Display/Display';
import ltcImg from '../assets/ltc.png';
import withData, { InjectedDataProps } from '../utils/withData';

const LiteCoinPrice :React.FC<InjectedDataProps> = (props) => {//<------------ FUNCTIONAL COMPONENT
		return <Display 
			{ ...props }
			assetImg={ ltcImg }
			assetName="Lite Coin"
		/>
}

export default withData("LTC-USD")(LiteCoinPrice);

