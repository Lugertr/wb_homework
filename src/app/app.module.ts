import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppMaterial } from './app-material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ColorfulDirective } from './directives/colorful.directive';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ContactsComponent } from './components/pages/contacts/contacts.component';
import { FooterComponent } from './components/footer/footer.component';
import { FollowLinksComponent } from './components/UI/follow-links/follow-links.component';
import { InputComponent } from './components/UI/input/input.component';
import { CheckboxComponent } from './components/UI/checkbox/checkbox.component';
import { ModalComponent } from './components/modal/modal.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { SignModalComponent,DialogSignIn,DialogSignUp } from './components/sign-modal/sign-modal.component';
import { BlogCardComponent } from './components/UI/blog-card/blog-card.component';



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
    BlogComponent,
    SignModalComponent,
    DialogSignIn,
    DialogSignUp,
    BlogCardComponent,
    
    ColorfulDirective 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppMaterial,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
