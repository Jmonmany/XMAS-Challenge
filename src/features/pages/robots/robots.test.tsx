import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router';
import Robots from './robots';
describe('Given Header component', () => {
    describe('When it has been render', () => {
        test('Then the title should be in the screen', () => {
            render(
                <Router>
                    <Robots></Robots>
                </Router>
            );
            const elementHeader = screen.getByRole('heading', {
                name: 'Roboter',
            });
            expect(elementHeader).toBeInTheDocument();
        });
    });
});
