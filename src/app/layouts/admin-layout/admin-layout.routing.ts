import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages-admin/dashboard/dashboard.component';
import { IconsComponent } from '../../pages-admin/icons/icons.component';
import { UserProfileComponent } from '../../pages-admin/user-profile/user-profile.component';
import { TablesComponent } from '../../pages-admin/tables/tables.component';
import { BudgetTemplateComponent } from 'src/app/pages-admin/budget-template/budget-template.component';
import { FamilyMembersComponent } from 'src/app/pages-admin/family-members/family-members.component';
import { BudgetCategoriesComponent } from 'src/app/pages-admin/budget-categories/budget-categories.component';
import { BudgetHomeComponent } from 'src/app/pages-admin/budget-home/budget-home.component';

export const AdminLayoutRoutes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent,
    },
    {
        path: 'user-profile',
        component: UserProfileComponent,
    },
    {
        path: 'tables',
        component: TablesComponent,
    },
    {
        path: 'icons',
        component: IconsComponent,
    },
    {
        path: 'budget-template',
        component: BudgetTemplateComponent,
    },
    {
        path: 'family-members',
        component: FamilyMembersComponent,
    },
    {
        path: 'budget-categories',
        component: BudgetCategoriesComponent,
    },
    {
        path: 'budget-home',
        component: BudgetHomeComponent,
    }
];
