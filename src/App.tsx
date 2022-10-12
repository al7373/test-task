import React from 'react';
import BitcoinPrice from './BitcoinPrice/BitcoinPrice';
import EthereumPrice from './EthereumPrice/EthereumPrice';
import LiteCoinPrice from './LiteCoinPrice/LiteCoinPrice';
import Box from '@mui/material/Box';

function App() {
  return (
    <Box sx={{ m: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box sx={{ mr: 1 }}>
          <BitcoinPrice/>
        </Box>
        <Box sx={{ ml: 1 }}>
          <LiteCoinPrice/>
        </Box>
        <Box sx={{ ml: 1 }}>
          <EthereumPrice/>
        </Box>
    </Box>
  );
}

export default App;

