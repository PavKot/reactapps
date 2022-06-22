import './App.css';
import { Home } from './components/home/home';
import { KeepYou } from './components/keepyou/keepyou';
import { Navbar } from './components/navbar/navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <KeepYou/>
    </div>
  );
}

export default App;
