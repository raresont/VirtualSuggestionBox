import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Suggestion } from '../_models/Suggestion';

@Injectable({
  providedIn: 'root'
})

export class SuggestionService {
  constructor(private http: HttpClient) { }

  private serviceURL = "https://localhost:44361/api/suggestion";

  getAll() {
    console.log(environment);
    return this.http.get<Suggestion[]>(this.serviceURL);
  }
  getById(id: number) {
    return this.http.get(`${environment.apiUrl}/api/suggestion/` + id);
  }

  add(suggestion: Suggestion) {
    return this.http.post(`${environment.apiUrl}/api/suggestion/register`, suggestion);
  }

  update(suggestion: Suggestion) {
    return this.http.put(`${environment.apiUrl}/api/suggestion/` + suggestion.id, suggestion);
  }

  delete(id: number) {
    return this.http.delete(`${environment.apiUrl}/api/suggestion/` + id);
  }

}
