import Card from "../UI/Card";
import './Expenses.css'
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
    const[filterYear, setFilterYear] = useState('2021');
    function filterChangeHandler(selectedYear) {
        setFilterYear(selectedYear);
    }

    const filterYearExpenses = props.items.filter(expense => expense.date.getFullYear().toString() === filterYear);

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filterYear} onChangeFilter={filterChangeHandler}/>
            <ExpensesChart expenses={filterYearExpenses}/>
            <ExpensesList items={filterYearExpenses}/>
        </Card>
    );
}

export default Expenses;