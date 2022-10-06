import { Component, OnInit } from '@angular/core';
import { StockDetailsDto } from 'src/Models/QuoteDto';
import { StockModelDto } from 'src/Models/StockModel';
import { FinnHttpService } from 'src/Services/finnhub-service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  showQuote: boolean = false;
  stockName: string = '';
  stockModelDto:StockModelDto[] =[];
  stockDetailsDto: StockDetailsDto = new StockDetailsDto();
  constructor(
    private finnService: FinnHttpService
  ) { }

  ngOnInit(): void {
    if(localStorage.getItem('quoteinfo') != undefined) {
      this.stockModelDto =  JSON.parse(localStorage.getItem('quoteinfo')as string);
      this.showQuote = this.stockModelDto.length >0;
    }
  }
  
  
  TrackStock() {
    if(this.stockName.length < 1 || this.stockName.length > 5) {
      return ;
    }
    if( this.stockModelDto.filter(f => f.stockCode == this.stockName).length > 0) {
      return;
    }
    this.showQuote = false;
    this.finnService.GetSymbolBySearch(this.stockName).subscribe(
      suc => {
        this.stockDetailsDto = suc.result.filter(e => e.symbol == this.stockName)[0];
        if (this.stockDetailsDto != undefined && this.stockDetailsDto != null) {
          this.finnService.GetQuota(this.stockName).subscribe(
            response => {
              this.stockDetailsDto.quote = response;
              this.stockModelDto.push( {
                stockCode: this.stockName,
                stockData: this.stockDetailsDto
              });
              localStorage.setItem('quoteinfo', JSON.stringify(this.stockModelDto));
              this.stockName = '';
              window.location.reload();
            })
        }
        this.showQuote = true;
      },
      err => {
        this.showQuote = true;
      })
  }

  ngOnChanges() {
    this.showQuote = this.stockModelDto.length > 0;
  }

}
