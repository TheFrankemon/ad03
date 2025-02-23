import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Item, ItemStatus } from '../../models/item.model';

@Component({
  selector: 'app-new-item-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-item-form.component.html',
  styleUrl: './new-item-form.component.scss'
})
export class NewItemFormComponent {
  options = Object.values(ItemStatus);
  data = inject<Item|null>(DIALOG_DATA);
  dialogRef = inject(DialogRef<Item|null>);

  itemTitle = '';
  itemDescription = '';
  selectedStatus = '';

  ngOnInit() {
    if (this.data) {
      this.itemTitle = this.data.title;
      this.itemDescription = this.data.description;
      this.selectedStatus = this.data.status;
    }
  }

  saveItem() {
    const formData: Item = {
      title: this.itemTitle,
      description: this.itemDescription,
      status: this.selectedStatus as ItemStatus,
      creation_date: new Date(),
    };

    this.dialogRef.close(formData);
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
