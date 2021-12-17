const put = async (url,data) => {  
    try {
        const res = await fetch(url,{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              method: "PUT",
              body: data
        }) 
        return( await res.json() )
    }
    catch (err){
        throw Error(err.message)
    }    
}
 
export default put;