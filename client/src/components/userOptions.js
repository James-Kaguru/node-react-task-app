import useGet from "../hooks/useGet"

const UserOptions = () => {
    const {isPending, data:users, error } = useGet(`/users`)

    return ( 
        <select id="to" name="to" >
            <p>{error ?error:""}</p>
            {
                isPending ? "loading" :
                users.map(({user_id,name}) =>
                    <option key={user_id} value={user_id}> 
                        {user_id} | {name} 
                    </option>
                    
                )
            
            }
            
        </select>
     );
}
 
export default UserOptions;