import './ExpenseItem.css';
import React ,{useState} from 'react';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = (props) =>{   
        const [title,setTitle] = useState(props.title);
        const clickhandler =() =>{
            setTitle('Updated!')
            console.log('Clicked');
        }
    return (
        <div className="expense-item">
           <ExpenseDate date={props.date}></ExpenseDate>
        <div className="expense-item__description">
            <h2>{title}</h2>
            <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={clickhandler}>Click on me</button>
        </div>
    );
}
export default ExpenseItem;