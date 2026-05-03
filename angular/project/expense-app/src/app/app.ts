import { Component } from '@angular/core';
import { ExpenseComponent } from './expense/expense.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ExpenseComponent],
  template: `<app-expense></app-expense>`
})
export class App {}