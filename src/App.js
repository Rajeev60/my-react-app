import Nav from "./components/nav/nav";
import Grid from "./components/main-container/items-container/grid-status"; 
import Timeline from "./components/main-container/items-container/timeline";
import Table from "./components/main-container/items-container/table";
function App() {
  return (
    <div className="App">
        <Nav/>
        <div className="container">
            <Grid/>
            <div className="items-container">
                <Timeline/>
                <Table/>
            </div>
        </div>
    </div>
  );
}

export default App;
