import Menu from "./Menu/Menu";
import "./App.css";
import { MENU } from "./constants";

function App() {
  return (
    <div className="App">
      <Menu menu={MENU} />
    </div>
  );
}

export default App;
