import React from 'react';
import { Subtract } from 'utility-types';

export interface InjectedDataProps {
  buyPrice: number,
  sellPrice: number,
  spotPrice: number,
  currency: string
}

const withData = (pair: string) => 
	<P extends InjectedDataProps>(
		Component: React.ComponentType<P>
	) =>
		(props: Subtract<P, InjectedDataProps>) => {
				return (
					<Component
						{...props as P}
						buyPrice={ 19500 }
						sellPrice={ 19250 }
						spotPrice={ 19500 } 
						currency="USD"
					/>
				);
		};

export default withData
