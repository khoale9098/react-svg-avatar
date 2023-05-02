import React from "react";
export interface AvatarProps {
    src: string;
    size?: number;
    children?: React.ReactNode;
    icon?: React.ReactNode;
    style?: object;
    id: string;
    radius: number;
    className: string;
}
declare const ReactSVGAvatar: React.ForwardRefExoticComponent<AvatarProps & React.RefAttributes<HTMLDivElement>>;
export default ReactSVGAvatar;
