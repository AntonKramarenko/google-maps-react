import { Map } from './components/Map'
import { useJsApiLoader } from '@react-google-maps/api';
import './App.css';
const API_KEY = process.env.REACT_APP_API_KEY
console.log(API_KEY);


const defaultCenter = {
  lat: 51.509865,
  lng: -0.118092
};

const libraries = ['places']

const App = () => {

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: API_KEY,
    libraries
  })
  return (
    <div className="App">
      {isLoaded ? <Map center={defaultCenter} /> : <h2>Loading</h2>}
    </div>
  );
}

export default App;
