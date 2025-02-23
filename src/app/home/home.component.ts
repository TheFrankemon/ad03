import { Component, inject } from '@angular/core';
import { Item, ItemStatus } from '../../models/item.model';
import { DatePipe } from '@angular/common';
import { Dialog } from '@angular/cdk/dialog';
import { NewItemFormComponent } from '../new-item-form/new-item-form.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  dialog = inject(Dialog);
  items: Item[] = [
    {
      title: 'Spring Boot 🍃',
      description: 'Open-source framework for developing web applications a...',
      status: ItemStatus.BackEnd,
      creation_date: new Date('2025-02-09 09:25:50')
    },
    {
      title: 'HTML 🍊',
      description: 'Markup language that defines the structure and content of...',
      status: ItemStatus.FrontEnd,
      creation_date: new Date('2025-02-09 09:35:15')
    },
    {
      title: 'Type Script 🛹',
      description: 'Open-source high-level programming language developed...',
      status: ItemStatus.FrontEnd,
      creation_date: new Date('2025-02-09 09:45:15'),
      update_date: new Date('2025-02-09 09:45:15')
    }
  ];
  selectedItems: number[] = [2];

  selectItem(idx: number) {
    if (!this.selectedItems.includes(idx)) {
      this.selectedItems.push(idx);
    } else {
      this.selectedItems = this.selectedItems.filter(it => idx !== it);
    }
  }

  newItemForm() {
    const dialogRef = this.dialog.open<Item | null>(NewItemFormComponent, {
      disableClose: true,
      // minWidth: '300px',
      // data,
    });

    dialogRef.closed.subscribe(result => {
      if (!!result) {
        console.log(result);
        this.items.push(result);
      } else {
        console.log('with X');
      }
    });
  }
}
