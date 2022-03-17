import { TooltipComponent } from '@angular/material/tooltip';
import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

import { FullComponent } from './layouts/full/full.component';
import { LoginComponent } from './login/login.component';
import { ButtonsComponent } from './material-component/buttons/buttons.component';
import { ChipsComponent } from './material-component/chips/chips.component';
import { DialogComponent } from './material-component/dialog/dialog.component';
import { ExpansionComponent } from './material-component/expansion/expansion.component';
import { GridComponent } from './material-component/grid/grid.component';
import { ListsComponent } from './material-component/lists/lists.component';
import { MenuComponent } from './material-component/menu/menu.component';
import { ProgressSnipperComponent } from './material-component/progress-snipper/progress-snipper.component';
import { ProgressComponent } from './material-component/progress/progress.component';
import { SlideToggleComponent } from './material-component/slide-toggle/slide-toggle.component';
import { SliderComponent } from './material-component/slider/slider.component';
import { SnackbarComponent } from './material-component/snackbar/snackbar.component';
import { StepperComponent } from './material-component/stepper/stepper.component';
import { TabsComponent } from './material-component/tabs/tabs.component';
import { ToolbarComponent } from './material-component/toolbar/toolbar.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'button',
        component: ButtonsComponent
      },
      {
        path: 'grid',
        component: GridComponent
      },
      {
        path: 'lists',
        component: ListsComponent
      },
      {
        path: 'menu',
        component: MenuComponent
      },
      {
        path: 'tabs',
        component: TabsComponent
      },
      {
        path: 'stepper',
        component: StepperComponent
      },
      {
        path: 'expansion',
        component: ExpansionComponent
      },
      {
        path: 'chips',
        component: ChipsComponent
      },
      {
        path: 'toolbar',
        component: ToolbarComponent
      },
      {
        path: 'progress-snipper',
        component: ProgressSnipperComponent
      },
      {
        path: 'progress',
        component: ProgressComponent
      },
      {
        path: 'dialog',
        component: DialogComponent
      },
      {
        path: 'snackbar',
        component: SnackbarComponent
      },
      {
        path: 'slider',
        component: SliderComponent
      },
      {
        path: 'slide-toggle',
        component: SlideToggleComponent
      }

    ]
  }
];
