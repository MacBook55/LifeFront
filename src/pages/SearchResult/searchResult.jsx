import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import { useSelector } from "react-redux";
import OfferCard from "../../components/offersCard/offersCard";
import { useLocation } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

export default function SearchResult() {
  const { selectedOfferProduct } = useSelector((state) => state.discounts);
  const { products } = useSelector((state) => state.products);

  const { pathname } = useLocation();

  React.useEffect(() => {
    console.log(selectedOfferProduct);
    window.scrollTo(0, 0);
  }, [pathname]);
  const seachCard =
    selectedOfferProduct &&
    products &&
    products
      .filter((item) => {
        return (
          item._id === selectedOfferProduct._id ||
          item.productName === selectedOfferProduct.productName ||
          item.company === selectedOfferProduct.company ||
          item.countryOfManufacture ===
            selectedOfferProduct.countryOfManufacture
        );
      })
      .map((item, index) => {
        return (
          <Grid key={index} item xs={6} md={4} sm={6}>
            <OfferCard
              productId={item._id}
              productName={item.productName}
              maxNumOfProducts={item.quantity}
              numOfProductsThatReduced={2}
              priceBefore={item.price}
              image={item.image}
              discountPersentatge={item.discount.discountAmount}
              ratingValue={item.rating}
              description={item.description}
            />
          </Grid>
        );
      });

  return (
        <Container  disableGutters={true} sx={{ marginY: "8%", width: "100%" }}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container fixed spacing={3}>
              <Grid container item xs={4}>
                <Item>xs=4</Item>
              </Grid>
              <Grid container item spacing={2} xs={8}>
                {seachCard}
              </Grid>
            </Grid>
          </Box>
        </Container>
  );
}
