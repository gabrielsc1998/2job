/**
 * 
 * @author Gabriel da Silva Caetano
 * @email <98gabrielSc@gmail.com>
 * @description 
 * 
 */


import styled from 'styled-components';

const Container = styled.div`
  width: 80%;
  height: 70%;
  max-width: 400px;
  min-width: 300px;
  max-height: 800px;
  min-height: 250px;
  border-radius: 3px;
  border: solid 1px #CECECE;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ContainerLogo = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Container;
