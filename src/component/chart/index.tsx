import * as React from 'react';
import { Drawer } from '@/component/chart/drawer';
import { CandleChartElement } from '@/model/CandleChartElement';
import { rawData } from '@/component/chart/candle-stick-data';


export class Chart extends React.Component {

    componentDidMount() {
        const drawer = new Drawer();
        const data = rawData.data.candlestick[0].ohlcv
            .map(data => new CandleChartElement(data))
        drawer.draw(data.slice(0, 200));
    }

    render() {
        return (
            <div className={'candleChart'} />
        );
    }
}