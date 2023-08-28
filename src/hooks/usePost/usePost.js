import React, {useState} from 'react';
import axios from 'axios';

function usePost() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const post = async (url, apiData) => {
    try {
      const response = await axios.post(url, apiData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response.data);
      setData(response.data);
      setLoading(false);
    } catch (error) {
      if (error.response) {
        console.error('Response Data:', error.response.data);
        console.error('Response Status:', error.response.status);
        console.error('Response Headers:', error.response.headers);
      } else if (error.request) {
        console.error('Request:', error.request);
      } else {
        console.error('Error:', error.message);
      }
      setLoading(false);
    }
    // setLoading(true);
    // const response = await axios.post(url, apiData);
    // setData(response.data);
    // setLoading(false);
  };
  return {data, loading, post};
}

export default usePost;
