import styled from '@emotion/styled';
import { useEffect, useCallback, useRef } from 'react';

const OptionSelector = ({ eyeColors, filter, setFilter, setDropDown, setEyeColors, dropDown }) => {
    const ref = useRef(null);

    useEffect(() => {
        const chekClickOutside = (e) => {
            const target = e.target;
            if (ref.current && !ref.current.contains(target) && dropDown) setDropDown(false);
        };

        document.addEventListener('mousedown', chekClickOutside);

        return () => {
            document.removeEventListener('mousedown', chekClickOutside);
        };
    }, [dropDown, setDropDown]);

    const toggleDropDown = () => {
        setDropDown(!dropDown);
    };

    const updateFilter = useCallback(
        (option) => {
            const idx = eyeColors.findIndex((el) => el === option);
            filter === 'ALL'
                ? setEyeColors([filter, ...eyeColors.slice(0, idx), ...eyeColors.slice(idx + 1)])
                : setEyeColors([...eyeColors.slice(0, idx), ...eyeColors.slice(idx + 1), filter]);
            setFilter(option);
            setDropDown(false);
        },
        [eyeColors, filter, setDropDown, setEyeColors, setFilter]
    );

    return (
        <FilterContainer>
            <Filter>Color eye:</Filter>
            <RefContainer ref={ref}>
                <FilterItem onClick={toggleDropDown}>
                    <FilterLabel>{filter}</FilterLabel>
                    <span className="material-icons">expand_more</span>
                </FilterItem>
                {dropDown && (
                    <OptionContainer>
                        {eyeColors.map((el) => (
                            <ButtonSelect key={el} onClick={() => updateFilter(el)}>
                                <ButtonText>{el}</ButtonText>
                            </ButtonSelect>
                        ))}
                    </OptionContainer>
                )}
            </RefContainer>
        </FilterContainer>
    );
};

export default OptionSelector;

const FilterContainer = styled.div`
    display: flex;
    margin-top: 36px;
    position: relative;
`;

const OptionContainer = styled.div`
    background: #f2f2f2;
    box-shadow: 4px 4px 8px rgba(1, 28, 64, 0.2);
    border-radius: 8px;
    width: 135px;
    position: absolute;
    top: 31px;
    left: 95px;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ButtonSelect = styled.button`
    border: none;
    cursor: pointer;
    padding: 5px;
    width: 95%;
`;
const ButtonText = styled.div`
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #000000;
    :hover {
        font-weight: 700;
    }
`;

const RefContainer = styled.div``;

const Filter = styled.div`
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #212121;
    margin-left: 23px;
`;

const FilterItem = styled.button`
    width: 135px;
    height: 23px;
    background: #f2f2f2;
    box-shadow: 2px 2px 2px rgba(33, 33, 33, 0.1);
    border-radius: 4px;
    margin-left: 7px;
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    display: flex;
    align-items: center;
    border: none;
    cursor: pointer;
`;
const FilterLabel = styled.div`
    width: 95%;
    text-align: center;
`;
