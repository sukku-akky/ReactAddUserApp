import React from "react";
import Button from "./Button";
import Card from "./Card";
import "./ErrorModal.css"

const ErrorModal=(props)=>{
  return (
    <div className="backdrop" onClick={props.onConfirm}>
    <Card className="modal">
      <header className="header">
        <h2>{props.title}</h2>
      </header>
      <div className="content">
        <p>{props.message}</p>
      </div>
      <footer className="actions">
        <Button onClick={props.onConfirm}>OK</Button>
      </footer>
    </Card>
    </div>
  )
}

export default ErrorModal;