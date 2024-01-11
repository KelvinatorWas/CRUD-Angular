import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Animal } from '../animal';
import { RouterModule } from '@angular/router';
import { ImageComponent } from '../image/image.component';

@Component({
  selector: 'app-animal',
  standalone: true,
  imports: [CommonModule, RouterModule, ImageComponent],
  templateUrl: './animal.component.html',
  styleUrl: './animal.component.css'
})
export class AnimalComponent {
  @Input() animal:Animal | undefined;
}
