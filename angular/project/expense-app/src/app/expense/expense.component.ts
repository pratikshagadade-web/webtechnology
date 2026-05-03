import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-expense',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent {

  title: string = '';
  amount: number | null = null;
  category: string = '';
  date: string = '';

  expenses: any[] = [];
  total: number = 0;

  addExpense() {
    if (!this.title || !this.amount || !this.category || !this.date) {
      alert('Fill all fields');
      return;
    }

    this.expenses.push({
      title: this.title,
      amount: this.amount,
      category: this.category,
      date: this.date
    });

    this.calculateTotal();

    this.title = '';
    this.amount = null;
    this.category = '';
    this.date = '';
  }

  deleteExpense(index: number) {
    this.expenses.splice(index, 1);
    this.calculateTotal();
  }

  calculateTotal() {
    this.total = 0;
    this.expenses.forEach(e => {
      this.total += e.amount;
    });
  }
}