import {
  Button,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CategoryService from "../../services/CategoryService";
import ItemsList from "../divs/ItemsList";

export default function CategoriesPage(props) {
  const { userId } = useParams();
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState(null);

  useEffect(() => {
    CategoryService.getCategories(userId).then((d) => {
      setCategories(d);
    });
  }, [userId]);

  const categoriesList = (
    <ImageList>
      {categories.map((item, idx) => (
        <ImageListItem key={idx}>
          <Button onClick={(e) => setCategoryId(item.CategoryGuid)}>
            <img src={item.ImagePath} alt={item.name} loading="lazy" />
            <ImageListItemBar
              title={item.name}
              //subtitle={<span>by: {item.author}</span>}
              position="below"
            />
          </Button>
        </ImageListItem>
      ))}
    </ImageList>
  );
  return (
    <Box>
      {categoryId ? (
        <Button onClick={(e) => setCategoryId(null)}>Back</Button>
      ) : null}
      {categoryId ? (
        <ItemsList userId={userId} categoryId={categoryId} />
      ) : (
        categoriesList
      )}
    </Box>
  );
}
