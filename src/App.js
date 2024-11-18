import "./App.css";
import { Route, Routes } from 'react-router-dom';
import Aquarius from "./pages/Aquarius";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/aquarius" element={<Aquarius sign="aquarius"/>} />
      </Routes>
    </div>
  );
}

export default App;
