import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Cards from './cards';
import OptionSelector from './optionSelector';
import { useSetActivePage } from '../hooks/useActivePage';
import { useSelector } from 'react-redux';

const initinalEyeColors = ['Brown', 'Red', 'Blue', 'White'];

const Home = () => {
    const [filter, setFilter] = useState('ALL');
    const [dropDown, setDropDown] = useState(false);
    const [eyeColors, setEyeColors] = useState(initinalEyeColors);
    const [valueInput, setValueInput] = useState('');
    const [language, setLanguage] = useState('En');
    const setActivePage = useSetActivePage();
    const { totalCount } = useSelector((state) => state.people);

    useEffect(() => {
        setActivePage();
    }, [setActivePage]);

    function updateInputText(e) {
        setValueInput(e.target.value);
    }

    const debounce = (fn, ms) => {
        let timeout;

        return function () {
            const fnCall = () => {
                fn.apply(this, arguments);
            };

            clearTimeout(timeout);
            timeout = setTimeout(fnCall, ms);
        };
    };

    const onChange = debounce(updateInputText, 500);

    const ChangeLanguage = () => {
        if (language === 'En') setLanguage('Wookiee');
        else setLanguage('En');
    };

    return (
        <HomeContainer>
            <LanguageContainer>
                <Language onClick={ChangeLanguage}>{`Language: ${language}`}</Language>
            </LanguageContainer>
            <HeaderContainer>
                <Title>{`${totalCount} Peoples for you to choose your favorite`}</Title>
                <Input placeholder="find..." onChange={onChange} />
                <OptionSelector
                    eyeColors={eyeColors}
                    filter={filter}
                    dropDown={dropDown}
                    setFilter={setFilter}
                    setDropDown={setDropDown}
                    setEyeColors={setEyeColors}
                />
            </HeaderContainer>
            <Cards filter={filter} valueInput={valueInput} language={language} />
        </HomeContainer>
    );
};

export default Home;

const HomeContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    margin-top: 36px;
    margin-bottom: 47px;
    @media screen and (max-width: 650px) {
        width: 80%;
    }
`;

const Title = styled.div`
    font-family: 'Karla';
    font-style: normal;
    text-align: center;
    font-weight: 400;
    font-size: 35px;
    line-height: 41px;
`;

const Input = styled.input`
    margin-top: 36px;
    height: 50px;
    background: #f2f2f2;
    box-shadow: 4px 4px 16px rgba(1, 28, 64, 0.2);
    border: 1px solid #f2f2f2;
    border-radius: 40px;
    padding-left: 20px;
    padding-right: 20px;
`;

const LanguageContainer = styled.div`
    width: 80%;
    margin-top: 17px;
    display: flex;
    justify-content: end;
`;

const Language = styled.button`
    background-color: white;
    border: none;
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #4b4b4b;
    cursor: pointer;
`;
