import React from "react";
import { useState } from "react";
import {
  Heading,
  Text,
  Flex,
  Box,
  Button,
  ButtonGroup,
  Input,
  IconButton,
} from "@chakra-ui/react";

import { AddIcon, DeleteIcon } from "@chakra-ui/icons";

export const AddToDo = ({ onNewCategory }) => {
  const [inputValue, setinputValue] = useState("");

  const onInputChange = (event) => {
    setinputValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim().length <= 1) return; // Condicion para que cuando le demos enter y este vacio el input no se agregue.

    // seTcategories((categories) => [inputValue, ...categories]);
    onNewCategory(inputValue.trim());

    setinputValue("");
  };
  return (
    <form onSubmit={onSubmit}>
      <Input
        placeholder="Enter your things to do"
        width={"300px"}
        textAlign={"center"}
        color={"black"}
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
