/* eslint-disable no-unused-vars */
/* eslint-disable */
import getBudgetObject from './7-getBudgetObject.js';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    ...budget,
    getIncomeInDollars() {
      return `$${this.income}`; // Access income directly using this.income
    },
    getIncomeInEuros() {
      return `${this.income} euros`; // Access income directly using this.income
    },
  };

  return fullBudget;
}
