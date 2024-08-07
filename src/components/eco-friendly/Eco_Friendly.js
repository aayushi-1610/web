import styled from 'styled-components';
import { ThreeR } from './AllSvgs';
import Recycle from './components/Recycle';
import './Eco_Friendly.css';
import Renewable from './components/Renewable';
import TreeAnimation from './components/TreeAnimation';
import Ecotip from './components/Ecotip';
import TypewriterEffect from "./AnimatedLetters";
const Main=styled.div`
background-color:#ebfadc;

.Line1{
height:85%;

}
`

function EcoFriendly() {
  return (
    <Main>
      <Ecotip/>
    <TreeAnimation/>
    <h2 className="elegant-gold-title">The Triple R Ethic: Reducing, Reusing, and Recycling</h2>

    <Recycle></Recycle>
    <h2 className="elegant-gold-title  Title2" ><p>Harnessing Nature's Power: The Future of Renewable Energy</p></h2>

    <Renewable></Renewable>
    </Main>
  );
}

export default EcoFriendly;
