import { Box, Divider, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Cards from "react-credit-cards";
import { useCartContext } from "../../../contexts";
import {
  animateHiddenBox,
  animateShownBox,
  animateTransitionBox,
} from "../../../libs/framer";
import { BoxSx } from "../../../libs/mui";

export const CardIllustration = () => {
  const { card } = useCartContext();

  return (
    <Box
      sx={{
        ...BoxSx,
        minHeight: 437.5,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
      }}
      component={motion.div}
      initial={animateHiddenBox}
      animate={animateShownBox}
      transition={animateTransitionBox}
    >
      <Typography variant="h4" sx={{ fontWeight: "600" }}>
        Insira os dados do seu cartão:
      </Typography>

      <Divider />

      <Cards
        placeholders={{ name: "SEU NOME AQUI" }}
        locale={{ valid: "valido até" }}
        cvc={card.cvc}
        expiry={card.expiry}
        focused={card.focus}
        name={card.name}
        number={card.number}
      />
    </Box>
  );
};
