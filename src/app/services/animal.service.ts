import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  protected dbUrl = "http://localhost:3004";

  constructor(private http:HttpClient) { }

  getAll<T>(queryString:string):Observable<T[]> {
    return this.http.get<T[]>(`${this.dbUrl}/${queryString}`);
  }

  getById<T>(queryString:string, id:number):Observable<T> {
    return this.http.get<T>(`${this.dbUrl}/${queryString}/${id}`);
  }
  
  post<T>(queryString:string, body:T):Observable<T[]> {
    return this.http.post<T[]>(`${this.dbUrl}/${queryString}`, JSON.stringify(body));
  }


}
