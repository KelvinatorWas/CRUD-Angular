import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonComponent } from '../../button/button.component';

@Component({
  selector: 'app-modal-edit',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './modal-edit.component.html',
  styleUrl: './modal-edit.component.css'
})
export class ModalEditComponent {
  @Output() eventOnClick = new EventEmitter();
  @Output() eventOnSave = new EventEmitter();
  @Input() show = false;
  
  onClickBtn() {
    this.eventOnClick.emit();
    this.show = !this.show;
  }
  onClickSaveBtn() {
    this.eventOnSave.emit();
    this.show = !this.show;
  }
}
