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
  animalId = -1;
  showModal = false; // show pop up 
  animalForm = new FormGroup( {
      name: new FormControl(''),
      image: new FormControl(''),
      age: new FormControl(''),
      species: new FormControl<speciesType>('Unknown'),
    }
  );
  
  constructor() {
    this.getAnimal();
  }

  private toggleShow() {
    this.showModal = !this.showModal;
  }

  private getAnimal() {
    this.animalId = Number(this.route.snapshot.params['id']);
    this.animalService.getById<Animal>("animals", this.animalId).subscribe(
      data => {
        this.animalData = data;
        this.setFormData();
      },
      error => {
        if(error.status === 404) this.router.navigate(["not-found"])
      }
    );
  }

  protected setFormData () {
    if (!this.animalData) return;
    const {name, image, age, species} = this.animalData;
    this.animalForm.setValue({name, image, age:`${age}`, species});
  }

  protected clickOnSave() {
    this.toggleShow();
  }
  
  protected clickOnCancel () {
    if (!this.animalData) return;
    this.router.navigate([`/preview/${this.animalData.id}`]);
  }

  protected onSave() {
    if (!this.animalData) return;

    this.toggleShow();
    this.updateAnimal();
  }

  protected updateAnimal() {
    const {name, image, species, age} = this.animalForm.value;
    if (!name || !image || !species || !age) return;

    const animalAge = +age;
    const animalImgae = image.toLowerCase();

    this.animalService.put<Animal>(`animals/${this.animalId}`, { name:name, image:animalImgae, age:animalAge, species:species}).subscribe(
      () => { console.log("update animal"); this.router.navigate([`/preview/${this.animalId}`]); },
    );
  }
}
