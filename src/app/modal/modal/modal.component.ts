import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonComponent } from '../../button/button.component';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Output() eventOnClick = new EventEmitter();
  @Output() eventOnDelete = new EventEmitter();
  @Input() show = false;
  
  onClickBtn() {
    this.eventOnClick.emit();
    this.show = !this.show;
  }
  onClickDeleteBtn() {
    this.eventOnDelete.emit();
    this.show = !this.show;
  }

  
}
