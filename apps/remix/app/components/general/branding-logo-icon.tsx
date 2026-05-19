import LogoIcon from '@documenso/assets/logo_icon.png';

import type { ImgHTMLAttributes } from 'react';

export type LogoProps = ImgHTMLAttributes<HTMLImageElement>;

export const BrandingLogoIcon = ({ className, ...props }: LogoProps) => {
  return (
    <img
      src={LogoIcon}
      alt="Notax"
      className={className}
      style={{ height: '2rem', width: 'auto', ...props.style }}
      {...props}
    />
  );
};
