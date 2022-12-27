import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router';
import { Items } from '../app/App';
import { Menu } from './menu';
describe('Given Header component', () => {
    describe('When it has been render', () => {
        test('Then the title should be in the screen', () => {
            render(
                <Router>
                    <Menu items={Items}></Menu>
                </Router>
            );
            const link1 = screen.getByRole('link', {
                name: 'Home',
            });
            const link2 = screen.getByRole('link', {
                name: 'Roboter',
            });
            const link3 = screen.getByRole('link', {
                name: 'Bookmarks',
            });
            expect(link1).toBeInTheDocument();
            expect(link2).toBeInTheDocument();
            expect(link3).toBeInTheDocument();
        });
    });
});
