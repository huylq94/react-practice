import './ExpensesForm.css';
import {useState} from "react";

export default function ExpensesForm() {
    const [inputTitle, setInputTitle] = useState('');
    const [inputAmount, setInputAmount] = useState('');
    const [inputDate, setInputDate] = useState('');

    const titleChangeHandler = event => {
        setInputTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setInputAmount(event.target.value);
    };


    const dateChangeHandler = (event) => {
        setInputDate(event.target.value);
    };

    function submitHandler(event) {
        event.preventDefault();
        const expenseDate = {
            title: inputTitle,
            amount: inputAmount,
            date: new Date(inputDate)
        }
        console.log(expenseDate);
        setInputTitle('');
        setInputAmount('');
        setInputDate('');
    }

    return(
        <div className='new-expense'>
            <form onSubmit={submitHandler}>
                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                        <label>Title</label>
                        <input type='text' onChange={titleChangeHandler} value={inputTitle}/>
                    </div>
                    <div className='new-expense__control'>
                        <label>Amount</label>
                        <input type='number' min='0.01' max='99.99' onChange={amountChangeHandler} value={inputAmount}/>
                    </div>
                    <div className='new-expense__control'>
                        <label>Date</label>
                        <input type='date' min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler} value={inputDate}/>
                    </div>
                </div>
                <div className='new-expense__actions'>
                    <button type='submit'>Add Expense</button>
                </div>
            </form>
        </div>
    );
}