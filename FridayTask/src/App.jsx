import Home from "./components/Home";
import Login from "./components/Login";

import { Fragment, useState } from "react";

export default function App()
{
  const [isloggedin , setisloggedin] = useState(false);
  const [id , setId] = useState('');
  const [name , setName] = useState('');

  return(
    <Fragment>
      {isloggedin && <Home vid = {id} name = {name}/>}
      {!isloggedin && <Login auth = {setisloggedin} vid = {setId} name = {setName}/>}
    </Fragment>
  );
}