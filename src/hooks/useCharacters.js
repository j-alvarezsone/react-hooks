import { useState, useEffect } from 'react';
import axios from 'axios';
const useCharacters = (url) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios(url);
      const { data } = await res;
      setCharacters(data.results);
    };
    fetchData();
  }, [url]);
  return characters;
};

export default useCharacters;
