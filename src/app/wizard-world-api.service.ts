import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Elixirs, Houses, Wizards } from './entities';
import { FeedbackService } from './feedback.service';
import { UpperCasePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class WizardWorldApiService {

  private apiUrl = 'https://wizard-world-api.herokuapp.com';

  constructor(private http: HttpClient) { }

  private upperCasePipe = inject(UpperCasePipe);

  getWizards(): Observable<Wizards[]> {
    return this.http.get<Wizards[]>(`${this.apiUrl}/Wizards`)
    .pipe(
      map(wizard => wizard.map(wizard => {
        wizard.firstName = this.upperCasePipe.transform(wizard.firstName),
        wizard.lastName = this.upperCasePipe.transform(wizard.lastName);
      return wizard;
     })
   ))
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
