import React, { useState } from "react";
import "./App.css";
import { Box, Text } from "@chakra-ui/layout";
import { Button, Input } from "@chakra-ui/react";
import MessageScreen from "./messageScreen/main";

function App() {
  const [username, setUsername] = useState<String>();

  const [userInput, setUserInput] = useState("");
  const handleChange = (e: any) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (userInput.length <= 0) {
      alert("Please enter a username");
      return;
    }
    setUsername(userInput);
  };
  return (
    <div className="App">
      {!username ? (
        <Box maxW="50%" mx="auto" mt={20}>
          <Text>Ingresa tu usuario</Text>
          <form onSubmit={handleSubmit}>
            <Input
              placeholder="Ingresa tu Nombre de usuario"
              onChange={handleChange}
            />
            <Button type="submit" mt={10} colorScheme="facebook">
              Ingresar
            </Button>
          </form>
        </Box>
      ) : (
        <MessageScreen Username={username} />
      )}
    </div>
  );
}

export default App;
