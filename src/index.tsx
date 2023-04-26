"use-client";

import React, { useEffect, useState, forwardRef, useId } from "react";

export interface AvatarProps {
  src?: string | null;

  alt?: string;

  size?: number;

  children?: React.ReactNode;
}

const ReactSVGAvatar = forwardRef<HTMLDivElement, AvatarProps>((props, ref) => {
  const { radius, className, size, src, style, id } = props;

  const avatarId = id || useId();
  return (
    <div
      style={{ ...style, borderRadius: radius }}
      ref={ref}
      className={className}
    >
      <svg
        data-visualcompletion="ignore-dynamic"
        role="none"
        width={size}
        height={size}
        className="overflow-visible"
      >
        <g mask={`url(#${avatarId})`}>
          <image
            x="0"
            y="0"
            height="100%"
            width="100%"
            preserveAspectRatio="xMidYMid slice"
            xlinkHref={src}
          />
          <rect
            x="0"
            fill="none"
            width={size}
            height={size}
            rx={radius}
            stroke={"#0000000d"}
            strokeWidth={"0"}
          />
        </g>
      </svg>
    </div>
  );
});

export default ReactSVGAvatar;
