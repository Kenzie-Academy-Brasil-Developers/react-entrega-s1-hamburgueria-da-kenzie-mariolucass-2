import { motion } from "framer-motion";
import styled from "styled-components";

export const AvatarDiv = styled(motion.div)`
  width: 168px;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  svg {
    filter: invert(57%) sepia(21%) saturate(1491%) hue-rotate(93deg)
      brightness(94%) contrast(81%);
  }
`;

export const ContentDiv = styled(motion.div)`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: rgb(63, 180, 232);
  background: linear-gradient(
    90deg,
    rgba(63, 180, 232, 1) 50%,
    rgba(5, 121, 189, 1) 50%
  );
  padding: 1rem;
  border-radius: 16px;
  border-bottom: 8px solid #84d5fb;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;

    background: linear-gradient(
      180deg,
      rgba(63, 180, 232, 1) 48.5%,
      rgba(5, 121, 189, 1) 48.5%
    );
  }
`;

export const DataDiv = styled(motion.div)`
  width: 35%;
  min-height: 168px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
