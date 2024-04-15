import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, filter, map } from 'rxjs';
import { Deal, Item } from './deal.model';

@Injectable({
  providedIn: 'root'
})
export class GameServiceService {

  constructor(private http: HttpClient) { }

  fetchDeals() {
    return this.http.get<Array<Deal>>('https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15');
  }
}
