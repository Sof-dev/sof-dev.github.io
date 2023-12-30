import { Component } from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {FooterComponent} from "../footer/footer.component";
import {HeadComponent} from "../head/head.component";

@Component({
  selector: 'app-competences',
  standalone: true,
    imports: [
        HeaderComponent,
        FooterComponent,
        HeadComponent
    ],
  templateUrl: './competences.component.html',
  styleUrl: './competences.component.scss'
})
export class CompetencesComponent {

}
