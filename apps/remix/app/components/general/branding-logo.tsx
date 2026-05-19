import LogoImage from '@documenso/assets/logo.png';

import type { ImgHTMLAttributes } from 'react';

export type LogoProps = ImgHTMLAttributes<HTMLImageElement>;

export const BrandingLogo = ({ className, ...props }: LogoProps) => {
  return (
    <img
      src={LogoImage}
      alt="Notax"
      className={className}
      style={{ height: '3rem', width: 'auto', ...props.style }}
      {...props}
    />
  );
};
