import AddExpense from "./Components/AddExpense";
import Balance from "./Components/Balance";
import History from "./Components/History";
import Nav from "./Components/Nav";

function App() {
  return (
    <div className="bg-slate-100">
      <div className="min-h-screen max-w-[1500px] mx-auto px-[180px] pb-10">
        <Nav />
        <Balance />
        <div className="flex justify-center gap-10 mt-10">
          <AddExpense />
          <div className=" bg-slate-300 w-[1px]"></div>
          <History />
        </div>
      </div>
    </div>
  );
}

export default App;
