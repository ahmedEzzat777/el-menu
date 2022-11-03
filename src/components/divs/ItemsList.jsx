import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  Paper,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Stack } from "@mui/system";
import { useEffect, useMemo, useState } from "react";
import CategoryService from "../../services/CategoryService";
import SearchIcon from "@mui/icons-material/Search";
import QrCodeIcon from "@mui/icons-material/QrCode";
import QrReader from "react-qr-scanner";

export default function ItemsList(props) {
  const theme = useTheme();
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [bsOpen, setBsOpen] = useState(false);

  const filteredItems = useMemo(
    () =>
      items.filter(
        (x) =>
          search === "" ||
          x.itemName?.includes(search) ||
          x.barcode?.includes(search)
      ),
    [items, search]
  );

  useEffect(() => {
    CategoryService.getCategoryItems(props.userId, props.categoryId).then(
      (d) => {
        setItems(d);
      }
    );
  }, [props.userId, props.categoryId]);

  const itemsPage = (
    <Stack>
      <Stack direction="row" width="100%">
        <TextField
          id="search"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          variant="standard"
          placeholder="Search"
          fullWidth
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <IconButton onClick={(e) => setBsOpen(true)}>
          <QrCodeIcon />
        </IconButton>
      </Stack>
      <Paper sx={{ height: isSmUp ? "55vh" : "75vh", overflow: "auto" }} m={1}>
        <List>
          {filteredItems.length === 0 ? (
            <Typography>no items in this category!</Typography>
          ) : null}
          {filteredItems.map((item, idx) => (
            <ListItem divider key={idx}>
              <Stack
                direction="row"
                width="100%"
                justifyContent="space-between"
                m={1}
              >
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
                  <Stack
                    direction="row"
                    width="100%"
                    justifyContent="flex-end"
                    spacing={2}
                  >
                    <Typography color="grey">{item.describeItem}</Typography>
                    <Typography width="20%" color="gray">
                      {item.price}
                    </Typography>
                    <Typography width="20%" color="gray">
                      {item.UnitName}
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            </ListItem>
          ))}
        </List>
      </Paper>
    </Stack>
  );

  const barcodeScanner = (
    <Stack>
      <Button onClick={(e) => setBsOpen(false)}>Close</Button>
      <QrReader
        delay={0}
        onError={(e) => console.log(e)}
        onScan={(val) => {
          if (val) {
            setSearch(val.text);
            setBsOpen(false);
          }
        }}
      />
    </Stack>
  );

  return <Box>{bsOpen ? barcodeScanner : itemsPage}</Box>;
}
