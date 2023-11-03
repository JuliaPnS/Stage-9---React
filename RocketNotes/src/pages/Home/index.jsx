<<<<<<< HEAD
import { FiPlus, FiSearch } from 'react-icons/fi';
=======
import { FiPlus } from 'react-icons/fi';
>>>>>>> b7c8eafb182716b1a36dc62932a0cd717637f502
import { Container, Brand, Menu, Search, Content, NewNote } from './styles';

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
<<<<<<< HEAD
import { Section } from '../../components/Section';
import { Note } from '../../components/Note';
import { Input } from '../../components/Input';

=======
>>>>>>> b7c8eafb182716b1a36dc62932a0cd717637f502

export function Home() {
    return (
        <Container>
            <Brand>
            <h1>RocketNotes</h1>
            </Brand>
            <Header/>

<<<<<<< HEAD
            <Menu> 
                <li><ButtonText title="Todos" isactive/></li>
=======
            <Menu>
                <li><ButtonText title="Todos"/></li>
>>>>>>> b7c8eafb182716b1a36dc62932a0cd717637f502
                <li><ButtonText title="React"/></li>
                <li><ButtonText title="Node"/></li>

            </Menu>

            <Search>
<<<<<<< HEAD
                <Input placeholder="Pesquisar pelo título" icon={FiSearch}/>
=======
>>>>>>> b7c8eafb182716b1a36dc62932a0cd717637f502

            </Search>

            <Content>
<<<<<<< HEAD
                <Section title="Minhas Notas"> 
                    <Note data={{ 
                        title: 'React', 
                        tags: [
                            {id: '1', name: 'react'},
                            {id: '2', name: 'rocketseat'}
                        ]
                    }}/>

                </Section>
=======

>>>>>>> b7c8eafb182716b1a36dc62932a0cd717637f502
            </Content>

            <NewNote>
                <FiPlus/>
                    Criar Nota
            </NewNote>
        </Container>
    );
}