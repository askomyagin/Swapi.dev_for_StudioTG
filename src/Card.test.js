import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Card from './components/card';
import { rootReducer } from './service/reducers';

const renderWithRedux = (
    component,
    { InitialState, store = createStore(rootReducer, InitialState) } = {}
) => {
    return {
        ...render(<Provider store={store}>{component}</Provider>),
        store,
    };
};

describe('Card', () => {
    const peopleEn = {
        name: 'Luke Skywalker',
        height: 'unknown',
        mass: '77',
        hair_color: 'blond',
        skin_color: 'fair',
        eye_color: 'blue',
        birth_year: 'unknown',
        gender: 'unknown',
        url: 'https://swapi.dev/api/people/1/',
    };

    it('renders Card component', () => {
        const { getByTestId } = renderWithRedux(<Card people={peopleEn} />, {});
        screen.debug();
        //check people name
        expect(getByTestId('namePeople')).toHaveTextContent(peopleEn.name);
        //check birthday tag
        peopleEn.birth_year !== 'unknown'
            ? expect(screen.getByTestId('birthDayTag')).toHaveTextContent(peopleEn.birth_year)
            : expect(screen.queryByTestId('birthDayTag')).not.toBeInTheDocument();
        //check gender tag
        peopleEn.gender !== 'unknown'
            ? expect(screen.getByTestId('genderTag')).toHaveTextContent(peopleEn.gender)
            : expect(screen.queryByTestId('genderTag')).not.toBeInTheDocument();

        //check label description
        expect(screen.getByText(/height/i)).toBeInTheDocument();
        expect(screen.getByText(/mass/i)).toBeInTheDocument();

        //check items description
        const NumberItems = screen.getAllByTestId('number');
        peopleEn.height !== 'unknown'
            ? expect(NumberItems[0]).toHaveTextContent(peopleEn.height)
            : expect(NumberItems[0]).toHaveTextContent('no');
        peopleEn.mass !== 'unknown'
            ? expect(NumberItems[1]).toHaveTextContent(peopleEn.mass)
            : expect(NumberItems[1]).toHaveTextContent('no');

        //checking whether it is possible to click on the card
        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('Click Card', async () => {
        renderWithRedux(<Card people={peopleEn} />, {});

        //open card
        expect(screen.getByRole('button')).toBeInTheDocument();
        fireEvent.click(screen.getByRole('button'));
        //checking whether the card has been opened
        expect(screen.queryByTestId('descriptionCard')).toBeInTheDocument();
        //close card
        fireEvent.click(screen.getByTestId('buttonExit'));
        //checking that the card has been closed
        expect(screen.queryByTestId('descriptionCard')).not.toBeInTheDocument();
        //finish test
    });
});
