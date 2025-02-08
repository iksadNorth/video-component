import styled from 'styled-components';
import { IconBtn } from '../IconBtn';
import { faOpenid } from '@fortawesome/free-brands-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Container } from '../Container';
import { Bedge } from '../Bedge';


export const HeaderStyled = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;

    & > *:nth-child(1) {
        align-items: start;
    }
    & > *:nth-child(2) {
        align-items: center;
    }
    & > *:nth-child(3) {
        justify-content: end;
    }
`;

const IconBtnStyled = styled(IconBtn)`
    padding: 10px;
`;

export const Header = ({ ...props }) => {
    return (
        <HeaderStyled { ...props }>
            <Container>
                <IconBtnStyled icon={ faOpenid } />
            </Container>
            <Container>
                <input type='text' name='keyword'/>
            </Container>
            <Container row="true">
                <IconBtnStyled icon={ faPlus } />
                <Bedge style={{ width: 'unset' }}>
                    iksadnorth
                </Bedge>
            </Container>
        </HeaderStyled>
    );
};