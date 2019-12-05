export class CandleChartElement {
    open: number = 0;
    high: number = 0;
    low: number = 0;
    close: number = 0;
    volume: number = 0;
    date: Date = new Date();

    constructor(rawData: Array<String | number>) {
        this.open = +rawData[0];
        this.high = +rawData[1];
        this.low = +rawData[2];
        this.close = +rawData[3];
        this.volume = +rawData[4];
        this.date = new Date(+rawData[5]);
    }

    get toString() {
        return `open:${this.open}, high:${this.high}, low:${this.low}, open:${this.open}, close:${this.close}, volume:${this.volume}, date:${this.date}`
    }

}