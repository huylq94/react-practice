import Expenses from "./components/Expenses/Expenses";
import ExpensesForm from "./components/Expenses/ExpensesForm";

function App() {
  const expenses = [
    { title: 'Car Insurance', amount: 100, date: new Date(2023, 5, 12) },
    { title: 'Luxury Car', amount: 103, date: new Date(2023, 4, 12) },
    { title: 'Car Insurance1', amount: 101, date: new Date(2023, 1, 12) },
    { title: 'Car Insurance2', amount: 102, date: new Date(2023, 2, 12) }
  ];

  return (
    <div>
      <ExpensesForm/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
