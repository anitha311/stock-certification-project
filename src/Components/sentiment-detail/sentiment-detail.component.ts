import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SentimentInfo } from 'src/Models/sentimentDto';
import { StockModelDto } from 'src/Models/StockModel';
import { FinnHttpService } from 'src/Services/finnhub-service';

@Component({
  selector: 'app-sentiment-detail',
  templateUrl: './sentiment-detail.component.html',
  styleUrls: ['./sentiment-detail.component.css']
})
export class SentimentDetailComponent implements OnInit {
  sentimentInfo: SentimentInfo[] = [];
  currentQuote: string = '';
  constructor(private router: Router,
    private finnService: FinnHttpService,
    private params: ActivatedRoute) { }

  ngOnInit(): void {
    this.currentQuote = this.params.snapshot.paramMap.get('quote') as string;
    this.getSentimentData();
  }

  getSentimentData() {
    this.finnService.GetSentimentInfo(this.currentQuote).subscribe( 
      suc => {
        this.sentimentInfo = suc.data;
      }
    )
  }

  getStockName(): string {
    if(localStorage.getItem('quoteinfo') != undefined) {
      let response =  JSON.parse(localStorage.getItem('quoteinfo')as string) as StockModelDto[];
      if (response != undefined) {
        let titleInfo = response.filter(e => e.stockCode == this.currentQuote);
        if (titleInfo.length >0 ) {
          return `${titleInfo[0].stockData.description} (${titleInfo[0].stockData.symbol})`
        }
      }
    }
    return '';
  }

  backtoQuote() {
    this.router.navigateByUrl('');
  }

}
