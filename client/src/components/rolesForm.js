import post from "../scripts/shared/post"
const RolesForm = () => {
    const handleSubmit = async(e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const object = {}
        formData.forEach((value, key) => object[key] = value)
        try {
            await post("/roles",JSON.stringify(object))
            window.location.reload()
        } catch (err){
            alert(err.message)
        }
    }
    return ( 
        <section>
            <div>
                
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Role:</label><br/>
                    <input type="text" id="name" name="name" required/><br/>
                    
                    <button type="submit">Submit</button>
                </form>
            </div>
        </section>
     );
}
 
export default RolesForm;