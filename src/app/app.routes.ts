import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {AlbumsComponent} from "./components/albums/albums.component";
import {AuthComponent} from "./components/auth/auth.component";

const APP_ROUTES: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'auth', component: AuthComponent},
    {path: 'home', component: HomeComponent},
    {path: 'albums', component: AlbumsComponent},
    {path: '**', redirectTo: '/home', pathMatch: 'full'}
];

export const routes = RouterModule.forRoot(APP_ROUTES);