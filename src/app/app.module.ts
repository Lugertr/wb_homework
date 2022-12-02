import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppMaterial } from './app-material.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { ColorfulDirective } from './directives/colorful.directive'
import { СustomInterceptor } from './services/custom.interceptor'

import { AppComponent } from './app.component'
import { NavBarComponent } from './components/nav-bar/nav-bar.component'
import { ContactsComponent } from './components/pages/contacts/contacts.component'
import { FooterComponent } from './components/footer/footer.component'
import { FollowLinksComponent } from './components/UI/follow-links/follow-links.component'
import { InputDefinerComponent } from './components/UI/input-definer/input-definer.component'
import { CheckboxComponent } from './components/UI/checkbox/checkbox.component'
import { BlogComponent } from './components/pages/blog/blog.component'
import { SignModalComponent } from './components/sign-modal/sign-modal.component'
import { DialogSignIn } from './components/sign-modal/sign-in.component.ts/sign-in.component'
import { DialogSignUp } from './components/sign-modal/sign-up.component/sign-up.component'
import { BlogCardComponent } from './components/UI/blog-card/blog-card.component'
import { GraphsComponent } from './components/pages/graphs/graphs.component'
import { GraphComponent } from './components/pages/graphs/graph/graph.component'
import { SinglePostComponent } from './components/pages/blog/single-post/single-post.component'
import { SubscribeComponent } from './components/UI/subscribe/subscribe.component'
import { SortPanelComponent } from './components/pages/blog/sort-panel.component/sort-panel.component'


@NgModule({
    declarations: [
        AppComponent,
        NavBarComponent,
        FooterComponent,
        ContactsComponent,
        FollowLinksComponent,
        InputDefinerComponent,
        CheckboxComponent,
        BlogComponent,
        SignModalComponent,
        DialogSignIn,
        DialogSignUp,
        BlogCardComponent,
        GraphsComponent,
        GraphComponent,
        SinglePostComponent,
        SortPanelComponent,
        SubscribeComponent,

        ColorfulDirective,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        AppMaterial,
        HttpClientModule,
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: СustomInterceptor,
            multi: true,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
