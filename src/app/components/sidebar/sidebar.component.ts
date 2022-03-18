import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard', icon: 'ni-tv-2 text-green', class: '' },
  { path: '/budget-home', title: 'Budget Home', icon: 'ni-planet text-blue', class: '' },
  { path: '/family-members', title: 'Family Members', icon: 'ni-circle-08 text-red', class: '' },
  { path: '/budget-template', title: 'Budget Template', icon: 'ni-atom text-blue', class: '' },
  { path: '/budget-categories', title: 'Budget Categories', icon: 'ni-books text-yellow', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router, public fbService: FirebaseService) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
    });
  }
}
