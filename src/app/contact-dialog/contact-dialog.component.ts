import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ContactService } from '../contact.service';
import { Store } from '@ngrx/store';
import { SET_CONTACTS } from '../reducers/contacts-reducers';

@Component({
  selector: 'app-contact-dialog',
  templateUrl: './contact-dialog.component.html',
  styleUrls: ['./contact-dialog.component.css'],
})
export class ContactDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ContactDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public contactData: any,
    private contactService: ContactService,
    private store: Store<any>
  ) {}

  getContacts() {
    this.contactService.getContact().subscribe((res) => {
      this.store.dispatch({ type: SET_CONTACTS, payload: res });
      this.dialogRef.close();
    });
  }

  ngOnInit(): void {}
}
