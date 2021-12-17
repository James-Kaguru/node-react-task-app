import { useState, useEffect } from 'react';

const useGet = (url) => {
  const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async(url) => {
          try {
              const res = await fetch(url) 
              setData(await res.json()) 
              setIsPending(false)
          }
          catch (err){
              setIsPending(false)
              setError(err.message)
          }
        }
        
        fetchData(url)
  
      },[url])

  return { data, isPending, error };
}
 
export default useGet;
