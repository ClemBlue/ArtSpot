import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Oeuvres } from '../models/oeuvres';

@Injectable({
  providedIn: 'root'
})
export class OeuvresService {
  private url = environment.apiUrl
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Array<any>>(this.url);
  }

  getSolo(id: number){
    return this.http.get<any>(this.url + id);
  }

  add(oeuvres: Oeuvres) {
    console.log(oeuvres);
    return this.http.post(this.url, oeuvres);
  }
}
