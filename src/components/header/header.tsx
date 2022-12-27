export function Header({ children }: { children: JSX.Element }) {
    const title = 'Roboter App';
    return (
        <header>
            <h1>{title}</h1>
            {children}
        </header>
    );
}
