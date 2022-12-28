import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter as Router } from 'react-router';
import { Items } from '../app/App';
import { Menu } from './menu';
describe('Given Menu component', () => {
    describe('When it has been render', () => {
        test('Then the elements should be in the document', () => {
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
            const button = screen.getAllByRole('button')
            expect(link1).toBeInTheDocument();
            expect(link2).toBeInTheDocument();
            expect(link3).toBeInTheDocument();
            expect(button[0]).toBeInTheDocument()
        });
        test('Then toggles the menu open and closed when the toggle button is clicked', () => {
            render(
                <Router>
                    <Menu items={Items}></Menu>
                </Router>
            );
            const list = screen.getAllByRole('list')
            const button = screen.getAllByRole('button')
            expect(list[0]).toBeInTheDocument()
            userEvent.click(button[0])
            expect(list[0]).not.toBeVisible()
        });
        test('displays a loading animation when the toggle button is clicked', () => {
            render(
                <Router>
                    <Menu items={Items}></Menu>
                </Router>
            );
            const button = screen.getAllByRole('button')
            expect(button[0]).not.toHaveClass('gears')
            userEvent.click(button[0]);
            expect(button[0]).toHaveClass('gears');
            });
    });
});
