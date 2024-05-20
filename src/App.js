import './App.css';
import Certificate from './Certificate';
import Course from './Course';
import Home from './Home';
import Internship from './Internship';
import OfferPage from './OfferPage';

function App() {
  return (
   <div className='container'>
     <Home />
     <Course />
     <OfferPage />
     <Certificate />
     <Internship />
   </div>
  );
}

export default App;
