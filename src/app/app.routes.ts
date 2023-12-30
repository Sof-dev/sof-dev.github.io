import { Routes } from '@angular/router';
import {RealisationsComponent} from "./component/realisations/realisations.component";
import {ParcoursComponent} from "./component/parcours/parcours.component";
import {ContactComponent} from "./component/contact/contact.component";
import {CompetencesComponent} from "./component/competences/competences.component";
import {AproposComponent} from "./component/apropos/apropos.component";

export const routes: Routes = [
  {path:'home', component:AproposComponent},
   {path:'competences', component:CompetencesComponent},
   {path:'parcours', component:ParcoursComponent},
   {path:'realisations', component:RealisationsComponent},
   {path:'contact', component:ContactComponent},
   {path:'',redirectTo:'/home',pathMatch:'full'}

];
