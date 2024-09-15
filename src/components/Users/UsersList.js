import React from "react"
import "./UsersList";
import Card from "../UI/Card";
const UsersList=(props)=>{
  return (
    <Card>
      
        <ul  className="users"> 
          {props.users.map((user)=>{
            return (
              <li>
                `${user.name} (${user.age} years old)`
              </li>
            )
      
          })}
        </ul>
      
    </Card>
  )
}

export default UsersList;
