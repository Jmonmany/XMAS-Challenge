import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router';
import Home from './home';
describe('Given Header component', () => {
    describe('When it has been render', () => {
        test('Then the title should be in the screen', () => {
            render(
                <Router>
                    <Home></Home>
                </Router>
            );
            const elementHeader = screen.getByRole('heading', {
                name: 'Home',
            });
            expect(elementHeader).toBeInTheDocument();
        });
    });
});
