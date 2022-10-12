import React from 'react';
import Display from '../Display/Display';
import btcImg from '../assets/bitcoin.jpg';
import withData from '../utils/withData';

export default function BitcoinPrice() {
    const DisplayWithData = withData(Display);
    return <DisplayWithData
      assetName="bitcoin"
      assetImg={ btcImg }
      buyPrice={ 1289 }
      sellPrice={ 1255.05 }
      spotPrice={ 1250 }
      currency="USD"
      loading={ true }
    />;
}

