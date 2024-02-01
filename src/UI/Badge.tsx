import { ReactNode } from 'react';
import { ReactComponent as Remove } from '../assets/images/icon-remove.svg';

type BadgeProps = {
  variant?: 'basic' | 'clearable' | 'rounded',
  colorScheme?: 'light' | 'primary' | 'dark',
  children: ReactNode,
  onClear?: (data: string) => void,
  onClick?: (data: string) => void,
}

const Badge = ({
  variant = 'basic',
  colorScheme = 'light',
  children,
  onClear,
  onClick,
}: BadgeProps) => (
  <div className={`badge badge--${variant} badge--${colorScheme}`} onClick={() => onClick}>
    <span>
      {children}
    </span>
    {variant === 'clearable' && (
      <div className='badge-remover' onClick={() => onClear}>
        <Remove />
      </div>
    )}
  </div>
);

export { Badge };