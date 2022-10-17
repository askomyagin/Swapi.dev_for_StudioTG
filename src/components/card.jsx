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
    Error,
} from './style/cardStyle';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useActions } from '../hooks/useActions';
import { SpinnerRoundFilled } from 'spinners-react';

const Card = ({ people, languagePage }) => {
    const [description, setDescription] = useState(false);
    const { fetchLanguagePeople } = useActions();
    const { peopleWookiee, error } = useSelector((state) => state.language);

    useEffect(() => {
        if (languagePage === 'Wookiee') fetchLanguagePeople(people.url);
    }, [languagePage, fetchLanguagePeople, people.url]);

    const genderFormatGender = (gender) => {
        if (gender === 'scraanwo') return 'male';
        if (gender === 'wwwoscraanwo') return 'female';
        if (gender === 'acworcscraakacrcoowaahaowo') return 'hermaphrodite';
        return gender;
    };

    const CardItem = ({ people }) => {
        const BirthDayTag = people.birth_year !== 'unknown' &&
            people.birth_year !== 'huwhorwhooohwh' && (
                <DateBirth data-testid="birthDayTag">{people.birth_year}</DateBirth>
            );

        const GenderTag = people.gender !== 'n/a' &&
            people.gender !== 'unknown' &&
            people.gender !== 'wh/ra' && (
                <Gender gender={genderFormatGender(people.gender)} data-testid="genderTag">
                    {people.gender}
                </Gender>
            );

        const LabelHeight =
            people.designation_height !== undefined ? people.designation_height : 'height';

        const LabelMass = people.designation_mass !== undefined ? people.designation_mass : 'mass';

        return (
            <>
                <CardContainer onClick={() => setDescription(true)}>
                    <Name data-testid="namePeople">{people.name}</Name>
                    <Description data-testid="descriptionContainer">
                        <DescriptionItem>
                            <Number data-testid="number">
                                {people.height !== 'unknown' ? people.height : 'no'}
                            </Number>
                            <Label>{LabelHeight}</Label>
                        </DescriptionItem>
                        <DescriptionItem>
                            <Number data-testid="number">
                                {people.mass !== 'unknown' ? people.mass : 'no'}
                            </Number>
                            <Label>{LabelMass}</Label>
                        </DescriptionItem>
                    </Description>
                    <Tags>
                        {BirthDayTag}
                        {GenderTag}
                    </Tags>
                </CardContainer>
                {description && (
                    <DescriptionCard
                        people={people}
                        setDescription={setDescription}
                        BirthDayTag={BirthDayTag}
                        GenderTag={GenderTag}
                        LabelHeight={LabelHeight}
                        LabelMass={LabelMass}
                    />
                )}
            </>
        );
    };

    const CardError = (
        <CardContainer>
            <Error>
                <span className="material-icons">error_outline</span> Error loading data
            </Error>
        </CardContainer>
    );

    const indexElement = peopleWookiee.findIndex((el) => el.url === people.url);

    if (languagePage === 'Wookiee') {
        if (error.findIndex((el) => el === people.url) !== -1) return CardError;

        return indexElement !== -1 ? (
            <CardItem people={peopleWookiee[indexElement]} />
        ) : (
            <CardContainer>
                <SpinnerRoundFilled color={'#1F2A63'} />
            </CardContainer>
        );
    } else {
        return <CardItem people={people} />;
    }
};

export default Card;
