import { Items } from '../app/App';
import { Header } from '../header/header';
import { Menu } from '../menu/menu';

export function Layout({ children }: { children: JSX.Element }) {
    return (
        <>
            <Header>
                <Menu items={Items}></Menu>
            </Header>
            <main>{children}</main>
        </>
    );
}
