import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Elixirs, Houses, Wizards } from './entities';
import { FeedbackService } from './feedback.service';

@Injectable({
  providedIn: 'root'
})
export class WizardWorldApiService {

  private apiUrl = 'https://wizard-world-api.herokuapp.com';

  constructor(private http: HttpClient) { }

  // getElixirs(): Observable<Elixirs[]> {
  //   return this.http.get<Elixirs[]>(`${this.apiUrl}/Elixirs`);
  // }

  getWizards(): Observable<Wizards[]> {
    return this.http.get<Wizards[]>(`${this.apiUrl}/Wizards`);
  }
  getOneWizards(id:any): Observable<Wizards[]> {
    return this.http.get<Wizards[]>(`${this.apiUrl}/Wizards/${id}`);
  }

  // getHouses(): Observable<Houses[]> {
  //   return this.http.get<Houses[]>(`${this.apiUrl}/Houses`);
  // }

  // postFeedback(feedbackData: any): Observable<any> {
  //   return this.http.post<any>(`${this.apiUrl}/feedback`, feedbackData);
  // }
  // postFeedback(feedbackData: FeedbackService): Observable<FeedbackResponse> {
  //   return this.http.post<FeedbackResponse>(`${this.apiUrl}/feedback`, feedbackData);
  // }
}
