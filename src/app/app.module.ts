import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ContactDialogComponent } from './contact-dialog/contact-dialog.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactFormPageComponent } from './contact-form-page/contact-form-page.component';
import { ContactService } from './contact.service';
import { CustomFormsModule } from 'ng2-validation';
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { SearchContactsPipe } from './search-contacts.pipe';
import { StoreModule } from '@ngrx/store';
import { TopBarComponent } from './top-bar/top-bar.component';
import { reducers } from './reducers';

@NgModule({
  declarations: [
    AppComponent,
    ContactDialogComponent,
    ContactFormComponent,
    ContactFormPageComponent,
    HomePageComponent,
    TopBarComponent,
    SearchContactsPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTableModule,
    MatDialogModule,
    MatDatepickerModule,
    MatSelectModule,
    MatCardModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CustomFormsModule,

    StoreModule.forRoot(reducers),
  ],
  providers: [ContactService, SearchContactsPipe],
  bootstrap: [AppComponent],
  entryComponents: [ContactDialogComponent],
})
export class AppModule {}
