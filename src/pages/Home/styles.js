import styled, { css } from 'styled-components/native';

export const Container = styled.ScrollView`
    background: #f8f9fa;
    flex: 1;
`;

export const Header = styled.SafeAreaView`
    background: #002855;
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
    padding-top: 25px;
    align-items: center;
`;
export const LeftContent = styled.View``;
export const Textleft = styled.Text`
    font-family: "Roboto_400Regular";
    color: #ffff3f;
    font-size: 15px;
`;

export const ButtonLeft = styled.TouchableOpacity`
    height: 25px;
    width: 25px;
    display: flex;
    margin-bottom: 10px;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    background: #ffff3f;
`;

export const RightContent = styled.View``;
export const Logo = styled.Text`
    font-family: "PlayfairDisplay_900Black";
    font-size: 43px;
    color: #eee;

    ${props => props.primary && css`
        padding-left: 30px;
        margin-bottom: -10%;
  `}
`;

export const HeaderHome = styled.View`
    margin-top: 3px;
`;
export const LinesHeader = styled.View`
    border-bottom-width: 1px;
    border-bottom-color: #555;
    margin-top: 2.5px;
`;
export const HeaderHomeContent = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
`;
export const HeaderTitle = styled.Text`
    font-size: 28px;
    font-family: "PlayfairDisplay_900Black";
`;
export const HeaderTime = styled.View`
    flex-direction: row;
    align-items: center;
`;
export const HeaderTimeText = styled.Text`
    font-size: 15px;
    color: #999;
    margin-left: 5px;
`;

export const Card = styled.View`
    align-items: center;
    justify-content: center;
    padding: 10px 0;
    margin: 5px 10px;
    background: #fff;
    border-top-width: 1px;
    border-top-color: #555;

    ${props => props.main_card && css`
        height: 400px;
    `}
    ${props => props.card && css`
        height: 250px;
        width: 190px;
        margin: 0 5px;
        align-items: center;
        justify-content: flex-end;
    `}
    ${props => props.serveral_subjects && css`
        height: 70px;
        margin: 5px 10px;
        align-items: center;
    `}
    ${props => props.flex && css`
        flex-direction: row;
        justify-content: center;
        align-items: flex-end;
        margin: 10px;
    `}
`;

export const CardHeadline = styled.Text`
    ${props => props.title && css`
        font-size: 27px;
        font-family: "PlayfairDisplay_700Bold";
        letter-spacing: -1px;
        margin: 10px 20px;
    `}
    ${props => props.title_2 && css`
        font-size: 17px;
        font-family: "Lusitana_700Bold";
        letter-spacing: -1px;
        max-width: 190px;
        padding: 10px;
    `}

    ${props => props.text && css`
        font-size: 17px;
        font-family: "Roboto_400Regular";
        margin: 5px 20px;
    `}

    ${props => props.serveral_subjects && css`
        font-size: 17px;
        font-family: "Lusitana_700Bold";
        letter-spacing: -1px;
        padding: 10px;
        max-width: 400px;
    `}
`

export const ImageCard = styled.Image`
    width: 100%;
    height: 200px;

    ${props => props.image_main && css`
        height: 200px;
        width: 100%;
    `}
    ${props => props.image && css`
        height: 100px;
        width: 100%;
    `}
`;