import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router';
import  Bookmarks from './bookmarks';
describe('Given Header component', () => {
    describe('When it has been render', () => {
        test('Then the title should be in the screen', () => {
            render(
                <Router>
                    <Bookmarks></Bookmarks>
                </Router>
            );
            const elementHeader = screen.getByRole('heading', {
                name: 'Bookmarks',
            });
            expect(elementHeader).toBeInTheDocument();
        });
    });
});
