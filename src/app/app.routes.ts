import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Error404Component } from './error404/error404.component';
import { ApiComponent } from './api/api.component';
import { WizardSeulComponent } from './wizard-seul/wizard-seul.component';
import { ElixirsComponent } from './elixirs/elixirs.component';


export const routes: Routes = [
    
    { path : '', component: HomeComponent },

    { path : 'api', component: ApiComponent},
    { path : 'wizard/:id', component: WizardSeulComponent},
    { path : 'elixirs', component:ElixirsComponent},
    { path : '**', component:Error404Component }

];
