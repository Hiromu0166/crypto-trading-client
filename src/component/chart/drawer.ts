import { CandleChartElement } from '@/model/CandleChartElement';

const d3 = require('d3');
(window as any).d3 = d3
const techan = require('techan');

export class Drawer {

    margin = { top: 20, right: 20, bottom: 30, left: 50 };
    width = 960 - this.margin.left - this.margin.right;
    height = 500 - this.margin.top - this.margin.bottom;

    xDomain = techan.scale.financetime().range([0, this.width]);
    yDomain = d3.scaleLinear().range([this.height, 0]);

    xAxis = d3.axisBottom().scale(this.xDomain);
    yAxis = d3.axisLeft().scale(this.yDomain);


    draw(data: Array<CandleChartElement>) {
        const svg = this.createSVG();

        const candlestick = techan.plot.candlestick().xScale(this.xDomain).yScale(this.yDomain);
        this.xDomain.domain(data.map(candlestick.accessor().d));
        this.yDomain.domain(techan.scale.plot.ohlc(data, candlestick.accessor()).domain());

        svg.selectAll("g.candlestick").datum(data).call(candlestick);
        svg.selectAll("g.x.axis").call(this.xAxis);
        svg.selectAll("g.y.axis").call(this.yAxis);

        this.drawYAxisLabel(svg);
    }

    createSVG() {
        const svg = d3.select(".candleChart").append("svg")
            .attr("width", this.width + this.margin.left + this.margin.right)
            .attr("height", this.height + this.margin.top + this.margin.bottom)
            .append("g")
            .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");
        svg.append("g").attr("class", "candlestick");
        svg.append("g").attr("class", "x axis").attr("transform", "translate(0," + this.height + ")");
        svg.append("g").attr("class", "y axis");
        return svg;
    }

    drawYAxisLabel(svg: any) {
        svg.append("g").append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 15)
            .style("text-anchor", "end")
            .text("Price (JPY)");
    }
}