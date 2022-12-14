import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import { GlobalProvider } from "./components/Globlal";
import CartPage from "./routes/cart.routes";
import GamePage from "./routes/game.routes";
import GamesPage from "./routes/games.routes";
import HomePage from "./routes/home.routes";
import LoginPage from "./routes/login.routes";
import OrderPage from "./routes/order.routes";
import RegisterPage from "./routes/register.routes";

function App() {
  return (
    <AppStyle>
      <GlobalStyle />
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/sign-in" element={<LoginPage/>}/>
            <Route path="/sign-up" element={<RegisterPage/>}/>
            <Route path="/cart" element={<CartPage/>}/>
            <Route path="/games" element={<GamesPage/>}/>
            <Route path="/order" element={<OrderPage/>}/>
            <Route path="/game/:id" element={<GamePage/>}/>
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </AppStyle>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Teko', sans-serif;
  }
`
const AppStyle = styled.div`
  background-color: #5F67EC;
  height: 100vh;
  width: 100vw;
`