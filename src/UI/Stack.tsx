import { ReactNode } from 'react';
import PropTypes from 'prop-types';

type StackProps = {
  children: ReactNode ,
  pos?: string
}

const Stack = ({ children, pos }:StackProps) => (
  <div className='stack' style={{
    justifyContent: pos === 'center' ? 'center' : `flex-${pos}`
  }}>
    {children}
  </div>
);

export { Stack };

Stack.propTypes = {
  children: PropTypes.node.isRequired,
}