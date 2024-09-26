import { memo } from "react";

import { getUnitWithMeasure } from "../../../../helpers";
import { GlyphProps } from "../../helpers";

export const CloseIcon = memo<GlyphProps>(({ size = 6, color }) => (
  <svg
    width={getUnitWithMeasure(size)}
    height={getUnitWithMeasure(size)}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.4118 12L17.7071 7.70463C18.0976 7.31414 18.0976 6.68335 17.7071 6.29287C17.3166 5.90238 16.6859 5.90238 16.2954 6.29287L12 10.5882L7.70464 6.29287C7.31415 5.90238 6.68335 5.90238 6.29287 6.29287C5.90238 6.68335 5.90238 7.31414 6.29287 7.70463L10.5882 12L6.29287 16.2954C5.90238 16.6859 5.90238 17.3166 6.29287 17.7071C6.68335 18.0976 7.31415 18.0976 7.70464 17.7071L12 13.4118L16.2954 17.7071C16.6859 18.0976 17.3166 18.0976 17.7071 17.7071C18.0976 17.3166 18.0976 16.6859 17.7071 16.2954L13.4118 12Z"
      fill={color}
    />
  </svg>
));

CloseIcon.displayName = "CloseIcon";
