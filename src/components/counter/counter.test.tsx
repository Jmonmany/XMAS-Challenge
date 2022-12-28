import { render, screen } from '@testing-library/react';
import { Counter } from './counter';
describe('Given Counter component', () => {
    describe('When it has been render', () => {
        test('Then the title should be in the screen', () => {
            render(
                <Counter></Counter>
            );
            const paragraph = screen.getByText('0 Robots available');
            expect(paragraph).toBeInTheDocument();
        });
    });
});
