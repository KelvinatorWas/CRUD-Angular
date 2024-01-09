import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalComponent } from '../animal/animal.component';
import { Animal } from '../animal';
import { DataService } from '../services/animal.service';

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

    <section class="editor"> 
      <section class="animals">
        <app-animal 
          *ngFor="let anim of animalList"
          [animal]="anim"
        ></app-animal>
      </section>

      <section class="editor-form-section">
        <form class="add-animal">
          <label for="name">Name:</label>
          <input type="text" placeholder="Name...">

          <label for="image">Image Name:</label>
          <input type="text" placeholder="Image Name...">

          <button class="primary" type="button">Add Animal</button>

        </form>
      </section>
    </section>
  `,
  styleUrl: './animal-list.component.css'
})

export class AnimalListComponent implements OnInit{
  private queryString = "animals";
  animalList:Animal[] = [];
  animalService = inject(DataService)

  ngOnInit () {
    this.getAllAnimals();
  }

  private getAllAnimals() {
    this.animalService.getAll<Animal>(this.queryString).subscribe(
      data => {this.animalList = data},
      error => {throw error},
      () => console.log("Fetched Data")
    );
  }

}
