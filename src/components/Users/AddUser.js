import React from "react"


const AddUser=()=>{

  const addUserHandler=(event)=>{
    event.preventDefault();
  }
  return (
    <div>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username"/>
        <label htmlFor="age">Age</label>
        <input id="age"/>
        <button type="submit">Add User</button>
      </form>
    </div>
  )
}

export default AddUser;