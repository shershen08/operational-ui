/// <reference types="react" />
import * as React from "react";
import { Theme } from "contiamo-ui-theme";
export interface IOption {
    id: number;
    label: string;
    default?: boolean;
}
export interface IProps {
    id?: string | number;
    css?: {};
    className?: string;
    children: React.ReactNode;
    options?: IOption[];
    onChange?: () => void;
    theme?: Theme;
}
export interface IState {
    open: boolean;
    value: IOption;
}
declare class SideNavigationHeader extends React.Component<IProps, IState> {
    static defaultProps: {
        options: IOption[];
    };
    state: {
        open: boolean;
        value: {
            id: number;
            label: string;
        };
    };
    componentDidMount(): void;
    getDefaultValue(): IOption;
    toggle(): void;
    onChange(option: IOption): Promise<void>;
    getDropdown(): JSX.Element;
    render(): JSX.Element;
}
export default SideNavigationHeader;