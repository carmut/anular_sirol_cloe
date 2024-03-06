import { Routes } from '@angular/router';
import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { AuthComponent } from './components/auth/auth.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminAjoutComponent } from './components/admin-ajout/admin-ajout.component';
import { DetailsComponent } from './components/details/details.component';
import { AdminEditComponent } from './components/admin-edit/admin-edit.component';
import { adminGuard } from './guards/admin.guard';

export const routes: Routes = [
    {path : '', component: AcceuilComponent},
    {path : 'auth', component: AuthComponent},
    {path : 'detail/:id', component: DetailsComponent},

    {path : 'admin', component: AdminComponent, canActivate: [adminGuard]},
    {path : 'admin/ajout', component: AdminAjoutComponent, canActivate: [adminGuard]},
    {path : 'admin/edit/:id', component: AdminEditComponent, canActivate: [adminGuard]}
];
