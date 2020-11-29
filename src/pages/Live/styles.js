import styled, { css } from 'styled-components/native';

export const Container = styled.ScrollView`
    flex: 1;
`;
export const Header = styled.View`
    background: red;
    height: 100px;
    width: 100%;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
`;
export const HeaderNav = styled.View`
    background: #9d0208;
    height: 50px;
    width: 100%;
    flex-direction: row;
    align-items: flex-end;
    padding-left: 100px;
`;
export const TextTopHeader = styled.Text`
    ${props => props.title && css`
        font-size: 50px;
        margin: 0 auto;
        font-family: "PlayfairDisplay_900Black";
        color: #fff;
    `}
    ${props => props.mintext && css`
        font-size: 12px;
        margin-right: 10px;
        margin-bottom: 5px;
        font-family: "Roboto_400Regular";
        color: #fff;
    `}
    ${props => props.navs && css`
        font-size: 20px;
        margin-right: 10px;
        font-family: "PlayfairDisplay_900Black";
        color: #fff;
        margin-bottom: 5px;
    `};
`;

export const ImageWeather = styled.Image`
    width: 380px;
    margin: 5px 10px;
    height: 150px;
`;
export const Card = styled.View`
    width: 380px;
    margin: 5px 10px;
    height: 80px;
    align-items: center;
    justify-content: center;
    border-left-color: red;
    border-left-width: 1px;
    background: #fff;
`;
export const TextCard = styled.Text`
    font-size: 17px;
    padding: 10px 20px;
    font-family: "Lusitana_700Bold";
`;
