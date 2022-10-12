import React from 'react';
import Display from '../Display/Display';
import ethImg from '../assets/ethereum.jpg';
import withData, { InjectedDataProps } from '../utils/withData';

const EthereumPrice :React.FC<InjectedDataProps> = (props) => {//<------------ FUNCTIONAL COMPONENT
		return <Display 
			{ ...props }
			assetImg={ ethImg }
			assetName="Ethereum"
		/>
}

export default withData("ETH-USD")(EthereumPrice);

