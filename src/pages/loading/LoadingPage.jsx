import { Container, CircularProgress, Typography, Box } from "@mui/material";
const LoadingPage = () => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <Box>
        <CircularProgress color="primary" />
        <Typography variant="h5">Loading...</Typography>
      </Box>
    </Container>
  );
};

export default LoadingPage;
