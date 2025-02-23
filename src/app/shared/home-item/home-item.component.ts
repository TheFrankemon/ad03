import { Component, input, output } from '@angular/core';
import { Item } from '../../../models/item.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home-item',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './home-item.component.html',
  styleUrl: './home-item.component.scss'
})
export class HomeItemComponent {
  item = input.required<Item>();
  isSelected = input<boolean>();
  selectItem = output<void>();
}
