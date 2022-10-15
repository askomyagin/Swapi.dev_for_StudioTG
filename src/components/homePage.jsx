import styled from '@emotion/styled';
import Banner from '../image/banner.png';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <HomeContainer>
            <DescriptionContainer>
                <H1>Find all your favorite character</H1>
                <H2>You can find out all the information about your favorite characters</H2>
                <Link to={'/home'}>
                    <Button>
                        <ButtonText>See more...</ButtonText>
                    </Button>
                </Link>
            </DescriptionContainer>
            <BannerContainer>
                <Link to={'/home'}>
                    <Img src={Banner} />
                </Link>
            </BannerContainer>
        </HomeContainer>
    );
};

export default HomePage;

const HomeContainer = styled.div`
    width: 100%;
    min-width: 550px;
    min-height: calc(100vh - 94px);
    background: linear-gradient(#1f2a63, #17002f);
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
`;

const Img = styled.img`
    height: 650px;
`;

const BannerContainer = styled.div``;

const DescriptionContainer = styled.div`
    width: 516px;
    height: 557px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const H1 = styled.div`
    font-family: 'Karla';
    font-style: normal;
    font-weight: 700;
    font-size: 72px;
    line-height: 84px;
    color: #fff;
`;

const H2 = styled.div`
    font-family: 'Karla';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 37px;
    color: #fff;
`;

const Button = styled.button`
    width: 231px;
    height: 66px;
    background: #ffc107;
    box-shadow: inset 0px -9px 0px rgba(0, 0, 0, 0.18);
    border-radius: 11px;
    cursor: pointer;
`;
const ButtonText = styled.span`
    font-family: 'Karla';
    font-style: normal;
    font-weight: 700;
    font-size: 23px;
    line-height: 27px;
    color: #212121;
`;
