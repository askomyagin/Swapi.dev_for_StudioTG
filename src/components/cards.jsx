import styled from '@emotion/styled';
import { useSelector } from 'react-redux';
import { useActions } from '../hooks/useActions';
import { useCallback, useEffect, useState } from 'react';
import Card from './card';
import { SpinnerRoundFilled } from 'spinners-react';

const Cards = ({ filter, valueInput, language }) => {
    const { fetchPeople, fetchMorePeople } = useActions();
    const { peopleList, nextPage, loading, error, loadingMore } = useSelector(
        (state) => state.people
    );
    const [goLoadNextPage, setLoadNextPage] = useState(false);

    useEffect(() => {
        fetchPeople(valueInput);
    }, [valueInput, fetchPeople]);

    useEffect(() => {
        if (goLoadNextPage && nextPage !== null) {
            fetchMorePeople(nextPage).finally(() => setLoadNextPage(false));
        }
    }, [goLoadNextPage, nextPage, fetchMorePeople]);

    const scrollHandler = useCallback(
        (e) => {
            if (
                (e.target.documentElement.scrollHeight -
                    (e.target.documentElement.scrollTop + window.innerHeight) <
                    500 ||
                    e.target.documentElement.Height < window.innerHeight) &&
                nextPage
            ) {
                setLoadNextPage(true);
            }
        },
        [nextPage]
    );

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler);

        return function () {
            document.removeEventListener('scroll', scrollHandler);
        };
    }, [scrollHandler]);

    if (loading)
        return (
            <CardsContainer>
                <SpinnerRoundFilled color={'#1F2A63'} size={80} />
            </CardsContainer>
        );

    if (error) return <div>error</div>;

    return (
        <>
            {peopleList.length > 0 ? (
                <>
                    <CardsContainer>
                        {peopleList
                            .filter((el) =>
                                filter === 'ALL' ? el : el.eye_color === filter.toLowerCase()
                            )
                            .map((el, idx) => (
                                <div key={idx}>
                                    <Card people={el} language={language} />
                                </div>
                            ))}
                    </CardsContainer>
                    {loadingMore && (
                        <Spinner>
                            <SpinnerRoundFilled color={'#1F2A63'} />
                        </Spinner>
                    )}
                </>
            ) : (
                <CardsContainer>
                    <Text>Нет элементов</Text>
                </CardsContainer>
            )}
        </>
    );
};

export default Cards;

const CardsContainer = styled.div`
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

const Spinner = styled.div`
    margin-bottom: 50px;
`;

const Text = styled.div`
    font-family: 'Karla';
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 29px;
    color: #000000;
`;
