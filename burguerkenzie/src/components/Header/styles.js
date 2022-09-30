import styled from "styled-components";

export const HeaderDiv = styled.header`
  display: flex;
  background-color: var(--gray-0);
  flex-direction: column;
  width: 100vw;
  height: 150px;
  padding: 1rem;
  align-items: center;

  h1 {
    margin-left: 115px;
    cursor: pointer;
  }

  span {
    color: red;
    font-size: 1.2rem;
  }

  form {
    width: 100%;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    height: 100px;

    h1 {
      margin-left: 115px;
    }

    form {
      width: 30%;
      max-width: 400px;
      margin-right: 115px;
    }
  }
`;

export const ButtonHeader = styled.button`
  color: var(--white);
  background-color: var(--color-primary);
  position: absolute;
  right: 20px;
  top: 75px;
  width: 100px;
  height: 30px;
  border: none;
  border-radius: 0.5rem;

  @media (min-width: 768px) {
    top: 40px;
    right: 140px;
  }
`;

export const InputHeader = styled.input`
  width: 100%;
  height: 50px;
  padding: 0px 10px 0px 15px;
  border: 2px var(--gray-100);
  border-radius: 0.5rem;
  margin-top: 10px;
`;
