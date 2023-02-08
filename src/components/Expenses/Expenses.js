import React, { useState } from 'react';

import Card from '../UI/Card';
import '../Expenses/Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpenseChart from './ExpensesChart';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filerChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filterdExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <li>
        <Card className="expenses">
          <ExpensesFilter
            selected={filteredYear}
            onChangeFilter={filerChangeHandler}
          />
          <ExpenseChart expenses={filterdExpenses} />
          <ExpensesList items={filterdExpenses} />
        </Card>
      </li>
    </div>
  );
};

export default Expenses;
