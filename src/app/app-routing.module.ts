import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { ContactsComponent } from './components/pages/contacts/contacts.component'
import { BlogComponent } from './components/pages/blog/blog.component'
import { GraphsComponent } from './components/pages/graphs/graphs.component'
import { SignModalComponent } from './components/sign-modal/sign-modal.component'
import { DefaultUrlSerializer, UrlSerializer, UrlTree } from '@angular/router'
import { SinglePostComponent } from './components/pages/blog/single-post/single-post.component'

const SignRoute: Routes = [
    {
        path: 'sign_in',
        component: SignModalComponent,
        outlet: 'modal',
    },
    {
        path: 'sign_up',
        component: SignModalComponent,
        outlet: 'modal',
    },
]

const appRoutes: Routes = [
    { path: 'contacts', component: ContactsComponent, children: SignRoute },

    {
        path: 'blog',
        children: [
            {
                path: '',
                component: BlogComponent,
                children: SignRoute,
            },
            {
                path: 'single-post',
                component: SinglePostComponent,
                children: SignRoute,
            },
        ],
    },

    { path: 'charts', component: GraphsComponent, children: SignRoute },
    { path: '**', redirectTo: 'contacts'}
]

class CustomUrlSerializer extends DefaultUrlSerializer {
    private _newURL(url: string): string {
        return url.replace(/\(modal:|\)/gm, '')
    }
    override serialize(tree: UrlTree): string {
        return this._newURL(super.serialize(tree))
    }
}

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, { scrollPositionRestoration: 'top' }),
    ],
    exports: [RouterModule],
    providers: [{ provide: UrlSerializer, useClass: CustomUrlSerializer }],
})
export class AppRoutingModule {}
