import { Component } from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {FooterComponent} from "../footer/footer.component";
import {HeadComponent} from "../head/head.component";

@Component({
  selector: 'app-realisations',
  standalone: true,
    imports: [
        HeaderComponent,
        FooterComponent,
        HeadComponent
    ],
  templateUrl: './realisations.component.html',
  styleUrl: './realisations.component.scss'
})
export class RealisationsComponent {

}
