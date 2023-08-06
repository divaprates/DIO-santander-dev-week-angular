import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environments } from '../environments/environments';
import { AccountDataModel } from '../model/AccountDataModel';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  private apiURL = environments.API_URL;
  
  constructor(private http: HttpClient) { }

  getCard(): Observable<any> {
    return this.http.get<AccountDataModel>(this.apiURL);
  }
  
}
