export class HttpClientDto {
    method!: string;
    responseType!: string;
    body!: any;
    UrlParams!: any;
    Url!: string;
    isStock: boolean = false;
}