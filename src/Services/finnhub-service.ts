import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClientDto } from 'src/Models/HttpClientDto';
import { QuoteDto, StockDetailsDto, StockResponse } from 'src/Models/QuoteDto';
import { SentimentResponse } from 'src/Models/sentimentDto';
import { HttpService } from './HttpService';

@Injectable({
  providedIn: 'root'
})
export class FinnHttpService {
  public params = new HttpClientDto();
  constructor(
    private httpService: HttpService,
    // private cacheService: HttpCacheService
  ) {
  }

  GetQuota(req: string): Observable<QuoteDto> {
    this.params.Url = `quote?symbol=${req}&token=${environment.APIKEY}`;
    return this.httpService.HttpGetMethod<QuoteDto>(this.params);
  }

  GetSymbolBySearch(req: string): Observable<StockResponse> {
    this.params.Url = `search?q=${req}&token=${environment.APIKEY}`;
    return this.httpService.HttpGetMethod<StockResponse>(this.params);
  }

  GetSentimentInfo(req: string): Observable<SentimentResponse> {
    this.params.isStock = true;
    this.params.Url = `insider-sentiment?symbol=${req}&from=${moment().subtract(3, 'months').format("YYYY-MM-DD") }&to=${moment().format("YYYY-MM-DD")}&token=${environment.APIKEY}`;
    return this.httpService.HttpGetMethod<SentimentResponse>(this.params);
  }
}
