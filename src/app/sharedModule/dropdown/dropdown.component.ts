import { Component, Input } from '@angular/core';
import {
  transition,
  trigger,
  state,
  style,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
  animations: [
    // Each unique animation requires its own trigger. The first argument of the trigger function is the name
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0)' })),
      state('rotated', style({ transform: 'rotate(180deg)' })),
      transition('rotated => default', animate('200ms ease-out')),
      transition('default => rotated', animate('200ms ease-in')),
    ]),
  ],
})
export class DropdownComponent {
  @Input() mainInputClass = '';
  @Input() openMenuClass = '';
  openBox = 'default';
  show = false;
  languages = ['Uz', 'Eng', 'Ru'];
  openMenu() {
    this.openBox = this.openBox == 'default' ? 'rotated' : 'default';
    this.show = !this.show;
  }
}
