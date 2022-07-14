import { useJsApiLoader } from '@react-google-maps/api';
import { Map } from './components/Map'
import { Autocomplete } from './components/Autocomplete';
import s from './App.module.css';
import { useCallback, useState } from 'react';

const API_KEY = process.env.REACT_APP_API_KEY

const defaultCenter = {
  lat: 51.509865,
  lng: -0.118092
};

const libraries = ['places']

const App = () => {
  const [center, setCenter] = useState(defaultCenter)

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: API_KEY,
    libraries
  })

  const onPlaceSelect = useCallback(
    (coordinates) => {
      setCenter(coordinates)
    }, [])
  return (
    <div >
      <div className={s.addressSearchContainer}>
        <Autocomplete isLoaded={isLoaded} onSelect={onPlaceSelect} />
        <button className={s.modeToggle}>SetMarcers</button>
      </div>
      {isLoaded ? <Map center={center} /> : <h2>Loading</h2>}
    </div>
  );
}

export default App;
