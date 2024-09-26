import { memo } from "react";

import { getUnitWithMeasure } from "../../../../helpers";
import { GlyphProps } from "../../helpers";

export const ChevronIcon = memo<GlyphProps>(({ size = 6, color }) => (
  <svg
    width={getUnitWithMeasure(size)}
    height={getUnitWithMeasure(size)}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.0075 15C11.7471 15 11.4967 14.8999 11.2964 14.7096L7.29044 10.7046C6.89985 10.3141 6.89985 9.68335 7.29044 9.29287C7.68102 8.90238 8.31197 8.90238 8.70255 9.29287L11.9975 12.587L15.2924 9.29287C15.683 8.90238 16.314 8.90238 16.7046 9.29287C17.0951 9.68335 17.0951 10.3141 16.7046 10.7046L12.6986 14.7096C12.5183 14.8999 12.2679 15 12.0075 15Z"
      fill={color}
    />
  </svg>
));

ChevronIcon.displayName = "ChevronIcon";
