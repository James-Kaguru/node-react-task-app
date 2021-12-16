import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async(url) => {
          try{
              const res = await fetch("http://localhost:5000/api/users") 
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
 
export default useFetch;