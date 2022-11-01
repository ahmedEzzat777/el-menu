import {
  Card,
  CardContent,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";

export default function CenteredContainer(props) {
  const theme = useTheme();
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh", backgroundColor: "#f2f2f2" }}
    >
      <Grid item xs={12} sm={3}>
        <Card
          sx={{
            height: isSmUp ? "65vh" : "85vh",
            width: isSmUp ? "80vh" : "85vw",
          }}
        >
          <CardContent>{props.children}</CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
