import useFetch from "../hooks/useFetch";

const Login = () => {
    const {data: users, isPending, error} = useFetch("/api/users")
    
    return ( 
        <div>
            {
                isPending ? "loading" :
                    users.map(({id,name}) =>
                        <li key={id}>
                        {name}
                        </li>
                    )
            }
            
        </div>
     );
}
 
export default Login;