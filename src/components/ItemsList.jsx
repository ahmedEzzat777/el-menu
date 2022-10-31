import { List, ListItem, Paper, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useEffect, useState } from "react";
import CategoryService from "../services/CategoryService";

export default function ItemsList(props) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    CategoryService.getCategoryItems(props.userId, props.categoryId).then(
      (d) => {
        setItems(d);
      }
    );
  }, [props.userId, props.categoryId]);

  return (
    <Paper sx={{ maxHeight: "80vh", overflow: "auto" }}>
      <List>
        {items.length === 0 ? (
          <Typography>no items in this category!</Typography>
        ) : null}
        {items.map((item, idx) => (
          <ListItem divider key={idx}>
            <Stack direction="row" width="100%" justifyContent="space-between">
              <Stack
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
              >
                <img
                  style={{ width: "100px", height: "100px" }}
                  src={item.imagePaths}
                  alt={item.itemName}
                />
                <Typography>{item.barcode}</Typography>
              </Stack>

              <Stack
                justifyContent="space-between"
                alignItems="flex-end"
                spacing={2}
                m={1}
              >
                <Typography variant="h6">{item.itemName}</Typography>
                <Typography color="gray">{item.price}</Typography>
                <Typography color="grey">{item.describeItem}</Typography>
              </Stack>
            </Stack>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}
