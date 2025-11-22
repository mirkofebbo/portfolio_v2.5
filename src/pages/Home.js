// ...existing code...
import { Typography, Box, Container, Button } from "@mui/material";

const Home = () => {

  return (
    <Box sx={{ minHeight: '64vh', display: 'flex', alignItems: 'center', justifyContent: 'center', py: 8 }}>
      <Container maxWidth="md" sx={{ color: 'common.white' }}>
        <Typography variant="h2" >
          I make the invisible visible.
        </Typography>
        <Typography variant="subtitle1" sx={{ mb: 3, opacity: 0.9 }}>
          Sculptures, systems and software that expose the architectures of power.
        </Typography>

        <Typography variant="body1" sx={{ fontSize: { xs: '0.98rem', md: '1.05rem' }, lineHeight: 1.7, maxWidth: '70ch', background: 'rgba(255,255,255,0.04)', p: 2, borderRadius: 1 }}>
          I create systems, sculptures, and software that expose the invisible architectures of power — from financial networks to neural signals. Working with data visualisation, computational art, and machine interaction, I transform real-world information into responsive artworks. My practice moves fluidly between code and material, algorithm and embodiment, research and performance.
        </Typography>
      </Container>
    </Box>
  );
}

export default Home;
// ...existing code...