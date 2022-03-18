import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClipboardModule } from 'ngx-clipboard';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages-admin/dashboard/dashboard.component';
import { IconsComponent } from '../../pages-admin/icons/icons.component';
import { UserProfileComponent } from '../../pages-admin/user-profile/user-profile.component';
import { TablesComponent } from '../../pages-admin/tables/tables.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BudgetTemplateComponent } from 'src/app/pages-admin/budget-template/budget-template.component';
import { FamilyMembersComponent } from 'src/app/pages-admin/family-members/family-members.component';
import { BudgetCategoriesComponent } from 'src/app/pages-admin/budget-categories/budget-categories.component';
import { BudgetHomeComponent } from 'src/app/pages-admin/budget-home/budget-home.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TablesComponent,
    IconsComponent,
    BudgetTemplateComponent,
    FamilyMembersComponent,
    BudgetCategoriesComponent,
    BudgetHomeComponent
  ]
})

export class AdminLayoutModule { }
