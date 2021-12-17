const deleteRequest = async (url) => {  
    try {
        const res = await fetch(url,{
            method: "DELETE",
        }).catch(e =>{console.log(e)})
        return( await res.json() )
    }
    catch (err){
        console.log("object")
        throw Error(err.message)
    }    
}
 
export default deleteRequest;