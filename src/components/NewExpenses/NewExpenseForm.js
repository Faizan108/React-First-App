import React,{useState} from "react";
import './NewExpenseForm.css';

const NewExpenseForm = () =>{
    // const [enteredtitle, setTitle]=useState('');
    // const [enteredAmount, setAmount]=useState('');
    // const [enteredDate, setDate]=useState('');
    const [userInput, setuserInput] = useState({
        enteredTitle:'',
        enteredAmount:'',
        enteredDate:'',
    });
    const titleclickhandler = (event) =>{
        setuserInput((prevState) =>{
            return {
                ...prevState, enteredTitle: event.target.value
            };
        });
        
    }
    const amountclickhandler = (event) =>{
       setUserInput((prevState) => {
        return {
                ...prevState, enteredAmount: event.target.value
        };
       });
        
    }
    const dateclickhandler = (event) =>{
       setUserInput((prevState) => {
        return {...prevState, enteredDate: event.target.value};
       });
       
        
    }
    return(
        <form>
        <div class="new-expense__controls">
            <div class="new-expense__control">
                <label>Title</label>
                <input type="text" onChange={titleclickhandler}></input>
            </div>
            <div class="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" onChange={amountclickhandler}></input>
            </div>
            <div class="new-expense__control">
                <label>Date</label>
                <input type="date" min="2019-01-01" max="2024-12-30" onchange={dateclickhandler}></input>
            </div>

        </div>
        <div class="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
        );
}

export default NewExpenseForm;