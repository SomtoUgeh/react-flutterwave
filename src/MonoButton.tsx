import * as React from 'react';
import useMono from './useMono';
import { MonoConfig } from './types';

interface MonoButtonProps extends MonoConfig {
  text?: string;
  className?: string;
  disabled?: boolean;
  onClose?: () => void;
  onSuccess: (response: { code: string }) => void;
  children?: React.ReactNode;
}

const MonoButton = ({
  text,
  className,
  children,
  onSuccess = () => null,
  onClose = () => null,
  disabled,
  ...config
}: MonoButtonProps): JSX.Element => {
  const handleMono = useMono({ public_key: config.public_key });

  return (
    <button
      disabled={disabled}
      className={className}
      onClick={() => handleMono({ onSuccess, onClose })}
    >
      {text || children}
    </button>
  );
};

export default MonoButton;
