import { StockDetailsDto } from "./QuoteDto";

export class StockModelDto {
    stockCode:string = '';
    stockData:StockDetailsDto = new StockDetailsDto();
}