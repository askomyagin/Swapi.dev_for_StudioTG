import styled from '@emotion/styled';
import Male from '../image/Male.png';
import Female from '../image/Female.png';
import Robo from '../image/Robo.png';
import { useEffect, useRef } from 'react';
import { DateBirth, Gender, Description, DescriptionItem, Number, Label } from './style/cardStyle';
import { useSelector } from 'react-redux';
import { useActions } from '../hooks/useActions';

const DescriptionCard = ({ people, setDescription }) => {
    const { fetchImage } = useActions();
    //const { image, loading, error } = useSelector((state) => state.image);
    const ref = useRef(null);
    const image = people.gender === 'male' ? Male : people.gender === 'female' ? Female : Robo;

    const id = people.url.split('/')[5];

    useEffect(() => {
        fetchImage(id);

        const chekClickOutside = (e) => {
            const target = e.target;
            if (ref.current && !ref.current.contains(target)) setDescription(false);
        };

        document.addEventListener('mousedown', chekClickOutside);

        return () => {
            document.removeEventListener('mousedown', chekClickOutside);
        };
    }, []);
    console.log(image);
    console.log(people);
    return (
        <MainContainer>
            <ButtonExit>
                <span
                    className="material-icons"
                    onClick={() => setDescription(false)}
                    style={{ fontSize: '38px', cursor: 'pointer' }}
                >
                    close
                </span>
            </ButtonExit>
            <Container ref={ref}>
                <ImageContainer>
                    <Img src={image} />
                    <Tags>
                        {people.birth_year !== 'unknown' && (
                            <DateBirth>{people.birth_year}</DateBirth>
                        )}
                        {people.gender !== 'n/a' && people.gender !== 'unknown' && (
                            <Gender gender={people.gender}>{people.gender}</Gender>
                        )}
                    </Tags>
                </ImageContainer>
                <DescriptionContainer>
                    <PeopleName>{people.name}</PeopleName>

                    <DescriptionList>
                        <DescriptionListItem>
                            <ListLabel>Eye color:</ListLabel>
                            <ListItem>
                                {people.eye_color !== 'n/a' ? people.eye_color : 'no info'}
                            </ListItem>
                        </DescriptionListItem>
                        <DescriptionListItem>
                            <ListLabel>Hair color:</ListLabel>
                            <ListItem>
                                {people.hair_color !== 'n/a' ? people.hair_color : 'no info'}
                            </ListItem>
                        </DescriptionListItem>
                        <DescriptionListItem>
                            <ListLabel>Skin color:</ListLabel>
                            <ListItem>
                                {people.skin_color !== 'n/a' ? people.skin_color : 'no info'}
                            </ListItem>
                        </DescriptionListItem>
                    </DescriptionList>

                    <Description description>
                        <DescriptionItem description>
                            <Number description>
                                {people.height !== 'unknown' ? people.height : 'no'}
                            </Number>
                            <Label description>height</Label>
                        </DescriptionItem>
                        <DescriptionItem>
                            <Number description>
                                {people.mass !== 'unknown' ? people.mass : 'no'}
                            </Number>
                            <Label description>mass</Label>
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
    min-width: 500px;
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
    min-width: 500px;
    height: 370px;
    background: linear-gradient(180deg, #17002f 42.19%, #1f2a63 100%);
    border-radius: 16px;
    display: flex;
    align-items: center;
`;

const ButtonExit = styled.div`
    width: 50%;
    min-width: 500px;
    text-align: end;
`;

const ImageContainer = styled.div`
    min-width: 280px;
    width: 45%;
    height: 100%;
    background: #1f2a63;
    border-radius: 16px 0px 0px 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const Img = styled.img`
    width: 280px;
    height: 280px;
`;

const Tags = styled.div`
    margin-top: 20px;
    width: 90%;
    display: flex;
    justify-content: end;
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
`;

const DescriptionList = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const DescriptionListItem = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
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
