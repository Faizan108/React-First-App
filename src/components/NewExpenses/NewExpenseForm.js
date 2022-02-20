import React from "react";
import './NewExpenseForm.css';

const NewExpenseForm = () =>{
    return(
        <form>
        <div class="new-expense__controls">
            <div class="new-expense__control">
                <label>Title</label>
                <input type="text"></input>
            </div>
            <div class="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01"></input>
            </div>
            <div class="new-expense__control">
                <label>Date</label>
                <input type="date" min="2019-01-01" max="2024-12-30"></input>
            </div>
            
        </div>
        <div class="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
        );
}

export default NewExpenseForm;