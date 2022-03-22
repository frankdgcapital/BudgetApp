import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages-admin/dashboard/dashboard.component';
import { IconsComponent } from '../../pages-admin/icons/icons.component';
import { UserProfileComponent } from '../../pages-admin/user-profile/user-profile.component';
import { TablesComponent } from '../../pages-admin/tables/tables.component';
import { BudgetTemplateComponent } from 'src/app/pages-admin/budget-template/budget-template.component';
import { FamilyMembersComponent } from 'src/app/pages-admin/family-members/family-members.component';
import { BudgetCategoriesComponent } from 'src/app/pages-admin/budget-categories/budget-categories.component';
import { BudgetHomeComponent } from 'src/app/pages-admin/budget-home/budget-home.component';
import { AuthGuardService } from 'src/app/guards/auth-guard.service';
import { AnonymousGuardService } from 'src/app/guards/anonymous-guard.service';

export const AdminLayoutRoutes: Routes = [
    {
        path: 'dashboard',
        canActivate: [AnonymousGuardService],
        component: DashboardComponent,
    },
    {
        path: 'user-profile',
        canActivate: [AuthGuardService],
        component: UserProfileComponent,
    },
    {
        path: 'tables',
        canActivate: [AuthGuardService],
        component: TablesComponent,
    },
    {
        path: 'icons',
        canActivate: [AuthGuardService],
        component: IconsComponent,
    },
    {
        path: 'budget-template',
        canActivate: [AuthGuardService],
        component: BudgetTemplateComponent,
    },
    {
        path: 'family-members',
        canActivate: [AuthGuardService],
        component: FamilyMembersComponent,
    },
    {
        path: 'budget-categories',
        canActivate: [AuthGuardService],
        component: BudgetCategoriesComponent,
    },
    {
        path: 'budget-home',
        canActivate: [AuthGuardService],
        component: BudgetHomeComponent,
    }
];
