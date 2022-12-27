/* eslint-disable testing-library/no-unnecessary-act */
import { act, render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { MenuItems } from '../../types/menu';
import { Items } from '../app/App';
import { AppRoutes } from './app.routes';

const pageTitles = ['Test Home', 'Test Roboter', 'Test Bookmarks'];

const testLazyRoute = (index: number) => {
    const title = new RegExp(pageTitles[index], 'i'); // Antes /Test Home/i;
    const lazyElement = screen.getByText(title);
    expect(lazyElement).toBeInTheDocument();
};

jest.mock('../../features/pages/home/home.tsx', () => {
    return () => <p>{pageTitles[0]}</p>;
});
jest.mock('../../features/pages/robots/robots.tsx', () => {
    return () => <p>{pageTitles[1]}</p>;
});
jest.mock('../../features/pages/bookmarks/bookmarks.tsx', () => {
    return () => <p>{pageTitles[2]}</p>;
});

describe('Given AppRoutes Lazy component', () => {
    let lazyPaths: string[];
    let lazyItems: MenuItems;
    beforeEach(() => {
        lazyItems = Items
        lazyPaths = lazyItems.map((item) => item.path);
    });
    describe(`When we render the component and the lazy route is home`, () => {
        beforeEach(async () => {
            await act(async () => {
                render(
                    <Router initialEntries={lazyPaths} initialIndex={0}>
                        <AppRoutes items={lazyItems} />
                    </Router>
                );
            });
        });
        test('Then it should display Home page', () => {
            testLazyRoute(0);
        });
    });
    describe(`When we render the component and the lazy route is robots`, () => {
        beforeEach(async () => {
            await act(async () => {
                render(
                    <Router initialEntries={lazyPaths} initialIndex={1}>
                        <AppRoutes items={lazyItems} />
                    </Router>
                );
            });
        });
        test('Then it should display Robots page', () => {
            testLazyRoute(1);
        });
    });
    describe(`When we render the component and the lazy route is bookmarks`, () => {
        beforeEach(async () => {
            await act(async () => {
                render(
                    <Router initialEntries={lazyPaths} initialIndex={2}>
                        <AppRoutes items={lazyItems} />
                    </Router>
                );
            });
        });
        test('Then it should display Bookmarks page', () => {
            testLazyRoute(2);
        });
    });
});
