import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environments } from '../environments/environments';

@Injectable({
	providedIn: 'root'
})
export class FeaturesService {

	private apiUrl = environments.API_URL;

	constructor(private http: HttpClient) { }

	getFeature(): Observable<any> {
		return this.http.get<any>(this.apiUrl);
	}

}