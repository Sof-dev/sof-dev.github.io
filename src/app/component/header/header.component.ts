import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLinkActive, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  items:any []=[
    {name: 'home', link: '/home'},
    {name: 'competences', link: '/competences'},
    {name: 'parcours', link: '/parcours'},
    {name: 'realisations', link: '/realisations'},
    {name: 'contact', link: '/contact'},
  ]

  //Add class active element
  selectedItem = 0;


  setActiveClass(item:any) {
    this.items.forEach((item)=>{
      item.active=false;
    });
    item.active=true;
  }


}
