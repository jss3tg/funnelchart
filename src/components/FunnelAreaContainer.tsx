import { createElement } from "react";
import { ListValue, ListAttributeValue } from "mendix";
import Plot from 'react-plotly.js';
import Big from "big.js";
//import { DefaultChartTypeEnum } from "typings/FunnelAreaProps";

export interface FunnelAreaContainerProps {
    funnelObjects: ListValue;
    textAttr: ListAttributeValue<string>;
    valuesAttr: ListAttributeValue<Big>;
    //defaultChartType: DefaultChartTypeEnum;
}

const FunnelAreaContainer = (props: FunnelAreaContainerProps) => {
    var funnel = props.funnelObjects.items;
    var arrLabels = new Array;
    var arrValues = new Array;
    if(funnel){
        funnel.map(object =>{
                const textAttrValue = props.textAttr.get(object).value;
                arrLabels.push(textAttrValue);
                const valuesAttrValue = Number(props.valuesAttr.get(object).value);
                arrValues.push(valuesAttrValue);
        });
    }
    
    return <Plot
                data = {[
                            {
                                type: 'funnelarea', //basic funnel or funnel area
                                values: arrValues,
                                text: arrLabels
                            }
                        ]}
                layout = {
                    {
                        autosize: true,
                        margin: {l: 15 , r: 15, b: 15, t: 15},
                        showlegend: false
                    }
                }
                className = 'w-full h-full'
                useResizeHandler = { true }
            />;
}

export default FunnelAreaContainer;
