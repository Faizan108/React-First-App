import React from "react";
import './NewExpense.css';
import NewExpenseForm from './NewExpenseForm.js'
const NewExpense = () => {
    return(
        <div class="new-expense">
            <NewExpenseForm></NewExpenseForm>
            
        </div>
    );
}

export default NewExpense;