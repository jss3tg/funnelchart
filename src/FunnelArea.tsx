import { Component, ReactNode, createElement } from "react";
import FunnelAreaContainer from "./components/FunnelAreaContainer";

import { FunnelAreaContainerProps } from "../typings/FunnelAreaProps";

import "./ui/FunnelArea.css";

export class FunnelArea extends Component<FunnelAreaContainerProps> {
    render(): ReactNode {
        return <FunnelAreaContainer
                    funnelObjects={this.props.funnelObjects}
                    textAttr={this.props.textAttr}
                    valuesAttr={this.props.valuesAttr}
                    //defaultChartType={this.props.defaultChartType}
                />;
    }
}
