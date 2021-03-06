import React from 'react';
import styled from 'styled-components';
import { stacks, screen, Assets } from '../../config';

const Container = styled.div`
    width: 100vw;
    min-height: 100vh;
    max-height: 100%;
    background-color: black;
`;
const Header = styled.div`
    font-size: 24px;
`;

const StackGrid = styled.div`
    width: 100%;
    padding: 50px 20px;
    padding-top: 100px;

    display: grid;
    grid-column-gap: 20px;
    grid-row-gap: 40px;
    grid-template-columns: repeat(auto-fill, minmax(300px, 300px));
    grid-template-rows: repeat(auto-fill, 1fr);
    justify-content: center;
    align-items: center;
    background-color: black;
`;

const Stack = styled.div`
    width: 300px;
    height: 200px;
    padding: 10px;

    display: flex;
    justify-content: center;
    align-items: center;
    border: 5px solid;
    border-image: url(${Assets.stack.border}) 10 / 32px;
    image-rendering: pixelated;
    color: rgb(150, 150, 150);
    cursor: pointer;

    @media (max-width: ${screen.desktopS}) {
        width: 100%;
    }
    :hover,
    :active {
        border-image: url(${Assets.stack.borderInvert}) 10 / 32px;
        border-radius: 20px;
        & > :first-child {
            filter: invert(1);
            transition: 0.3s;
        }
        & > div {
            color: white;
            transition: 0.3s;
        }
    }
    &.progress {
        cursor: initial;
    }
`;

const Icon = styled.div`
    width: 180px;
    height: 180px;

    background-image: url(${(props) => props.src});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
`;
const Info = styled.div`
    width: 100%;
    padding-left: 20px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    font-size: 20px;
`;
const Name = styled.div``;
const Level = styled.div`
    font-size: 24px;
`;

const getLevel = (level) => {
    return '■'.repeat(level) + '□'.repeat(5 - level);
};

const Presenter = () => (
    <Container>
        <StackGrid>
            {stacks.map((elem) => (
                <Stack>
                    <Icon src={elem.src} />
                    <Info>
                        <Name>{elem.name}</Name>
                        <Level>{getLevel(elem.level)}</Level>
                    </Info>
                </Stack>
            ))}
            <Stack className={'progress'}>
                <p>Studying...</p>
            </Stack>
        </StackGrid>
    </Container>
);

export default Presenter;
