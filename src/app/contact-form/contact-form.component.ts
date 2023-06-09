import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { ContactService } from '../contact.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { SET_CONTACTS } from '../reducers/contacts-reducers';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent implements OnInit {
  contactData: any = <any>{};
  countries = COUNTRIES;

  @Input('edit') edit: boolean = false;
  @Input('contact') contact: any = <any>{};
  @Output('contactEdited') contactEdited = new EventEmitter();

  constructor(
    private store: Store<any>,
    private contactService: ContactService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    if (this.contact) {
      this.contactData = this.contact;
    }
  }

  getPostalCodeRegex() {
    if (this.contactData.country == 'United States') {
      return /^[0-9]{5}(?:-[0-9]{4})?$/;
    } else if (this.contactData.country == 'Canada') {
      return /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
    }
    return /./;
  }

  getPhoneRegex() {
    if (['United States', 'Canada'].includes(this.contactData.country)) {
      return /^[2-9]\d{2}[2-9]\d{2}\d{4}$/;
    }
    return /./;
  }

  save(contactForm: NgForm) {
    if (contactForm.invalid) {
      return;
    }

    if (this.edit) {
      this.contactService.editContact(this.contactData).subscribe((res) => {
        this.contactEdited.emit(null);
      });
    } else {
      this.contactService.addContact(this.contactData).subscribe((res) => {
        this.getContacts();
        this.router.navigate(['/']);
      });
    }
  }

  getContacts() {
    this.contactService.getContact().subscribe((res) => {
      this.store.dispatch({ type: SET_CONTACTS, payload: res });
    });
  }
}
