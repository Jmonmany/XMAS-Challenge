import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuItems } from '../../types/menu';

export function Menu({ items }: { items: MenuItems }) {
    const [loading, setLoading] = useState(false);

    const [isOpen, setIsOpen] = useState(true);

    const toggleMenu = () => {
    setIsOpen(!isOpen);
    setLoading(true)
    };
  
    return (
        <nav className="menu">
        <button onClick={toggleMenu} className={loading ? "gears" : ''}></button>
        {isOpen && (<ul>
            {items.map((item) => (
            <li key={item.label}>
                <Link to={item.path}>{item.label}</Link>
            </li>
            ))}
        </ul>)}
        </nav>
    );
    }
