import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';
import Expenses from './components/Expenses';
import NewExpense from './components/NewExpenses/NewExpense';
const App = () => {
 const expense=[
    {
      id:"e1",
      title:'Car Insurance',
      amount:234,
      date:new Date(2022, 1, 25),
    },
    {
      id:'e2',
      title:'New TV',
      amount:329,
      date:new Date(2022, 1, 24),
    },
    {
      id:'e3',
      title:'Toilet Paper',
      amount:546,
      date:new Date(2022, 1, 22),
    },
    {
      id:"e4",
      title:'New Desk',
      amount:588,
      date:new Date(2022, 1, 21),
    }
  ]
  return (
    <div className="App-header">
     <NewExpense></NewExpense>
     <Expenses items={expense}></Expenses>
   </div>
  );
}


export default App;
