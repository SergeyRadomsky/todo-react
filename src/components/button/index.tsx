import classNames from 'classnames';
import { FC, ButtonHTMLAttributes, ReactNode } from 'react';
import s from '../button/index.module.scss';

export enum ButtonVariants {
  green = 'green',
  red = 'red',
  blue = 'blue',
  default = 'default',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof ButtonVariants;
  active?: boolean;
  children?: ReactNode;
}

const Button: FC<ButtonProps> = ({
  variant = ButtonVariants.default,
  children,
  active,
  ...props
}) => {
  const containerCN = classNames(
    s.container,
    s[variant],
    { [s.activeClass]: active },
    props.className
  );

  return (
    <button className={containerCN} {...props}>
      {children}
    </button>
  );
};

export default Button;
