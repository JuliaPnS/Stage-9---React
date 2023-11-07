
import { RiShutDownLine } from 'react-icons/ri';

import { Container, Profile, Logout } from './styles';

export function Header() {
    return (
        <Container>
            <Profile to="/profile">
                <img src="https://github.com/JuliaPnS.png" alt="Foto de perfil do usuário" />

                <div>
                    <span>Bem-vindo,</span>
                    <strong>Julia Penna</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine></RiShutDownLine>
            </Logout>

        </Container>
    );
}