import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('src/app/modules/authentication/authentication.module').then(m => m.AuthenticationModule)
    },
    {
        path: 'home',
        loadChildren: () => import('src/app/modules/home/Home.module').then(m => m.HomeModule)
    },
    {   
        path: '**', 
        redirectTo:'auth'
    }];
@NgModule ({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule] 
})

export class AppRoutingModule{ }