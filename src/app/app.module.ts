import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './components/UI/logo/logo.component';
import { NavBarListComponent } from './components/nav-bar/nav-bar-list/nav-bar-list.component';
import { FollowLinksComponent } from './components/UI/follow-links/follow-links.component';
import { InputComponent } from './components/UI/input/input.component';
import { ContactInfoComponent } from './components/main/contact-info/contact-info.component';
import { DropALineComponent } from './components/main/drop-a-line/drop-a-line.component';
import { CheckboxComponent } from './components/UI/checkbox/checkbox.component';
import { BtnComponent } from './components/UI/btn/btn.component';
import { LiFirstComponent } from './components/footer/li-first/li-first.component';
import { LiLastComponent } from './components/footer/li-last/li-last.component';
import { CopyrightComponent } from './components/footer/copyright/copyright.component';
import { LogInComponent } from './components/modal/log-in/log-in.component';
import { RegComponent } from './components/modal/reg/reg.component';
import { ModalComponent } from './components/modal/modal.component';
import { ModalLinksComponent } from './components/UI/modal-links/modal-links.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    MainComponent,
    LogoComponent,
    NavBarListComponent,
    FollowLinksComponent,
    InputComponent,
    ContactInfoComponent,
    DropALineComponent,
    CheckboxComponent,
    BtnComponent,
    LiFirstComponent,
    LiLastComponent,
    CopyrightComponent,
    LogInComponent,
    RegComponent,
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
