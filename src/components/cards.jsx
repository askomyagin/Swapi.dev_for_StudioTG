import styled from '@emotion/styled';
import { useSelector } from 'react-redux';
import { useActions } from '../hooks/useActions';
import { useRef, useEffect, useState } from 'react';
import Card from './card';
import { SpinnerRoundFilled } from 'spinners-react';

const Cards = ({ filter, valueInput, language }) => {
    const { fetchPeople, fetchMorePeople } = useActions();
    const { peopleList, nextPage, loading, error, loadingMore } = useSelector(
        (state) => state.people
    );
    const [goLoadNextPage, setLoadNextPage] = useState(false);
    const [lastRowInView, setLastRowInView] = useState(false);
    const lastRowRef = useRef(null);

    useEffect(() => {
        fetchPeople(valueInput);
    }, [valueInput, fetchPeople]);

    useEffect(() => {
        if (goLoadNextPage && nextPage !== null) {
            fetchMorePeople(nextPage).finally(() => setLoadNextPage(false));
        }
    }, [goLoadNextPage, nextPage, fetchMorePeople]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => setLastRowInView(entries[0].isIntersecting),
            {
                threshold: 0.1,
            }
        );
        if (lastRowRef.current) {
            observer.observe(lastRowRef.current);
        }
        return () => {
            observer.disconnect();
        };
    });

    useEffect(() => {
        if (lastRowInView && !loadingMore) {
            setLoadNextPage(true);
        }
    }, [setLoadNextPage, lastRowInView]);

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
                    {goLoadNextPage && (
                        <Spinner>
                            <SpinnerRoundFilled color={'#1F2A63'} />
                        </Spinner>
                    )}
                    {nextPage !== null && <div ref={lastRowRef} />}
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
