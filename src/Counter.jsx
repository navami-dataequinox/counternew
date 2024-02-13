import { Button, Stack } from "@mui/material";
import React, { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };
  const handleDecrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  return (
    <>
      <Stack
        direction="row"
        justifyContent="center"
        sx={{ mt: 20, fontSize: "65px" }}
      >
        {counter}
      </Stack>
      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        sx={{ mt: 10 }}
      >
        <Button onClick={handleIncrement} variant="contained">
          Increment
        </Button>
        <Button onClick={handleDecrement} variant="contained">
          Decrement
        </Button>
      </Stack>
    </>
  );
}

export default Counter;
