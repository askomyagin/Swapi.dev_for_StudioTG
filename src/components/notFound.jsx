import styled from '@emotion/styled';
import Error404 from '../image/Error404.png';
import Planet from '../image/Planet.png';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <ErrorContainer>
            <ImageContainer>
                <ImgError src={Error404} alt={'Error404'} />
                <ImageContainerSecond>
                    <ImgPlaner src={Planet} alt={'Planet'} />
                </ImageContainerSecond>
            </ImageContainer>
            <ButtonContainer>
                <Link to={'/'} style={{ textDecoration: 'none' }}>
                    <Button>
                        <TextButton>Return</TextButton>
                    </Button>
                </Link>
            </ButtonContainer>
        </ErrorContainer>
    );
};

export default NotFound;

const ErrorContainer = styled.div`
    background-color: #17002f;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

const ImgError = styled.img`
    max-width: 80%;
    height: auto;
    width: auto;
`;

const ImgPlaner = styled.img`
    max-width: 100%;
    max-height: 100%;
    height: auto;
    width: auto;
`;

const ImageContainerSecond = styled.div`
    position: absolute;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: 90%;
    max-width: 50%;
`;

const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-top: 30px;
    width: 70%;
`;

const ButtonContainer = styled.div`
    max-width: 15%;
    max-height: 10%;
    width: 15%;
    height: 10%;
`;

const Button = styled.button`
    width: 100%;
    height: 100%;
    margin: auto;
    background: #73d677;
    box-shadow: inset 0px -9px 0px rgba(0, 0, 0, 0.18);
    border-radius: 11px;
    :hover {
        border: 1px solid #73d677;
    }
    :active {
        background: #73d676b1;
        border: 1px solid #73d676b1;
    }
`;

const TextButton = styled.div`
    font-family: 'Karla';
    font-style: normal;
    font-weight: 700;
    font-size: 23px;
    line-height: 27px;
    color: #212121;
`;
