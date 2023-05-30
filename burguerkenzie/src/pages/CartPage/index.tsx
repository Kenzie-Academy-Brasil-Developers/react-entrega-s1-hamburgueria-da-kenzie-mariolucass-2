import { Container, Grid } from "@mui/material";
import { DivContainer } from "../../styles/container";
import { CartPageContent } from "./CartContent";
import { CheckoutAndValue } from "./CheckoutAndValue";
import { CustomerMessage } from "./CustomerMessage";
import { CartPageRecommendations } from "./CartRecommendations";
import { useCartContext } from "../../contexts";

export const CartPage = () => {
  const { currentSale } = useCartContext();

  return (
    <DivContainer>
      <Container sx={{ mt: 2 }}>
        <Grid container spacing={2} direction={"row"}>
          <Grid item xs={8}>
            <CartPageContent />
          </Grid>

          {currentSale.length ? (
            <Grid
              item
              xs={4}
              sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            >
              <CheckoutAndValue />
              <CustomerMessage />
            </Grid>
          ) : (
            <Grid
              item
              xs={4}
              sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            >
              <CustomerMessage />
            </Grid>
          )}

          <Grid item xs={12}>
            <CartPageRecommendations />
          </Grid>
        </Grid>
      </Container>
    </DivContainer>
  );
};
