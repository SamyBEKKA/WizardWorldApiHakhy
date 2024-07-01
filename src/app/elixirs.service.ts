import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Elixirs } from './entities';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ElixirsService {

  private apiUrl = 'https://wizard-world-api.herokuapp.com';

  constructor(private http: HttpClient) { }

  getElixirs(): Observable<Elixirs[]> {
  return this.http.get<Elixirs[]>(`${this.apiUrl}/Elixirs`).pipe(
    map((elixirs: Elixirs[]) => elixirs.filter(
      (elixir: Elixirs) => elixir.name.includes('Potion'))), 
    catchError(error => {
      console.error('Erreur lors de la récupération des élixirs : ', 
        error);
      return of([]);
    })
    );
  }
}
