import React from "react";
import {
  Heading,
  Text,
  Flex,
  Box,
  Button,
  ButtonGroup,
  Input,
  IconButton,
  Checkbox,
} from "@chakra-ui/react";

import { AddIcon, DeleteIcon } from "@chakra-ui/icons";
import { AddToDo } from "./components/AddToDo";
import { useState } from "react";

export const ToDo = () => {
  const [categories, seTcategories] = useState([]);
  //   Hook

  // Agregar una nueva categoria
  // Nota: fijarse en el boton
  const onAddCategory = (newCategory) => {
    // categories.push(newCategory);

    if (categories.includes(newCategory)) return; //Validar si son los mismos en el input

    seTcategories([...categories, newCategory]);
  };
  return (
    <Box
      display={"flex"}
      backgroundColor={"blue"}
      height={"100vh"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Flex
        display={"flex"}
        flexDirection={"column"}
        height={"80%"}
        backgroundColor={"white"}
        width={"75%"}
        borderRadius={"15px"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Flex color={"lightgreen"} height={"10%"}>
          <Heading size={"xl"} marginTop={"2px"}>
            To-Do
          </Heading>
        </Flex>

        <Flex gap={"5px"}>
          <AddToDo onNewCategory={(value) => onAddCategory(value)} />
        </Flex>
        <Flex
          backgroundColor={"greenyellow"}
          height={"60%"}
          width={"90%"}
          marginTop={"10px"}
          justifyContent={"center"}
          borderRadius={"15px"}
          alignItems={"center"}
        >
          <ol>
            {categories.map((category) => {
              return (
                <div className="centrar">
                  <Checkbox className="centraar"></Checkbox>
                  <li className="list" key={category}>
                    {category}
                  </li>
                </div>
              );
            })}
          </ol>
        </Flex>
        <Flex>
          <IconButton
            backgroundColor={"lightgreen"}
            color={"black"}
            aria-label="Search database"
            icon={<DeleteIcon />}
            marginTop={"10px"}
          />
        </Flex>
      </Flex>
    </Box>
  );
};
