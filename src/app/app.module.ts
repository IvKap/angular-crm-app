import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ShowCustomersComponent } from './components/show-customers/show-customers.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditCustomerComponent } from './components/edit-customer/edit-customer.component';
import { HomeComponent } from './components/home/home.component';
import { FilterPipe } from './pipes/filter.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    AddCustomerComponent,
    NavbarComponent,
    ContactsComponent,
    ShowCustomersComponent,
    EditCustomerComponent,
    HomeComponent,
    FilterPipe,
    ShowCustomersComponent ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    FormsModule,
    NgbModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
