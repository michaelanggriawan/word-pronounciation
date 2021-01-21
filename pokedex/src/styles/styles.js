import styled from '@emotion/styled';

export const Container = styled.div`
  background-color: #fff;
  height: 100vh;
  max-width: 465px;
  margin: 0 auto;
  overflow-x: hidden;
  overflow-y: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Header = styled.header`
  background-color: #fff;
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.08);
  width: 465px;
  height: 53px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f15a29;
  position: fixed;

  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const Loading = styled.div`
  width: 50px;
  height: 50px;
  border: solid 5px #ccc;
  border-top-color: #f15a29;
  border-radius: 100px;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 999;
  overflow: show;
  bottom: 0;
  margin: auto;
  animation: loadCircle 2s linear infinite;

  @keyframes loadCircle {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const ContainerCard = styled.div`
  margin-top: 70px;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-column-gap: 5px;
  grid-row-gap: 20px;
  justify-items: center;
  margin-bottom: 80px;
`;

export const Card = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
  color: #f15a29;

  &:hover {
    cursor: pointer;
    background-color: #f15a29;
    color: #fff;
  }

  @media (max-width: 375px) {
    width: 80%;
    font-size: 10px;
  }
`;

export const Back = styled.div`
  display: flex;
  position: absolute;
  left: 0;
  margin-left: 20px;

  &:hover {
    cursor: pointer;
  }
`;

export const PokemonDetail = styled.div`
  margin-top: 70px;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #f15a29;

  img {
    width: 140px;
    height: 140px;
  }

  .label {
    background-color: #f15a29;
    height: 32px;
    width: 90%;

    span {
      padding-top: 4px;
      color: #fff;
      margin-left: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }

  .section {
    color: #fff;
    width: 90%;
    .monster-profile {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      color: #f15a29;
      margin-bottom: 10px;
    }

    .ability {
      display: flex;
      flex-direction: column;
    }
  }

  .monster-move {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 90%;
    grid-gap: 10px;
  }
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: space-around;
  position: fixed;
  width: 465px;
  height: 53px;
  background: #fff;
  box-shadow: 0 -2px 2px 0 rgba(0, 0, 0, 0.1), 0 -2px 1px 0 rgba(0, 0, 0, 0.06);
  bottom: 0;
  align-items: center;

  .link {
    color: #f15a29;
    text-decoration: none;
  }

  .line-up {
    height: 53px;
    border: 0.5px solid #f15a29;
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const Button = styled.button`
  background-color: #f15a29;
  color: #fff;
  width: 30%;
  height: 30px;
  border-radius: 5px;
  border: 0;
  margin-top: 20px;
  margin-bottom: 20px;

  &:focus {
    outline: 0;
  }

  &:hover {
    cursor: pointer;
  }
`;
