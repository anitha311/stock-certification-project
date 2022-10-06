export class QuoteDto {
    c!: number;   
    d!: number;   
    dp!: number;   
    h!: number;
    l!: number;   
    o!: number;   
    pc!: number;   
    t!: number;   
}


export class StockDetailsDto {
    quote: QuoteDto = new QuoteDto();
    description!: string;
    displaySymbol!: string;
    symbol!:string;
}

export class StockResponse {
    count: number =0;
    result: StockDetailsDto[]= [];
}