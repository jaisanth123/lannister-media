import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const useAxiosFetch = (dataURL) => {
  const [fetchError, setfetchError] = useState(null);
  const [isLoading, setisLoading] = useState(false);
  const [data, setdata] = useState([]);

  useEffect(() => {
    let isMounted = true; 
    const source = axios.CancelToken.source(); 

    const fetchData = async (URL) => {
      setisLoading(true);
      try {
        const response = await axios.get(URL, {
          cancelToken: source.token, 
        });
        if (isMounted) {
          setdata(response.data);
          setfetchError(null); 
        }
      } catch (error) {
        if (isMounted) {
          setdata([]);
          setfetchError(error.message); 
        }
      } finally {
        if (isMounted) {
          setisLoading(false); 
        }
      }
    };

    fetchData(dataURL);
    const cleanup = () => {
      isMounted = false; 
      source.cancel(); 
    };

    return cleanup; 
  }, [dataURL]); 

  return { data, fetchError, isLoading }; 
};

export default useAxiosFetch;




