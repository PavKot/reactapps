import './App.css';
import { Activities } from './components/activities/activities';
import { Faq } from './components/faq/faq';
import { Food } from './components/food/food';
import { Footer } from './components/footer/footer';
import { Home } from './components/home/home';
import { Nature } from './components/nature/nature';
import { Navbar } from './components/navbar/navbar';
import { Reviews } from './components/reviews/reviews';
import { Rooms } from './components/rooms/rooms';

function App() {
  return (
    <div>
        <Navbar/>
        <Home/>
        <Nature/>
        <Activities/>
        <Food/>
        <Rooms/>
        <Faq/>
        <Reviews/>
        <Footer/>
    </div>
  );
}

export default App;
