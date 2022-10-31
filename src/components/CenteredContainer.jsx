import { Card, CardContent, Grid } from "@mui/material";

export default function CenteredContainer(props) {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh", backgroundColor: "#f2f2f2" }}
    >
      <Grid item xs={3}>
        <Card>
          <CardContent>{props.children}</CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
