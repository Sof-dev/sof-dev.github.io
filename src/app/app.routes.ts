import { Routes } from '@angular/router';
import {PageAccueilComponent} from "./component/page-accueil/page-accueil.component";
import {RealisationsComponent} from "./component/realisations/realisations.component";
import {ParcoursComponent} from "./component/parcours/parcours.component";
import {ContactComponent} from "./component/contact/contact.component";
import {CompetencesComponent} from "./component/competences/competences.component";

export const routes: Routes = [
  {path:'home', component:PageAccueilComponent},
   {path:'competences', component:CompetencesComponent},
   {path:'parcours', component:ParcoursComponent},
   {path:'realisations', component:RealisationsComponent},
   {path:'contact', component:ContactComponent},
   {path:'',redirectTo:'/home',pathMatch:'full'}

];
