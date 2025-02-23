import { Component, inject, OnInit } from '@angular/core';
import { Item } from '../../models/item.model';
import { Dialog } from '@angular/cdk/dialog';
import { NewItemFormComponent } from '../new-item-form/new-item-form.component';
import { mockData } from '../../models/mockdata';
import { HomeItemComponent } from "../shared/home-item/home-item.component";
import { FormsModule } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

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
  selectedItems = new BehaviorSubject<number[]>([]);
  selectedItems$ = this.selectedItems.asObservable();
  showShareButton = false;

  ngOnInit() {
    const lsItems = localStorage.getItem('items');
    if (lsItems) {
      this.items = JSON.parse(lsItems);
    }

    this.filteredItems = this.items;

    this.selectedItems$.subscribe(values => {
      this.showShareButton = values.length > 0;
    });
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
    const currentItems = this.selectedItems.value;
    if (!currentItems.includes(idx)) {
      this.selectedItems.next([...currentItems, idx]);
    } else {
      this.selectedItems.next(currentItems.filter(it => idx !== it));
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
      }
    });
  }

  shareItems() {
    const sharedItems = this.selectedItems.value.map(idx => this.items[idx]);
    console.log("%cSelected Items to share\n", "background-color: black; color: #0ABD36; font-size: 16px");
    console.log("%c"+JSON.stringify(sharedItems, undefined, 4), "background-color: black; color:rgb(228, 149, 0); font-size: 12px; padding: 8px");

    this.selectedItems.next([]);
  }
}
