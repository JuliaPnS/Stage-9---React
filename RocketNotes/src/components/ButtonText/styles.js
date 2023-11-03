import styled from 'styled-components';

export const Container = styled.button`

    background: none;
<<<<<<< HEAD:RocketNotes/src/components/ButtonText/styles.js
    color: ${({ theme, $isactive }) => $isactive ? theme.COLORS.ORANGE : theme.COLORS.GRAY_100};
=======
    color: ${({ theme, $isactive }) =>  $isactive ? theme.COLORS.ORANGE : theme.COLORS.GRAY_100};
>>>>>>> b7c8eafb182716b1a36dc62932a0cd717637f502:RocketNotes/src/components/ButtonText/style.js

    border: none;
    font-size: 16px;

`;