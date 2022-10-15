import styled from '@emotion/styled';
import Logo from '../image/Logo.png';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
    const { activePage } = useSelector((state) => state.page);
    return (
        <HeaderContainer>
            <LogoContainer>
                <Img src={Logo} alt={'StarWars'} />
            </LogoContainer>
            <NavBar>
                <Link to={'/home'} style={{ textDecoration: 'none' }}>
                    <NavBarItem>
                        <ItemText>Home</ItemText>
                        {activePage === '/home' && <Active />}
                    </NavBarItem>
                </Link>

                <NavBarItem>
                    <ItemText>Characters</ItemText>
                    {activePage === '/characters' && <Active />}
                </NavBarItem>
            </NavBar>
        </HeaderContainer>
    );
};

export default Header;

const HeaderContainer = styled.div`
    background-color: #1f2a63;
    height: 93px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

const LogoContainer = styled.div`
    height: 80px;
    width: 150px;
`;

const NavBar = styled.div`
    display: flex;
    width: 300px;
    justify-content: space-between;
`;
const NavBarItem = styled.div``;

const ItemText = styled.div`
    color: #fff;
    font-family: 'Karla';
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 29px;
    cursor: pointer;
    :hover {
        font-weight: 600;
    }
`;

const Active = styled.div`
    border-top: 3px solid #cfdab0; ;
`;

const Img = styled.img``;
