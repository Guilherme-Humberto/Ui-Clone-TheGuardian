import styled, { css } from 'styled-components/native';

export const Container = styled.ScrollView``;
export const Header = styled.View`
    background: yellow;
    width: 100%;
    padding: 20px;
    margin-bottom: -5px;
`;
export const TextHeader = styled.Text`
    font-size: 50px;
    font-family: "PlayfairDisplay_900Black"

    ${props => props.text && css`
        font-size: 15px;
        margin-top: -10px;
        padding: 0;
        font-family: "Lusitana_700Bold"
        color: red;
    `};
`;
export const Card = styled.View`
    margin-top: 1.5px;
    position: relative;
`;
export const ImageContainer = styled.Image`
    width: 100%;
    height: 300px;
`;
export const CardTextsContainer = styled.View`
    margin-left: 10px;
    position: absolute;
    bottom: 20px;
`;
export const CardHeadLine = styled.Text`
    font-size: 22px;
    background: #000;
    opacity: 0.9;
    margin: 5px 0;
    color: #eee;
    padding: 20px 10px;
    max-width: 300px;
    font-family: "PlayfairDisplay_900Black";
`;
