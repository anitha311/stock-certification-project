import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StockModelDto } from 'src/Models/StockModel';

@Component({
  selector: 'app-current-quote',
  templateUrl: './current-quote.component.html',
  styleUrls: ['./current-quote.component.css']
})
export class CurrentQuoteComponent implements OnInit {
  showQuoteInfo:boolean = false;
  stockModelDto:StockModelDto[] =[];
  constructor(
    private route: Router
  ) { }

  ngOnInit(): void {
    console.log('quote component');
    if(localStorage.getItem('quoteinfo') != undefined) {
      this.stockModelDto =  JSON.parse(localStorage.getItem('quoteinfo')as string);
      this.showQuoteInfo = this.stockModelDto.length >0;
    }
  }

  ngOnChanges() {
    this.showQuoteInfo = this.stockModelDto.length > 0;
  }

  gotoSentimentDetail(stockName:StockModelDto) {
    this.route.navigateByUrl(`sentiment/${stockName.stockCode}`)
  }

  removeItem(row: StockModelDto) {
    localStorage.removeItem("quoteinfo");
    this.stockModelDto.forEach((item,index)=> {
      if (item.stockCode === row.stockCode) {
        this.stockModelDto.splice(index, 1);
        localStorage.setItem("quoteinfo",JSON.stringify(this.stockModelDto));
      }
    });
  }
}
