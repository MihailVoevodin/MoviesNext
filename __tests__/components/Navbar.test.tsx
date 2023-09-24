import Navbar from 'components/Navbar/Navbar';
import {useRouter} from 'next/router';
import {Provider} from 'react-redux';
import filmsSlice from 'store/films/filmsSlice';
import filtersSlice from 'store/filters/filtersSlice';
import personsSlice from 'store/persons/personsSlice';
import {configureStore} from '@reduxjs/toolkit';
import {fireEvent, render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

jest.mock('next/router', () => ({
    useRouter() {
        return {
            asPath: '/',
        };
    },
}));

jest.spyOn(require('next/router'), 'useRouter');

describe('Navbar display', () => {
    const store = configureStore({
        reducer: {
            films: filmsSlice,
            persons: personsSlice,
            filters: filtersSlice,
        },
    });

    const navbar = () =>
        render(
            <Provider store={store}>
                <Navbar />
            </Provider>
        );

    beforeEach(() => {
        navbar();
    });

    (useRouter as jest.Mock).mockImplementation(() => ({
        useRouter() {
            return {
                asPath: '/',
            };
        },
    }));

    test('correctly render', () => {
        const list = screen.getByRole('list');
        const nav = screen.getByRole('navigation');

        expect(list).toBeInTheDocument();
        expect(nav).toBeInTheDocument();
    });

    test('input typing', () => {
        const input = screen.getByTestId('searchInput');

        expect(input).toBeInTheDocument();
        userEvent.type(input, 'Матрица');
        expect(input).toHaveDisplayValue('Матрица');

        const closeIcon = screen.getByTestId('closeIcon');

        expect(closeIcon).toBeInTheDocument();
        fireEvent.click(closeIcon);
        expect(input).toHaveDisplayValue('');
    });

    test('should match snapshot', () => {
        expect(navbar).toMatchSnapshot();
    });
});
