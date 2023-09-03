import Navbar from 'components/Navbar/Navbar';
import {useRouter} from 'next/router';
import {Provider} from 'react-redux';
import '@testing-library/jest-dom';
import filmsSlice from 'store/filmsSlice';
import filtersSlice from 'store/filtersSlice';
import personsSlice from 'store/personsSlice';
import {configureStore} from '@reduxjs/toolkit';
import {render, screen} from '@testing-library/react';

jest.mock('next/router', () => ({
    useRouter: jest.fn(),
}));

describe('Navbar display', () => {
    const store = configureStore({
        reducer: {
            films: filmsSlice,
            persons: personsSlice,
            filters: filtersSlice,
        },
    });

    it('display list tag', () => {
        useRouter.mockImplementation(() => ({
            asPath: '/',
        }));

        render(
            <Provider store={store}>
                <Navbar />
            </Provider>
        );

        const main = screen.getByRole('list');

        expect(main).toBeInTheDocument();
    });
});
