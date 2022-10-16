import styled from '@emotion/styled';
import Male from '../image/Male.png';
import Female from '../image/Female.png';
import Robo from '../image/Robo.png';
import { useEffect, useRef } from 'react';
import {
    DateBirth,
    Gender,
    Description,
    DescriptionItem,
    Number,
    Label,
    MainContainer,
    Container,
    ImageContainer,
    Img,
    TagsDescription,
    DescriptionContainer,
    PeopleName,
    DescriptionList,
} from './style/cardStyle';

const DescriptionCardWookie = ({ people, setDescription }) => {
    const ref = useRef(null);
    const image = people.gender === 'male' ? Male : people.gender === 'female' ? Female : Robo;

    useEffect(() => {
        const chekClickOutside = (e) => {
            const target = e.target;
            if (ref.current && !ref.current.contains(target)) setDescription(false);
        };

        document.addEventListener('mousedown', chekClickOutside);

        return () => {
            document.removeEventListener('mousedown', chekClickOutside);
        };
    }, []);

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
                    <TagsDescription>
                        {people.birth_year !== 'unknown' && (
                            <DateBirth>{people.birth_year}</DateBirth>
                        )}
                        {people.gender !== 'n/a' && people.gender !== 'unknown' && (
                            <Gender gender={people.gender}>{people.gender}</Gender>
                        )}
                    </TagsDescription>
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

export default DescriptionCardWookie;
