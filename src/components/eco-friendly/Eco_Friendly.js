import styled from 'styled-components';
import { ThreeR } from './AllSvgs';
import Recycle from './components/Recycle';
import './Eco_Friendly.css';
import Renewable from './components/Renewable';

const Main=styled.div`
background-color:#ebfadc;

.Line1{
height:85%;

}
`

function EcoFriendly() {
  return (
    <Main>
    <Recycle></Recycle>
    <Renewable></Renewable>
    </Main>
  );
}

export default EcoFriendly;
