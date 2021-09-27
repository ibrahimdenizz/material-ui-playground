import { Grid } from "@material-ui/core";
import CoffeeCard from "./CoffeeCard";
import coffeeMakerList from "./constants";

function Content() {
  const getCoffeeMakerCard = (coffeeMakerObj) => {
    return (
      <Grid item xs={12} sm={4}>
        <CoffeeCard {...coffeeMakerObj} />
      </Grid>
    );
  };

  return (
    <Grid container spacing={4}>
      {coffeeMakerList.map(getCoffeeMakerCard)}
    </Grid>
  );
}

export default Content;
