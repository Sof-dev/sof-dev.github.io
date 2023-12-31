import { Component } from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {HeadComponent} from "../head/head.component";
import {FooterComponent} from "../footer/footer.component";

@Component({
  selector: 'app-parcours',
  standalone: true,
  imports: [
    HeaderComponent,
    HeadComponent,
    FooterComponent
  ],
  templateUrl: './parcours.component.html',
  styleUrl: './parcours.component.scss'
})
export class ParcoursComponent {

}
