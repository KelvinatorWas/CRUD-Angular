import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Animal } from '../animal';

@Component({
  selector: 'app-animal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section *ngIf="animal" class="animal">
      <img class="animal-image" alt="Image of {{animal.name}}" [src]="animal.image">
      <h2 class="animal-name">{{animal.name}}</h2>
    </section> 
  `,
  styleUrl: './animal.component.css'
})
export class AnimalComponent {
  @Input() animal:Animal | undefined;
}
