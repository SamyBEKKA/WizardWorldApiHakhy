import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private apiUrl = 'https://wizard-world-api.herokuapp.com';

  constructor(private http: HttpClient) { }

  postFeedback(feedbackData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/feedback`, feedbackData);
  }
}
