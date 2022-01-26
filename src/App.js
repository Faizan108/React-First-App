import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
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
     <h1>Let's Get Started</h1>
     <ExpenseItem title={expense[0].title} amount={expense[0].amount} date={expense[0].date}></ExpenseItem>
     <ExpenseItem title={expense[1].title} amount={expense[1].amount} date={expense[1].date}></ExpenseItem>
     <ExpenseItem title={expense[2].title} amount={expense[2].amount} date={expense[2].date}></ExpenseItem>
     <ExpenseItem title={expense[3].title} amount={expense[3].amount} date={expense[3].date}></ExpenseItem>
   </div>
  );
}


export default App;
