import { memo } from "react";

import { getUnitWithMeasure } from "../../../../helpers";
import { defaultGlyphSize, GlyphProps } from "../../helpers";

export const LogoIcon = memo<Pick<GlyphProps, "size">>(
  ({ size = defaultGlyphSize }) => (
    <svg
      width={getUnitWithMeasure(size)}
      height={getUnitWithMeasure(size)}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="20" height="20" rx="4" fill="#222B55" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.15114 3.75C5.68797 3.75 5.3125 4.12547 5.3125 4.58864V5.72386C5.3125 6.18703 5.68797 6.5625 6.15114 6.5625H13.3555C13.7438 6.5625 14.0813 6.29589 14.1713 5.91811L14.4416 4.78288C14.567 4.2559 14.1675 3.75 13.6257 3.75H6.15114ZM7.1822 16.5625H6.15114C5.68797 16.5625 5.3125 16.187 5.3125 15.7239V9.27614C5.3125 8.81297 5.68797 8.4375 6.15114 8.4375H12.3634C12.909 8.4375 13.3093 8.95023 13.177 9.47954L12.9192 10.5106C12.8259 10.8839 12.4905 11.1458 12.1056 11.1458H8.85947C8.3963 11.1458 8.02083 11.5213 8.02083 11.9845V15.7239C8.02083 16.187 7.64536 16.5625 7.1822 16.5625Z"
        fill="#FF5762"
      />
    </svg>
  ),
);

LogoIcon.displayName = "LogoIcon";