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
import DescriptionCardWookie from './descriptionCardWookie';

const Card = ({ people, language }) => {
    const [description, setDescription] = useState(false);
    const { fetchLanguagePeople } = useActions();
    const { peopleWookiee } = useSelector((state) => state.language);

    useEffect(() => {
        if (language === 'Wookiee') fetchLanguagePeople(people.url);
    }, [language, fetchLanguagePeople]);

    const genderFormatWookiee = (gender) => {
        if (gender === 'scraanwo') return 'male';
        if (gender === 'wwwoscraanwo') return 'female';
        if (gender === 'acworcscraakacrcoowaahaowo') return 'hermaphrodite';
    };

    const FormatEn = ({ people }) => {
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
                        {people.birth_year !== 'unknown' && (
                            <DateBirth>{people.birth_year}</DateBirth>
                        )}
                        {people.gender !== 'n/a' && people.gender !== 'unknown' && (
                            <Gender gender={people.gender}>{people.gender}</Gender>
                        )}
                    </Tags>
                </CardContainer>
                {description && <DescriptionCard people={people} setDescription={setDescription} />}
            </>
        );
    };

    const FormatWookie = ({ indexElement }) => {
        if (indexElement === -1)
            return (
                <CardContainer>
                    <Error>
                        <span class="material-icons">error_outline</span> Error loading data
                    </Error>
                </CardContainer>
            );
        return (
            <>
                <CardContainer onClick={() => setDescription(true)}>
                    <Name>{peopleWookiee[indexElement].name}</Name>
                    <Description>
                        <DescriptionItem>
                            <Number>{peopleWookiee[indexElement].height}</Number>
                            <Label>{peopleWookiee[indexElement].designation_height}</Label>
                        </DescriptionItem>
                        <DescriptionItem>
                            <Number>{peopleWookiee[indexElement].mass}</Number>
                            <Label>{peopleWookiee[indexElement].designation_mass}</Label>
                        </DescriptionItem>
                    </Description>
                    <Tags>
                        {peopleWookiee[indexElement].birth_year !== 'huwhorwhooohwh' && (
                            <DateBirth>{peopleWookiee[indexElement].birth_year}</DateBirth>
                        )}
                        {peopleWookiee[indexElement].gender !== 'wh/ra' && (
                            <Gender
                                gender={genderFormatWookiee(peopleWookiee[indexElement].gender)}
                            >
                                {peopleWookiee[indexElement].gender}
                            </Gender>
                        )}
                    </Tags>
                </CardContainer>
                {description && (
                    <DescriptionCardWookie
                        people={peopleWookiee[indexElement]}
                        setDescription={setDescription}
                    />
                )}
            </>
        );
    };

    const indexElement = peopleWookiee.findIndex((el) => el.url === people.url);

    //return <FormatEn people={people} />;

    return language === 'Wookiee' ? (
        <FormatWookie indexElement={indexElement} />
    ) : (
        <FormatEn people={people} />
    );
};

export default Card;
