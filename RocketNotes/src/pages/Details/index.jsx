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
                </Content>
            </main>
        </Container>
    )
}