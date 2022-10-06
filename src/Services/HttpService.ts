import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { HttpClientDto } from "src/Models/HttpClientDto";
@Injectable({
    providedIn: 'root'
})

export class HttpService {

    constructor(
      private httpClient: HttpClient
    ) { }

    HttpGetMethod<T>(getRequest: HttpClientDto): Observable<T> {
        return this.httpClient.get<T>((getRequest.isStock ? environment.APIURLSTOCK : environment.APIURL) + getRequest.Url);
      }
}