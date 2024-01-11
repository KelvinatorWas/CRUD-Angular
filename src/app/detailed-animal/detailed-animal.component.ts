import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { DataService } from '../services/animal.service';
import { Animal } from '../animal';
import { ButtonComponent } from '../button/button.component';
import { ModalComponent } from '../modal/modal/modal.component';
import { ImageComponent } from '../image/image.component';

@Component({
  selector: 'app-detailed-animal',
  standalone: true,
  imports: [CommonModule, ButtonComponent, ModalComponent, RouterModule, ImageComponent],
  templateUrl: './detailed-animal.component.html',
  styleUrl: './detailed-animal.component.css'
})

export class DetailedAnimalComponent implements OnInit {
  private router = new Router();
  route: ActivatedRoute = inject(ActivatedRoute);
  animalService:DataService = inject(DataService);
  animalData:Animal | undefined;

  animalId = -1;
  showModal = false; // show pop up 

  ngOnInit(): void {
    this.animalData = undefined;
    this.getAnimal();
  }

  constructor() {
    this.getAnimal();
  }

  private getAnimal() {
    this.animalData = undefined;
    this.animalId = Number(this.route.snapshot.params['id']);
    this.animalService.getById<Animal>("animals", this.animalId).subscribe(
      data => this.animalData = data,
      error => {
        if(error.status === 404) this.router.navigate(["not-found"])
      }
    );
  }

  protected clickOnDelete() {
    this.showModal = !this.showModal;
  }

  protected onDelete () {
    this.animalService.deleteById("animals", this.animalId).subscribe((data) => {console.log("Deleted:", data); this.router.navigate(['/']);});
    this.showModal = !this.showModal;
  }

  protected clickOnEdit() {
    this.router.navigateByUrl(`/preview/${this.animalId}/edit`);
  }

}
