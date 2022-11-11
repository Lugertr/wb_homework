import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ContactsComponent } from './components/pages/contacts/contacts.component';
import { FooterComponent } from './components/footer/footer.component';
import { FollowLinksComponent } from './components/UI/follow-links/follow-links.component';
import { InputComponent } from './components/UI/input/input.component';
import { CheckboxComponent } from './components/UI/checkbox/checkbox.component';
import { ModalComponent } from './components/modal/modal.component';
import { ModalLinksComponent } from './components/UI/modal-links/modal-links.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    ContactsComponent,
    FollowLinksComponent,
    InputComponent,
    CheckboxComponent,
    ModalComponent,
    ModalLinksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
