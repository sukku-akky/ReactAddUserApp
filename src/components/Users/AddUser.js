import React,{useState} from "react"
import Card from "../UI/Card";
import classes from "./AddUser.module.css"
import Button from "../UI/Button";


const AddUser=()=>{
    const [latestName,setLatestName]=useState("");
    const [latestAge,setLatestAge]=useState("");

    const nameChangeHandler=(event)=>{
        setLatestName(event.target.value);

    }
    const ageChangeHandler=(event)=>{
        setLatestAge(event.target.value);

    }

  const addUserHandler=(event)=>{
    event.preventDefault();
    const userDetails={
        name:latestName,
        age:latestAge
    }
    console.log(userDetails);
  }

  return (
    <Card>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username" className={classes.label}>Username</label>
        <input id="username" type="text" className={classes.input} onChange={nameChangeHandler}/>
        <label htmlFor="age" className={classes.label}>Age</label>
        <input id="age" type="number" className={classes.input} onChange={ageChangeHandler}/>
        <Button type="submit">Add User</Button>
        
      </form>
    </Card>
  )
}

export default AddUser;