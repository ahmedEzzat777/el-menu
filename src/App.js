import { useEffect } from "react";
import Router from "./components/Router";
import CategoryService from "./services/CategoryService";

function App() {
  // useEffect(() => {
  //   CategoryService.getCategories("H9oHi2").then((d) => {
  //     console.log(d);
  //   });
  //   CategoryService.getCategoryItems(
  //     "H9oHi2",
  //     "66fc567f-b841-48f8-98eb-616eb4de88ef"
  //   ).then((d) => {
  //     console.log(d);
  //   });
  // }, []);

  return (
    <Router/>
  );
}

export default App;
