import styled from '@emotion/styled';

export const CardContainer = styled.button`
    border: none;
    width: 352px;
    height: 160px;
    background: #f0f0f0;
    border-radius: 8px;
    margin-bottom: 45px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    :hover {
        box-shadow: 4px 4px 8px rgba(1, 28, 64, 0.2);
    }
`;

export const Name = styled.div`
    font-family: 'Karla';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    color: #212121;
    margin-top: 5px;
    margin-left: 25px;
    text-shadow: 4px 4px 4px rgba(33, 33, 33, 0.1);
`;

export const Description = styled.div`
    margin-left: ${(props) => (props.description ? '0px' : '12px')};
    margin-top: ${(props) => (props.description ? '0px' : '10px')};
    display: flex;
`;

export const DescriptionItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: ${(props) => (props.description ? '0px' : '13px')};
`;

export const Number = styled.div`
    font-family: 'Karla';
    font-style: normal;
    font-weight: 400;
    font-size: ${(props) => (props.description ? '25px' : '15px')};
    color: ${(props) => (props.description ? 'white' : '#212121')};
    padding: 10px;
    border: ${(props) => (props.description ? '3px solid white' : '3px solid #212121')};
    border-radius: 50%;
    width: ${(props) => (props.description ? '38px' : '20px')};
    height: ${(props) => (props.description ? '38px' : '20px')};
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Label = styled.label`
    font-family: 'Karla';
    font-style: normal;
    font-weight: 400;
    font-size: ${(props) => (props.description ? '16px' : '12px')};
    line-height: ${(props) => (props.description ? '18px' : '14px')};
    color: ${(props) => (props.description ? 'white' : '#4b4b4b')};
    margin-top: 6px;
`;

export const DateBirth = styled.div`
    display: flex;
    justify-content: center;
    padding-left: 10px;
    padding-right: 10px;
    height: 16px;
    box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.18);
    border-radius: 11px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #212121;
    background: #07d6f2;
`;

export const Gender = styled.div`
    display: flex;
    justify-content: center;
    padding-left: 10px;
    padding-right: 10px;
    margin-left: 10px;
    height: 16px;
    box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.18);
    border-radius: 11px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #212121;
    background-color: ${(props) =>
        props.gender === 'male'
            ? '#73D677'
            : props.gender === 'hermaphrodite'
            ? '#F5DB13'
            : '#C956FF'};
`;

export const Tags = styled.div`
    margin-top: 9px;
    margin-left: 25px;
    display: flex;
    align-items: center;
`;

export const Error = styled.div`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
`;
