import { Container } from './styles';

<<<<<<< HEAD
export function ButtonText({ title, isactive = false, ...rest}) {
    return (
        <Container 
        type="button" {...rest}
        $isactive={isactive.toString()}
=======
export function ButtonText({ title, isActive = false, ...rest}) {
    return (
        <Container 
        type="button" {...rest}
        $isactive={isActive.toString()}
>>>>>>> b7c8eafb182716b1a36dc62932a0cd717637f502
        >
            {title}
        </Container>
    );
}