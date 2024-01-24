import { Routes } from '@angular/router';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientNewComponent } from './client-new/client-new.component';
import { ClientEditComponent } from './client-edit/client-edit.component';
import { ClientDetailsComponent } from './client-details/client-details.component';

export const routes: Routes = [
    {
        path: '',
        component: ClientListComponent,
    },
    {
        path: 'create-client',
        component: ClientNewComponent,
    },
    {
        path: 'edit-client',
        component: ClientEditComponent,
    },
    {
        path: 'client-details',
        component: ClientDetailsComponent,
    },
];
