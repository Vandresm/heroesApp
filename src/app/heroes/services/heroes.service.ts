import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroe } from '../interfaces/heroe.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  private url: string = "http://localhost:3000/heroes"

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Heroe[]>{
    return this.http.get<Heroe[]>(this.url);
  }

  verHeroe(id: string): Observable<Heroe>{
    return this.http.get<Heroe>(`${this.url}/${id}`);
  }
}
