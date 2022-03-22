import { Component, OnInit } from '@angular/core';
import { BudgetCategory } from 'src/app/models/budget-category';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-budget-categories',
  templateUrl: './budget-categories.component.html',
  styleUrls: ['./budget-categories.component.scss']
})
export class BudgetCategoriesComponent implements OnInit {

  budgetCategoryList: BudgetCategory[] = [
    { id: '12345', name: 'Food', description: 'Food shopping at Spar, PnP, etc' },
    { id: '12345', name: 'Clothing', description: 'Clothing shopping' },
    { id: '12345', name: 'Rent', description: 'Monthly rent' },
  ];
  selectedItem: BudgetCategory;

  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
    this.getBudgetCategoryList();
  }

  getBudgetCategoryList() {

  }

  onBudgetCategoryEdit(selectedItem: any) {

  }

  onBudgetCategoryDelete(selectedItem: any) {

  }

}
