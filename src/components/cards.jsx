import styled from '@emotion/styled';
import { useSelector } from 'react-redux';
import { useActions } from '../hooks/useActions';
import { useCallback, useEffect, useState } from 'react';
import Card from './card';

const Cards = ({ filter, valueInput }) => {
    const { fetchPeople, fetchMorePeople } = useActions();
    const { peopleList, nextPage, loading, error } = useSelector((state) => state.people);
    const [goLoadNextPage, setLoadNextPage] = useState(false);

    useEffect(() => {
        fetchPeople(valueInput);
    }, [valueInput]);

    useEffect(() => {
        if (goLoadNextPage && nextPage !== null) {
            fetchMorePeople(nextPage).finally(() => setLoadNextPage(false));
        }
    }, [goLoadNextPage]);

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler);

        return function () {
            document.removeEventListener('scroll', scrollHandler);
        };
    }, []);

    const scrollHandler = useCallback((e) => {
        if (
            e.target.documentElement.scrollHeight -
                (e.target.documentElement.scrollTop + window.innerHeight) <
            200
        ) {
            setLoadNextPage(true);
        }
    }, []);

    if (loading) return <div>Loading</div>;
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
                                    <Card people={el} />
                                </div>
                            ))}
                    </CardsContainer>
                </>
            ) : (
                <div>нет элементов</div>
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
