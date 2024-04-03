import { useEffect, useRef, useContext, useState } from 'react';
import logo from '../../assets/images/logo.png';
import { NavLink, Link } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';
import { authContext } from '../../context/AuthContext.jsx';


const navLinks = [
    {
        path: "/home",
        display: "Home",
    },
    {
        path: "/diseases",
        display: "Find a Disease",
    },
    {
        path: "/services",
        display: "Services",
    },
    {
        path: "/contact",
        display: "Contact",
    },
];

const Header = () => {
    const headerRef = useRef(null);
    const menuRef = useRef(null);
    const { user, role, token } = useContext(authContext);
    const dispatch = useContext(authContext).dispatch;
    const [showLogout, setShowLogout] = useState(false);

    useEffect(() => {
        const handleStickyHeader = () => {
            if (window.scrollY > 80) {
                headerRef.current.classList.add('sticky__header');
            } else {
                headerRef.current.classList.remove('sticky__header');
            }
        };

        window.addEventListener('scroll', handleStickyHeader);

        return () => {
            window.removeEventListener('scroll', handleStickyHeader);
        };
    }, []);

    const handleLogout = () => {
        dispatch({ type: 'LOGOUT' });
    };

    const toggleMenu = () => {
        menuRef.current.classList.toggle("show__menu");
    };

    return (
        <header className="header flex items-center" ref={headerRef}>
            <div className="container">
                <div className="flex items-center justify-between">
                    <div>
                        <img src={logo} alt="" />
                    </div>
                    <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                        <ul className="menu flex items-center gap-[2.7rem]">
                            {navLinks.map((link, index) => (
                                <li key={index}>
                                    <NavLink
                                        to={link.path}
                                        className={navClass =>
                                            navClass.isActive
                                                ? "text-primaryColor text-[16px] leading-7 font-[600]"
                                                : "text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor"
                                        }
                                    >
                                        {link.display}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex items-center gap-4">
                        {token && user ? (
                            <div 
                                onMouseEnter={() => setShowLogout(true)}
                                onMouseLeave={() => setShowLogout(false)}
                            >
                                <Link to={role === "vetenary" ? "/vetenaries/profile/me" : "#"}>
                                    <figure className="w-[35px] h-[35px] rounded-full cursor-pointer relative">
                                        <img src={user?.photo} className="w-full rounded-full" alt="" />
                                        {showLogout && (
                                            <button onClick={handleLogout} className="absolute top-full right-0 bg-red-600 py-2 px-4 text-white font-[600] rounded-[50px]">Logout</button>
                                        )}
                                    </figure>
                                </Link>
                            </div>
                        ) : (
                            <Link to="/login">
                                <button className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]">Login</button>
                            </Link>
                        )}
                        <span className="md:hidden" onClick={toggleMenu}>
                            <BiMenu className="w-6 h-6 cursor-pointer" />
                        </span>
                        {role === "vetenary" && (
                            <button onClick={handleLogout} className="bg-red-600 py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]">Logout</button>
                        )}
                    </div>
                </div>
            </div>
            
        </header>
    )
};

export default Header;
