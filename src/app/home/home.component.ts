import { Component, inject } from '@angular/core';
import { Item } from '../../models/item.model';
import { DatePipe } from '@angular/common';
import { Dialog } from '@angular/cdk/dialog';
import { NewItemFormComponent } from '../new-item-form/new-item-form.component';
import { mockData } from '../../models/mockdata';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  dialog = inject(Dialog);
  items: Item[] = mockData;
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
