// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import RCTooltip from 'rc-tooltip';
import { CSSProperties, ReactNode } from 'react';

export interface TooltipComponentProps {
    title: ReactNode;
    children: React.ReactElement<any, any>;
    placement?: RCTooltip.RCTooltip.Placement;
    overlayInnerStyle?: CSSProperties;
}

export type TooltipProps = TooltipComponentProps;
