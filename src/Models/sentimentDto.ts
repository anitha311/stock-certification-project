export class SentimentInfo {
    symbol!: string;
    year!: number;
    month!: number;
    change!: number;
    mspr!:number;
}

export class SentimentResponse {
    data: SentimentInfo[] =[];
    symbol:string = '';
}