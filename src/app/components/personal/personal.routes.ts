import {Routes} from "@angular/router";
import {CollectionComponent} from "./collection/collection.component";
import {ProfileComponent} from "./profile/profile.component";

export const PERSONAL_ROUTES: Routes = [
    {path: 'collection', component: CollectionComponent},
    {path: 'profile', component: ProfileComponent}
];