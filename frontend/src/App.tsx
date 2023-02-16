import { ThemeProvider } from "styled-components";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { GlobalStyle } from "./styles/global";
import { Container, ImgHeader, ImgHeaderOpacity } from "./styles/main";
import { defaultTheme } from "./theme/default";
import ballheader from "./assets/images/ballheader.svg";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Container>
        <ImgHeader src={ballheader} />
        <ImgHeaderOpacity src={ballheader} />
        <Home />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}
