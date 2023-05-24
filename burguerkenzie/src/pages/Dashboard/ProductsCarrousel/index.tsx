import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Chip,
  Stack,
  Box,
} from "@mui/material";
import { useProductsContext } from "../../../contexts";
import { ListCarrousel } from "./styles";
import { monetizeString } from "../../../utils/utils";
import { FontSx } from "../../EspecificProduct/styles";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { animateHiddenCard, animateShownCard } from "../animations";
import { ProductInterface } from "../../../interfaces";

interface Props {
  isDrinks?: boolean;
}

export const ProductsCarrouselSection = ({ isDrinks }: Props) => {
  const { products } = useProductsContext();
  const navigate = useNavigate();

  const listToRender = (list: ProductInterface[]) => {
    return list.map((elem, index) => {
      const handleRedirectToProductPage = () => {
        navigate(`/products/burguers/${elem.id}`);
      };

      return (
        <Card
          key={elem.name}
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
          }}
          component={motion.div}
          initial={
            index % 2
              ? { ...animateHiddenCard, y: 100 }
              : { ...animateHiddenCard, y: -100 }
          }
          animate={{ ...animateShownCard, y: 0 }}
          onClick={handleRedirectToProductPage}
          whileHover={{ scale: 0.95 }}
          whileTap={{ scale: 0.75 }}
        >
          <Box sx={{ width: 177 }}>
            <CardMedia component="img" image={elem.img} />
          </Box>

          <CardContent sx={{ width: "45%" }}>
            <Stack
              direction="column"
              justifyContent="space-around"
              alignItems="center"
              spacing={2}
            >
              <Typography
                gutterBottom
                variant="h6"
                sx={{ ...FontSx, fontWeight: "bold" }}
              >
                {elem.name}
              </Typography>

              <Stack
                direction="column"
                justifyContent="space-around"
                alignItems="center"
                spacing={1}
              >
                <Chip
                  label={elem.category}
                  sx={{
                    borderRadius: 2,
                    color: "white",
                    width: "100%",
                    backgroundColor: "#27ae60",
                    fontFamily: "Inter",
                  }}
                />
              </Stack>

              <Typography sx={{ ...FontSx, color: "#27ae60" }}>
                {monetizeString(elem.price)}
              </Typography>
            </Stack>
          </CardContent>
        </Card>
      );
    });
  };

  return (
    <ListCarrousel>
      {isDrinks
        ? listToRender(products.slice(3, 6))
        : listToRender(products.slice(0, 3))}
    </ListCarrousel>
  );
};
