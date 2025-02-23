import { Component, inject } from '@angular/core';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Item, ItemStatus } from '../../models/item.model';

@Component({
  selector: 'app-new-item-form',
  standalone: true,
  imports: [],
  templateUrl: './new-item-form.component.html',
  styleUrl: './new-item-form.component.scss'
})
export class NewItemFormComponent {
  options = Object.values(ItemStatus);
  data = inject<Item>(DIALOG_DATA);
  dialogRef = inject(DialogRef<Item>);

  saveItem() {
    this.dialogRef.close(this.data);
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
