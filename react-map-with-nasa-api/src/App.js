import Map from './components/Map';
import Loader from './components/Loader';

import { useState, useEffect } from 'react';
import Header from './components/Header';


function App() {

  const [eventData, setEventData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {

      setLoading(true);
      const response = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events');
      const { events } = await response.json();
      setEventData(events);
      setLoading(false);
    }
    fetchEvents();

  }, []);

  return (
    <div className="App">
      <Header />
      {
        loading ?
          <Loader /> :
          <Map eventData={eventData} />
      }
    </div>
  );
}

export default App;
