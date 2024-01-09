import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalComponent } from '../animal/animal.component';
import { Animal } from '../animal';
import { AnimalService } from '../services/animal.service';

@Component({
  selector: 'app-animal-list',
  standalone: true,
  imports: [CommonModule, AnimalComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter By Name...">
        <button class="primary" type="button">Search</button>
      </form>
    </section>

    <section class="animals">
      <app-animal 
        *ngFor="let anim of animalList"
        [animal]="anim"
      ></app-animal>
    </section>
  `,
  styleUrl: './animal-list.component.css'
})

export class AnimalListComponent implements OnInit{
  animalList:Animal[] = [];
  dbUrl = "http://localhost:3004/animals";
  animalService = inject(AnimalService)

  ngOnInit () {
    this.getAllAnimals();
  }

  private getAllAnimals() {
    this.animalService.getAllAnimals().subscribe(
      data => {this.animalList = data},
      error => {throw error},
      () => console.log("Fetched Data")
    );
  }

}
