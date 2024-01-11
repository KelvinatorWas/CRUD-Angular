import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Output() eventOnClick = new EventEmitter();
  @Input() innerText: string | undefined;
  @Input() cssClass: string = '';
  @Input() activeStyle: string = '';
  @Input() type: string = 'button';


  protected onClick() {
    this.eventOnClick.emit();
  }
}
