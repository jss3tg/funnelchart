/**
 * This file was generated from FunnelArea.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { ListValue, ListAttributeValue } from "mendix";
import { Big } from "big.js";

export interface FunnelAreaContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    funnelObjects: ListValue;
    textAttr: ListAttributeValue<string>;
    valuesAttr: ListAttributeValue<Big>;
}

export interface FunnelAreaPreviewProps {
    className: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    funnelObjects: {} | { type: string } | null;
    textAttr: string;
    valuesAttr: string;
}
