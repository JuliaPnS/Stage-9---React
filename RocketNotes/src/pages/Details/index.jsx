import { Container, Links, Content } from './styles';

import { Tag } from '../../components/Tag';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { ButtonText } from '../../components/ButtonText';

export function Details() {
    return (
        <Container>
            <Header/>

            <main>
                <Content>
                    <ButtonText title="Excluir nota"/>

                    <h1> Introdução ao React</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Mollitia similique ipsam vitae ea quo expedita eaque ab dicta consectetur vel, accusamus quis, veniam rem. 
                        Cumque consectetur tenetur magni porro inventore.</p>

                    <Section title="Links Úteis">
                        <Links>
                            <li><a href='#'>https://www,.rocketseat.com.br</a></li>
                            <li><a href='#'>https://www,.rocketseat.com.br</a></li>
                        </Links>
                    </Section>

                    <Section title="Marcadores">
                        <Tag title="express"/>
                        <Tag title="node"/>
                    </Section>

                    <Button title="Voltar"></Button>
                </Content>
            </main>
        </Container>
    )
}

