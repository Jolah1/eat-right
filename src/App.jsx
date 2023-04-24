import React from 'react';
import Pages from "./pages/Pages";
import Category from "./components/Category";
import Search from './components/Search';
import { BrowserRouter } from 'react-router-dom'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {GiKnifeFork} from 'react-icons/gi';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav>
        <GiKnifeFork />
        <Logo to={"/"}>Eat Right</Logo>
      </Nav>
      <Search />
      <Category />
      <Pages />
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
text-decoration: none;
font-size: 1.5rem;
font-weight: 400;
font-family: 'Lobster Two', cursive;
color: #7047c7;
`;

const Nav = styled.div`
padding: 4rem 0rem;
display: flex;
justify-content: flex-start;
align-item: center;

svg{
  font-size: 2rem;
  color: #7047c7
}
`;

export default App;
