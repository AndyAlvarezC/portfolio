import { BrowserRouter as Router } from 'react-router-dom';
import Header from "./components/Header"
import Home from './components/Home';

function App() {

  return (
    <Router>
      <div>
        <Header />
        <Home />
      </div>
    </Router>
  )
}

export default App
