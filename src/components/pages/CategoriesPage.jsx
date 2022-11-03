import {
  Button,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CategoryService from "../../services/CategoryService";
import ItemsList from "../divs/ItemsList";
import ImageIcon from "@mui/icons-material/Image";

export default function CategoriesPage(props) {
  const theme = useTheme();
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));
  const { userId } = useParams();
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState(null);

  useEffect(() => {
    CategoryService.getCategories(userId)
      .then((d) => {
        setCategories(d);
      })
      .catch((e) => console.log(e));
  }, [userId]);

  const categoriesList = (
    <ImageList sx={{ height: isSmUp ? "60vh" : "80vh", overflow: "auto" }}>
      <ImageListItem>
        <Button onClick={(e) => setCategoryId("all")}>
          <ImageIcon style={{ width: "100%", height: "100%" }} />
          <ImageListItemBar title="all" position="bottom" />
        </Button>
      </ImageListItem>

      {categories.map((item, idx) => (
        <ImageListItem key={idx}>
          <Button onClick={(e) => setCategoryId(item.CategoryGuid)}>
            <img
              style={{ width: "100%", height: "100%" }}
              src={item.ImagePath}
              alt={item.name}
              loading="lazy"
            />
            <ImageListItemBar title={item.name} position="bottom" />
          </Button>
        </ImageListItem>
      ))}
    </ImageList>
  );
  return (
    <Stack>
      {categoryId ? (
        <Stack direction="row">
          <Button onClick={(e) => setCategoryId(null)}>Back</Button>
        </Stack>
      ) : null}
      {categories.length === 0 ? (
        <Typography>No categories to this user!</Typography>
      ) : null}
      {categoryId ? (
        <ItemsList userId={userId} categoryId={categoryId} />
      ) : (
        categoriesList
      )}
    </Stack>
  );
}
