import { Injectable } from '@angular/core';
import { Animal } from '../animal';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  protected dbUrl = "http://localhost:3004";

  protected animalsList: Animal[] = [];

  constructor(private http:HttpClient) { }

  getAllAnimals():Observable<Animal[]> {
    console.log(this.animalsList)
    return this.http.get<Animal[]>(`${this.dbUrl}/animals`);

  }

  
}
