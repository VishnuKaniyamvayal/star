import AddTask from "./Components/AddTask";
import Header from "./Components/Header";
import ListHolder from "./Components/ListHolder";

function App() {
  return (
    <div className="App bg-primary h-screen no-scrollbar">
      <Header/>
      <AddTask/>
      <ListHolder/>
    </div>
  );
}

export default App;
