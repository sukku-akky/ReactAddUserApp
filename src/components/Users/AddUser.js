import React,{useState} from "react"
import Card from "../UI/Card";
import classes from "./AddUser.module.css"
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser=(props)=>{
    const [latestName,setLatestName]=useState("");
    const [latestAge,setLatestAge]=useState("");
    const [error,setError]=useState();

    const nameChangeHandler=(event)=>{
        setLatestName(event.target.value);

    }
    const ageChangeHandler=(event)=>{
        setLatestAge(event.target.value);

    }

  const addUserHandler=(event)=>{
    event.preventDefault();
    if(latestName.trim().length===0){
        setError({title: "invalid input",message:"please entera valid username and age/i"})
        return
    } 
    if(latestAge<=0){
        setError({title:"invalid input",message:"please entera valid age/i"})
        return
    }
    props.onAddUser(latestName,latestAge);
    
    setLatestName("");
    setLatestAge("");
  }


  const errorHandler=()=>{
    setError(null);
  }

  return (
    <div>
    {error && <ErrorModal title={error.title} message={error.message}  onConfirm={errorHandler}/>}
    <Card>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username" className={classes.label}>Username</label>
        <input id="username" type="text" className={classes.input} onChange={nameChangeHandler}/>
        <label htmlFor="age" className={classes.label}>Age</label>
        <input id="age" type="number" className={classes.input} onChange={ageChangeHandler}/>
        <Button type="submit">Add User</Button>
        
      </form>
    </Card>
    </div>
  )
}

export default AddUser;