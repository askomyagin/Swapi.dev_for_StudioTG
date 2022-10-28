import styled from '@emotion/styled';
import Male from '../image/Male.png';
import Female from '../image/Female.png';
import Robo from '../image/Robo.png';
import { useEffect, useRef } from 'react';
import { Description, DescriptionItem, Number, Label } from './style/cardStyle';

const UpperCase = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

const TransformLabel = (string) => {
    return UpperCase(string.split('_').join(' '));
};

const DescriptionCard = ({
    people,
    setDescription,
    BirthDayTag,
    GenderTag,
    LabelHeight,
    LabelMass,
}) => {
    const ref = useRef(null);

    const getImage = (gender) => {
        if (gender === 'male' || gender === 'scraanwo') return Male;
        if (gender === 'female' || gender === 'wwwoscraanwo') return Female;
        return Robo;
    };

    useEffect(() => {
        const chekClickOutside = (e) => {
            const target = e.target;
            if (ref.current && !ref.current.contains(target)) setDescription(false);
        };

        document.addEventListener('mousedown', chekClickOutside);

        return () => {
            document.removeEventListener('mousedown', chekClickOutside);
        };
    }, [setDescription]);

    const EyeColor =
        people.designation_eye_color !== undefined
            ? `${TransformLabel(people.designation_eye_color)}:`
            : 'Eye color:';

    const HairColor =
        people.designation_hair_color !== undefined
            ? `${TransformLabel(people.designation_hair_color)}:`
            : 'Hair color:';

    const SkinColor =
        people.designation_skin_color !== undefined
            ? `${TransformLabel(people.designation_skin_color)}:`
            : 'Skin color:';

    return (
        <MainContainer data-testid="descriptionCard">
            <ButtonExit>
                <span
                    className="material-icons"
                    data-testid="buttonExit"
                    onClick={() => setDescription(false)}
                    style={{ fontSize: '38px', cursor: 'pointer' }}
                >
                    close
                </span>
            </ButtonExit>
            <Container ref={ref}>
                <ImageContainer>
                    <Img src={getImage(people.gender)} />
                    <Tags>
                        {BirthDayTag}
                        {GenderTag}
                    </Tags>
                </ImageContainer>
                <DescriptionContainer>
                    <PeopleName data-testid="descriptionPeopleName">{people.name}</PeopleName>

                    <DescriptionList>
                        <DescriptionListItem>
                            <ListLabel>{EyeColor}</ListLabel>
                            <ListItem>{people.eye_color}</ListItem>
                        </DescriptionListItem>
                        <DescriptionListItem>
                            <ListLabel>{HairColor}</ListLabel>
                            <ListItem>{people.hair_color}</ListItem>
                        </DescriptionListItem>
                        <DescriptionListItem>
                            <ListLabel>{SkinColor}</ListLabel>
                            <ListItem>{people.skin_color}</ListItem>
                        </DescriptionListItem>
                    </DescriptionList>

                    <Description description>
                        <DescriptionItem description>
                            <Number description>
                                {people.height !== 'unknown' ? people.height : 'no'}
                            </Number>
                            <Label description>{LabelHeight}</Label>
                        </DescriptionItem>
                        <DescriptionItem>
                            <Number description>
                                {people.mass !== 'unknown' ? people.mass : 'no'}
                            </Number>
                            <Label description>{LabelMass}</Label>
                        </DescriptionItem>
                    </Description>
                </DescriptionContainer>
            </Container>
        </MainContainer>
    );
};

export default DescriptionCard;

const MainContainer = styled.div`
    position: fixed;
    z-index: 200;
    width: 100vw;
    min-width: 100%;
    min-height: 100%;
    left: 0;
    top: 0;
    background-color: rgba(33, 33, 33, 0.5);
    background-attachment: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Container = styled.div`
    width: 50%;
    min-width: 650px;
    height: 370px;
    background: linear-gradient(180deg, #17002f 42.19%, #1f2a63 100%);
    border-radius: 16px;
    display: flex;
    align-items: center;
    @media screen and (max-width: 660px) {
        flex-direction: column;
        height: 100%;
        min-width: 90%;
    }
`;

const ButtonExit = styled.div`
    min-width: 620px;
    text-align: end;
    @media screen and (max-width: 660px) {
        min-width: 90%;
    }
`;

const ImageContainer = styled.div`
    width: 45%;
    height: 100%;
    background: #1f2a63;
    border-radius: 16px 0px 0px 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 660px) {
        width: 100%;
        margin-bottom: 15px;
        border-radius: 16px 16px 0px 0px;
    }
`;
const Img = styled.img`
    width: 280px;
    height: 280px;
    @media screen and (max-width: 660px) {
        margin-top: 15px;
    }
`;

const Tags = styled.div`
    margin-top: 20px;
    width: 90%;
    display: flex;
    justify-content: end;
    @media screen and (max-width: 660px) {
        width: 50%;
        margin-bottom: 15px;
    }
`;

const DescriptionContainer = styled.div`
    width: 55%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`;

const PeopleName = styled.div`
    font-family: 'Karla';
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 42px;
    color: #fdfdfd;
    text-align: center;
`;

const DescriptionList = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const DescriptionListItem = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
    align-items: center;
`;

const ListLabel = styled.div`
    font-family: 'Karla';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 19px;
    color: white;
    width: 50%;
    text-align: end;
`;
const ListItem = styled.div`
    font-family: 'Karla';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: white;
    width: 40%;
    text-align: left;
`;
