import { Component } from '@angular/core';
import {HeadComponent} from "../head/head.component";
import {HeaderComponent} from "../header/header.component";


import {FooterComponent} from "../footer/footer.component";
import {AproposComponent} from "../apropos/apropos.component";

@Component({
  selector: 'app-page-accueil',
  standalone: true,
  imports: [
    HeadComponent,
    HeaderComponent,
    FooterComponent,
    AproposComponent,
  ],
  templateUrl: './page-accueil.component.html',
  styleUrl: './page-accueil.component.scss'
})
export class PageAccueilComponent {
}
