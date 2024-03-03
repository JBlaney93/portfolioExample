import "./App.css";
import styled from "styled-components";

function App() {
  return (
    <AppContainer>
      <Nav>
        <NavButtons>Portfolio</NavButtons>
        <NavButtons>Contact</NavButtons>
      </Nav>

      <Main>
        <HeaderTextContainer>
          <HeaderText>Hi I am James</HeaderText>
          <MainText>
            Welcome to my portoflio, lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </MainText>
        </HeaderTextContainer>

        <ContentContainer>
          <TextContainer>
            <ContentHeader>Project Number One</ContentHeader>
            <ContentInfoText>
              TypeScript | React | Node | Express | Postgres
            </ContentInfoText>
          </TextContainer>
          <ContentBox>
            <PlaceholderText>portfolio content here</PlaceholderText>
          </ContentBox>
        </ContentContainer>

        <ContentContainer>
          <TextContainer>
            <ContentHeader>Project Number One</ContentHeader>
            <ContentInfoText>
              TypeScript | React | Node | Express | Postgres
            </ContentInfoText>
          </TextContainer>
          <ContentBox>
            <PlaceholderText>portfolio content here</PlaceholderText>
          </ContentBox>
        </ContentContainer>

        <ContentContainer>
          <TextContainer>
            <ContentHeader>Project Number One</ContentHeader>
            <ContentInfoText>
              TypeScript | React | Node | Express | Postgres
            </ContentInfoText>
          </TextContainer>
          <ContentBox>
            <PlaceholderText>portfolio content here</PlaceholderText>
          </ContentBox>
        </ContentContainer>
      </Main>

      <Footer>
        <FooterButton>Copyright BigBoyCoolWebsites</FooterButton>
      </Footer>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
`;

const Nav = styled.nav`
  background: #8da1b9;
  position: fixed;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 6rem;
`;

const Main = styled.main`
  background: #f2f5f7;
  display: flex;
  flex-direction: column;
  gap: 6rem;
  min-height: calc(100vh - 12rem);
  height: 100%;
  padding: 6rem 2rem;
`;

const NavButtons = styled.a`
  color: #f3f6f7;
  font-size: 1.5rem;
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    color: #f3f6f7;
    background: #6782a2;
    cursor: pointer;
  }
`;

const HeaderTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const HeaderText = styled.h1`
  color: #2b2d42;
  margin-top: 2rem;
`;

const MainText = styled.div`
  font-size: 1.5rem;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const ContentHeader = styled.h2``;

const ContentInfoText = styled.p`
  font-size: 20px;
`;

const ContentBox = styled.div`
  max-width: 800px;
  max-height: 800px;
  width: 50vw;
  height: 50vw;
  min-width: 200px;
  min-height: 200px;
  border: 1px solid grey;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PlaceholderText = styled.h4`
  margin: 0;
`;

const Footer = styled.footer`
  background: #8da1b9;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 6rem;
`;

const FooterButton = styled.div`
  color: #f3f6f7;
  padding: 1rem;
  font-size: 1.5rem;
  position: relative;
  &:hover {
    color: #f3f6f7;
    background: #95adb6;
    cursor: pointer;
  }
`;
