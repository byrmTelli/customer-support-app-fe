import { StandartColorType } from '@/types/color';
import { HTMLAttributes } from 'react';

interface SpinnerComponentProps {
    color: StandartColorType;
}

export type SpinnerProps = SpinnerComponentProps &
    HTMLAttributes<HTMLDivElement>;
