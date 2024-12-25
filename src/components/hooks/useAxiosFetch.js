import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const useAxiosFetch = (dataURL) => {
  const [fetchError, setfetchError] = useState(null);
  const [isLoading, setisLoading] = useState(false);
  const [data, setdata] = useState([]);

  useEffect(() => {
    let isMounted = true; //! Flag to check if the component is still mounted
    const source = axios.CancelToken.source(); //! Create a cancel token

    const fetchData = async (URL) => {
      setisLoading(true); //! Indicate that loading has started
      try {
        const response = await axios.get(URL, {
          cancelToken: source.token, //! Pass the cancel token to the request
          //! if any irrevelent action done the get will be cancelled like unmounting the component while fetching et..
        });
        if (isMounted) {
          setdata(response.data); //! Update data if the component is still mounted
          setfetchError(null); //! Clear any previous errors
        }
      } catch (error) {
        if (isMounted) {
          setdata([]); //! Reset data if there's an error
          setfetchError(error.message); //! Set the error message
        }
      } finally {
        if (isMounted) {
          setisLoading(false); //! Indicate that loading has ended
        }
      }
    };

    fetchData(dataURL); //! Fetch data

    //! Cleanup function to run when the effect is re-executed or the component unmounts
    const cleanup = () => {
      isMounted = false; //! Prevent state updates
      source.cancel(); //! Cancel any ongoing Axios request
    };

    return cleanup; //! Return the cleanup function
  }, [dataURL]); //! Effect re-runs when `dataURL` changes

  return { data, fetchError, isLoading }; //! Return the data, error, and loading state
};

export default useAxiosFetch;




