import styled from '@emotion/styled';
import Error404 from '../image/Error404.png';
import Planet from '../image/Planet.png';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <ErrorContainer>
            <ImageContainer>
                <ImgError src={Error404} />
                <ImgPlaner src={Planet} />
            </ImageContainer>
            <Link to={'/'} style={{ textDecoration: 'none' }}>
                <Button>
                    <TextButton>Return</TextButton>
                </Button>
            </Link>
        </ErrorContainer>
    );
};

export default NotFound;

const ErrorContainer = styled.div`
    background-color: #17002f;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

const ImgError = styled.img``;

const ImgPlaner = styled.img`
    position: absolute;
    z-index: 100;
    top: -100px;
    left: 280px;
`;

const ImageContainer = styled.div`
    position: relative;
    margin-top: 30px;
`;

const Button = styled.button`
    width: 231px;
    height: 66px;
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
