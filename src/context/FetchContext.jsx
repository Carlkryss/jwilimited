import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create the context
const SanityDataContext = createContext();

// Create a context provider component
export function SanityDataProvider({ children }) {
  const [data, setData] = useState({});
  let PROJECT_ID = "ltj2mz49";
    let DATASET = "jwilimited";let QUERY = encodeURIComponent('*[_type != null]');
    let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;


  useEffect(() => {
    // Fetch data from Sanity and update the state
    axios.get(URL)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <SanityDataContext.Provider value={data}>
      {children}
    </SanityDataContext.Provider>
  );
}

// Create a custom hook to access the context
export function useSanityData() {
  return useContext(SanityDataContext);
}
