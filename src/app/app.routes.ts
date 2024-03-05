import { Routes } from '@angular/router';
import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { AuthComponent } from './components/auth/auth.component';

export const routes: Routes = [
    {path : '', component: AcceuilComponent},
    {path : 'auth', component: AuthComponent}

];
