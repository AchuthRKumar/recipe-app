import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from "./Homepage";
import RecipePage from './RecipePage';

function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/recipes" element={<RecipePage />} />
      </Routes>
    </Router>
  );
}

export default App;