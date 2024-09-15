import React from "react"
import Card from "../UI/Card";
import classes from "./AddUser.module.css"
import Button from "../UI/Button";

const AddUser=()=>{

  const addUserHandler=(event)=>{
    event.preventDefault();
  }
  return (
    <Card>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username" className={classes.label}>Username</label>
        <input id="username" type="text" className={classes.input}/>
        <label htmlFor="age" className={classes.label}>Age</label>
        <input id="age" type="number" className={classes.input}/>
        <Button type="submit">Add User</Button>
        
      </form>
    </Card>
  )
}

export default AddUser;