import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Animal } from '../animal';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dbUrl = "http://localhost:3004"; // link to the database
  
  allAnimals:Animal[] = [];

  constructor(private http:HttpClient) {}

  // Animal Specific Service Functions
  getAllAnimals () {
    
    return this.allAnimals;
  }

  getAnimalById (id:number) {
    return this.allAnimals.find((val) => val.id === id );
  }

  // Non Specific Service Functions
  get<T>(queryString:string):Observable<T[]> {
    return this.http.get<T[]>(`${this.dbUrl}/${queryString}`);
  }

  getById<T>(queryString:string, id:number):Observable<T> {
    return this.http.get<T>(`${this.dbUrl}/${queryString}/${id}`);
  }

  deleteById(queryString:string, id:number) {
    this.http.delete(`${this.dbUrl}/${queryString}/${id}`).subscribe((data) => {console.log("Deleted:", data)});
  }
  
  post<T>(queryString:string, body:T):Observable<T> {
    return this.http.post<T>(`${this.dbUrl}/${queryString}`, body);
  }

  put<T>(queryString:string, body:T):Observable<T> {
    return this.http.put<T>(`${this.dbUrl}/${queryString}`, body);
  }


}
