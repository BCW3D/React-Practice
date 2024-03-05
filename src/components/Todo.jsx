import React from "react";
import { Card, Button } from "react-bootstrap";
import { FaRegTrashCan } from "react-icons/fa6";

function Todo(props) {
  const { id, title, desc } = props.todo;

  //console.log(props);

  const handleClick = (id) => {
    props.onHandleRemoveTodo(id);
  };

  return (
    <Card
      style={{
        width: "18rem",
        display: "inline-block",
        marginRight: "4px",
        marginBottom: "2px",
      }}
    >
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{desc}</Card.Text>
        <Button variant="danger" onClick={() => handleClick(id)}>
          <FaRegTrashCan />
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Todo;
