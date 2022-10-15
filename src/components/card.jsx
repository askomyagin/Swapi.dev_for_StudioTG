import styled from '@emotion/styled';
import DescriptionCard from './descriptionCard';
import { useState } from 'react';
import {
    CardContainer,
    Name,
    Description,
    DescriptionItem,
    Number,
    Label,
    Tags,
    DateBirth,
    Gender,
} from './style/cardStyle';

const Card = ({ people }) => {
    const [description, setDescription] = useState(false);
    return (
        <>
            <CardContainer onClick={() => setDescription(true)}>
                <Name>{people.name}</Name>
                <Description>
                    <DescriptionItem>
                        <Number>{people.height !== 'unknown' ? people.height : 'no'}</Number>
                        <Label>height</Label>
                    </DescriptionItem>
                    <DescriptionItem>
                        <Number>{people.mass !== 'unknown' ? people.mass : 'no'}</Number>
                        <Label>mass</Label>
                    </DescriptionItem>
                </Description>
                <Tags>
                    {people.birth_year !== 'unknown' && <DateBirth>{people.birth_year}</DateBirth>}
                    {people.gender !== 'n/a' && people.gender !== 'unknown' && (
                        <Gender gender={people.gender}>{people.gender}</Gender>
                    )}
                </Tags>
            </CardContainer>
            {description && <DescriptionCard people={people} setDescription={setDescription} />}
        </>
    );
};

export default Card;
