import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { DataService } from '../services/animal.service';
import { Animal, speciesType } from '../animal';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from '../button/button.component';
import { ModalComponent } from '../modal/modal/modal.component';
import { ImageComponent } from '../image/image.component';

@Component({
  selector: 'app-detailed-animal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonComponent, ModalComponent, RouterModule, ImageComponent],
  templateUrl: './detailed-animal.component.html',
  styleUrl: './detailed-animal.component.css'
})

export class DetailedAnimalComponent {
  private router = new Router();
  route: ActivatedRoute = inject(ActivatedRoute);
  animalService:DataService = inject(DataService);
  animalData:Animal | undefined;

  animalId = -1;
  showModal = false; // show pop up 


  animalForm = new FormGroup( {
    name: new FormControl(''),
    image: new FormControl(''),
    age: new FormControl(''),
    species: new FormControl<speciesType>('Unknown'),
  });

  constructor() {
    this.getAnimal();
    this.setFormData();
  }

  private getAnimal() {
    this.animalId = Number(this.route.snapshot.params['id']);
    this.animalService.getById<Animal>("animals", this.animalId).subscribe(data => this.animalData = data, error => {if(error.status === 404) this.router.navigate(["not-found"])});
  }

  protected setFormData () {
    if (!this.animalData) return;
    const {name, image, age, species} = this.animalData;
    this.animalForm.setValue({name, image, age:`${age}`, species});
  }

  protected clickOnDelete() {
    this.showModal = !this.showModal;
  }

  protected onDelete() {
    this.showModal = !this.showModal;
    this.animalService.deleteById("animals", this.animalId);
    this.router.navigate(['']);
  }

  protected clickOnEdit() {
    this.router.navigateByUrl(`/preview/${this.animalId}/edit`, {state: {...this.animalData}});
  }

}
