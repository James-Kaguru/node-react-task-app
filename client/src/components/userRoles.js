import useGet from "../hooks/useGet"
import deleteRequest from "../scripts/shared/delete"

const UserRoles = () => {
    const {isPending, data:users} = useGet(`/users`)
    const handleDelete = async(e) => {
        e.preventDefault()
        try {
            await deleteRequest(`/users/${e.target.attributes.data_id.value}`)
            window.location.reload()
        } catch (err){
            debugger
            alert(err.message)
        }
    }
    return ( 
        <section>
            {
                isPending ? "loading" :
                users.map(({user_id,name}) =>
                    <div key={user_id}>
                        <div>
                            <span>{name} </span>
                            <span data_id={user_id} onClick={handleDelete}>Delete</span>
                        </div>
                    </div>
                    
                )
            
            }
        </section>
     );
}
 
export default UserRoles;