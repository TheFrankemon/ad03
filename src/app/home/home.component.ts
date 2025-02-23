import { Component, inject, OnInit } from '@angular/core';
import { Item } from '../../models/item.model';
import { Dialog } from '@angular/cdk/dialog';
import { NewItemFormComponent } from '../new-item-form/new-item-form.component';
import { mockData } from '../../models/mockdata';
import { HomeItemComponent } from "../shared/home-item/home-item.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeItemComponent, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  dialog = inject(Dialog);
  items: Item[] = mockData;
  filteredItems: Item[] = [];
  searchQuery = '';
  selectedItems: number[] = [];

  ngOnInit() {
    const lsItems = localStorage.getItem('items');
    if (lsItems) {
      this.items = JSON.parse(lsItems);
    }

    this.filteredItems = this.items;
  }

  filterItems() {
    if (this.searchQuery === '') {
      this.filteredItems = this.items;
      return;
    }

    this.filteredItems = this.items.filter(item =>
      item.title.toLowerCase().includes(this.searchQuery.toLowerCase()) || item.description.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  selectItem(idx: number) {
    if (!this.selectedItems.includes(idx)) {
      this.selectedItems.push(idx);
    } else {
      this.selectedItems = this.selectedItems.filter(it => idx !== it);
    }
  }

  deleteItem(idx: number) {
    this.items.splice(idx, 1);
    localStorage.setItem('items', JSON.stringify(this.items));
  }

  openItemForm(idx?: number) {
    const isEdit = idx !== undefined;
    const data = isEdit ? this.items[idx] : null;
    const dialogRef = this.dialog.open<Item | null>(NewItemFormComponent, {
      disableClose: true,
      data
    });

    dialogRef.closed.subscribe(result => {
      if (!!result) {
        if (isEdit) {
          const updatedItem: Item = { ...result, update_date: new Date() };
          this.items[idx] = updatedItem;
        } else {
          this.items.push(result);
        }
        localStorage.setItem('items', JSON.stringify(this.items));
      } else {
        console.log('form closed');
      }
    });
  }
}
