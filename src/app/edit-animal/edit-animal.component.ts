import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { DataService } from '../services/animal.service';
import { Animal, speciesType } from '../animal';
import { ButtonComponent } from '../button/button.component';
import { ModalEditComponent } from '../modal/modal-edit/modal-edit.component';

@Component({
  selector: 'app-edit-animal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, ButtonComponent, ModalEditComponent],
  templateUrl: './edit-animal.component.html',
  styleUrl: './edit-animal.component.css'
})
export class EditAnimalComponent {
  private router = new Router();
  route: ActivatedRoute = inject(ActivatedRoute);
  animalService:DataService = inject(DataService);
  animalData:Animal | undefined;

  showModal = false; // show pop up 


  animalForm = new FormGroup( {
    name: new FormControl(''),
    image: new FormControl(''),
    age: new FormControl(''),
    species: new FormControl<speciesType>('Unknown'),
  });

  constructor() {
    this.animalData = this.router.getCurrentNavigation()?.extras.state as Animal;
    this.setFormData();
  }

  protected setFormData () {
    if (!this.animalData) return;
    const {name, image, age, species} = this.animalData
    this.animalForm.setValue({name, image, age:`${age}`, species});
  }

  protected clickOnSave() {
    this.showModal = !this.showModal;
  }
  
  clickOnCancel () {
    if (!this.animalData) return;
    this.router.navigate([`/preview/${this.animalData.id}`]);
  }

  protected onSave() {
    if (!this.animalData) return;
    this.showModal = !this.showModal;
    this.updateAnimal();
    this.router.navigate([`/preview/${this.animalData.id}`]);
  }

  private updateAnimal() {
    const {name, image, species, age} = this.animalForm.value;
    if (!name || !image || !species || !age || !this.animalData) return;

    const animalAge = +age;
    const animalImgae = image.toLowerCase();

    this.animalService.put<Animal>(`animals/${this.animalData.id}`, { name:name, image:animalImgae, age:animalAge, species:species}).subscribe(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      (_) => { console.log("update animal") },
    );
  }
}
