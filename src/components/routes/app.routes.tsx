import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { MenuItems } from '../../types/menu';

const Home = lazy(() => import('../../features/pages/home/home'));
const Robots = lazy(() => import('../../features/pages/robots/robots'));
const Bookmarks = lazy(() => import('../../features/pages/bookmarks/bookmarks'));

export function AppRoutes({ items }: { items: MenuItems }) {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path={''} element={<Home></Home>}></Route>
                <Route path={items[0].path} element={<Home></Home>}></Route>
                <Route path={items[1].path} element={<Robots></Robots>}></Route>
                <Route path={items[2].path} element={<Bookmarks></Bookmarks>}></Route>
                <Route path={'*'} element={<Navigate to="" replace></Navigate>}></Route>
            </Routes>
        </Suspense>
    );
}
