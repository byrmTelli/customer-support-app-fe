import { default as TooltipComponent } from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap.css';

import { TooltipProps } from './types';

export default function Tooltip({
    title,
    placement = 'bottom',
    overlayInnerStyle,
    children,
}: TooltipProps) {
    return (
        <TooltipComponent
            overlay={
                <div className="text-white dark:text-black bg-cyan-900 w-full h-ful p-2 rounded-md">
                    {title}
                </div>
            }
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            showArrow={false}
            placement={placement}
            destroyTooltipOnHide
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            overlayInnerStyle={{
                padding: 0,
                display: 'flex',
                minHeight: 'auto',
                backgroundColor: '',
                ...overlayInnerStyle,
            }}
        >
            {children}
        </TooltipComponent>
    );
}
