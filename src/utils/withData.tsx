import React from 'react';
import Display from '../Display/Display';
import CircularProgress from '@mui/material/CircularProgress';

interface WithLoadingProps {
  loading: boolean
}

const withData = <P extends object>(Component: React.ComponentType<P>) => {
    return class WithData extends React.Component<P & WithLoadingProps>{
      render(){
        const { loading, ...props } = this.props;
        return loading ? <CircularProgress/> : <Component {...props as P} />;
      }
    }
}

export default withData
