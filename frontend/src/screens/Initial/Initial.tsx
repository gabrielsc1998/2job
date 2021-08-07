/**
 * 
 * @author Gabriel da Silva Caetano
 * @email <98gabrielSc@gmail.com>
 * @description Initial screen
 * 
 */

import React from 'react';
// import { Button } from '@material-ui/core';

import { ContainerInitialForms } from 'components';

import { 
  LabelTitle, 
  LabelSubtitle,
  ContainerLabel
} from './style';

import TEXTS from './texts';

// interface InterfaceMyButton {
//   options: {
//     text: string,
//     onClick?: () => void;
//     style?: React.CSSProperties | undefined;
//   }
// };

export default function Initial() {

  // const classes = useStyles();

  // const MyButton = (props: InterfaceMyButton) => {
  //   const { text='', onClick=(()=>{}), style=undefined } = props.options;
  //   return (
  //     <Button 
  //       variant={'outlined'}
  //       disableElevation
  //       className={classes.button}
  //       style={style}
  //       onClick={onClick}
  //     > {text} </Button>
  //   );
  // };
  
  return(
    <ContainerInitialForms 
      left={
        <ContainerLabel>
          <LabelTitle>{TEXTS.title}</LabelTitle>
          <LabelSubtitle>
            {TEXTS.subtitle.p1}
            <br/>
            {TEXTS.subtitle.p2}
          </LabelSubtitle>
        </ContainerLabel>
      }
    />
  )

  // return(
  //   <Container>
  //     <ContainerInitialForms>
  //       <ContainerScreen>
  //         <ContainerTitle>
  //           <Title> {TEXTS.title} </Title>
  //         </ContainerTitle>
  //         <ContainerLabelAndButtons>
  //           <ContainerLabel>
  //             <Label>{TEXTS.label}</Label>
  //           </ContainerLabel> 
  //           <ContainerButtons> 
  //             <MyButton 
  //               options={{
  //                 text: TEXTS.buttons.dev, 
  //                 style:{ marginRight: 5 },
  //                 onClick: (() => alert(`Bem vindo ${TEXTS.buttons.dev}`))
  //               }}
  //             />
  //             <MyButton 
  //               options={{
  //                 text: TEXTS.buttons.company, 
  //                 style:{ marginLeft: 5 },
  //                 onClick: (() => alert(`Bem vindo ${TEXTS.buttons.company}`))
  //               }}
  //             />
  //           </ContainerButtons> 
  //         </ContainerLabelAndButtons>
  //       </ContainerScreen>
  //     </ContainerInitialForms>
  //   </Container>
  // )
}