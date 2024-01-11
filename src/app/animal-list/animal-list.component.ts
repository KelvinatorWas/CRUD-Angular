import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalComponent } from '../animal/animal.component';
import { Animal, speciesType } from '../animal';
import { DataService } from '../services/animal.service';
import { FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-animal-list',
  standalone: true,
  imports: [CommonModule, AnimalComponent, ReactiveFormsModule, ButtonComponent],
  templateUrl: './animal-list.component.html',
  styleUrl: './animal-list.component.css'
})

export class AnimalListComponent implements OnInit{
  private queryString = "animals";
  protected showAddAnimalForm = false;
  animalList:Animal[] = [];
  animalService = inject(DataService);

  animalForm = new FormGroup( {
    name: new FormControl(''),
    image: new FormControl(''),
    age: new FormControl(''),
    species: new FormControl<speciesType>('Unknown'),
  });

  ngOnInit () {
    this.getAllAnimals();
  }

  constructor () {
    this.getAllAnimals();
  }

  protected animalFormVisible = () => this.showAddAnimalForm = !this.showAddAnimalForm;

  private getAllAnimals() {
    this.animalService.get<Animal>(this.queryString).subscribe(
      data => {this.animalList = data},
      error => {throw error},
      () => console.log("Fetched Data")
    );
  }

  protected postAnimal() {
    const {name, image, species, age} = this.animalForm.value;
    if (!name || !image || !species || !age) return;

    const animalAge = +age;
    const animalImgae = image.toLowerCase();

    this.animalService.post<Animal>(this.queryString, { name:name, image:animalImgae, age:animalAge, species:species}).subscribe(
      (data) => {this.animalForm.reset(); this.animalList.push(data);},
    );
  }
}
