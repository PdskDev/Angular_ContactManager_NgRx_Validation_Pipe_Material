import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private http: HttpClient) {}

  getContact() {
    return this.http.get(`${environment.apiUrl}/contacts`);
  }

  addContact(contactData: any) {
    return this.http.post(`${environment.apiUrl}/contacts`, contactData);
  }

  editContact(contactData: any) {
    return this.http.put(
      `${environment.apiUrl}/contacts/${contactData.id}`,
      contactData
    );
  }

  deleteContact(contactId: number) {
    return this.http.delete(`${environment.apiUrl}/contacts/${contactId}`);
  }
}
