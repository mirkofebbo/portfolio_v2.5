import React, { useEffect, useState } from "react";
import { Typography, Box, Button } from "@mui/material";

const Home = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <Box>
      <Typography variant="h1">Hello, World!</Typography>
      <Typography variant="h2">You clicked {count} times</Typography>
      <Button onClick={() => setCount(count + 1)}>Click me</Button>
    </Box>
  );
}

export default Home;