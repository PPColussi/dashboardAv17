import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { filter } from 'rxjs';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
  ],
  templateUrl: './sidemenu.component.html',
  styles: ``,
})
export class SidemenuComponent {

  public menuItems = routes
  .map(route => route.children ?? [])
  .flat()
  .filter( route => route && route.path)
  .filter( route => !route.path?.includes(':') )


  // constructor() {
  //   const dashboardRoutes = routes
  //   .map(route => route.children ?? [])
  //   .flat()
  //   .filter( route => route && route.path)
  //   .filter( route => !route.path?.includes(':') )

  //   // console.log( dashboardRoutes )
  // }
}
