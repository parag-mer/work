import { Fragment, useEffect , useState } from "react";

export default function Login(props)
{
    const [users , setUsers] = useState();
    const [email , setEmail] = useState('');
    const [pwd , setPwd] = useState('');

    const emailHandler = (event) => {
        setEmail(event.target.value);
    }
    const pwdHandler = (event) => {
        setPwd(event.target.value);
    }
     
    const getUsers = async() => {
        const response = await fetch('https://dummyjson.com/users/');
        const data = await response.json();
        const userDetails = data.users.map(ud => {
            return{
                id : ud.id,
                email : ud.email,
                password : ud.password,
                name : ud.firstName
            }
        });
        console.log(userDetails);
        setUsers(userDetails);
    }
    useEffect(()=>{
        getUsers();
    }, []);
    
    function verify()
    {
        console.log(email , pwd);
        for (let i = 0; i < users.length; i++) {
           if(email === users[i].email && pwd === users[i].password)
           {
                props.auth(true);
                props.vid(users[i].id);
                props.name(users[i].name);
                break;
           }
           else
           {
            console.log("not found");
           }
        }
    }




    return(
        <Fragment>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" placeholder="Enter Enail" onChange={emailHandler} value={email} />

            <label htmlFor="pwd">Password</label>
            <input type="text" name="pwd" id="pwd" placeholder="Enter Password" onChange={pwdHandler} value={pwd}/>

            <button onClick={verify}>submit</button>
        </Fragment>
    );
}