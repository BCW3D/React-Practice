import React, { useState } from "react";
import { Form, Button, FloatingLabel } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

function NewTodo(props) {
  const [newTodo, setNewTodo] = useState({ id: "", title: "", desc: "" });

  const { title, desc } = newTodo;

  const handleChange = (e) => {
    const name = e.target.name;
    setNewTodo((prevTodo) => {
      return { ...prevTodo, id: uuidv4(), [name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onHandleNewTodo(newTodo);
    setNewTodo({ id: "", title: "", desc: "" });
  };

  return (
    <div
      style={{
        padding: "5px",
        margin: "5px",
      }}
    >
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <FloatingLabel
            controlId="floatingTextarea"
            label="Add New Todo"
            className="mb-3"
          >
            <Form.Control
              name="title"
              onChange={handleChange}
              type="text"
              placeholder="Enter Todo"
              value={title}
            />
          </FloatingLabel>
        </Form.Group>
        <FloatingLabel
          controlId="floatingTextarea"
          label="Comments"
          className="mb-3"
        >
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            name="desc"
            onChange={handleChange}
            value={desc}
          />
        </FloatingLabel>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default NewTodo;
