import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuoteModalService {
    constructor(private http: HttpClient) {}

  open():void {
    throw new Error('Method not implemented.');
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  private url = ''; 

  modelQuote(data:any): Observable<any> {
    return this.http.post<any>(this.url, data);
  }
}