import { Component } from '@angular/core';
import {FooterComponent} from "../footer/footer.component";
import {HeadComponent} from "../head/head.component";
import {HeaderComponent} from "../header/header.component";

@Component({
  selector: 'app-apropos',
  standalone: true,
    imports: [
        FooterComponent,
        HeadComponent,
        HeaderComponent
    ],
  templateUrl: './apropos.component.html',
  styleUrl: './apropos.component.scss'
})
export class AproposComponent {

}
