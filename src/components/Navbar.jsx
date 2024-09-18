import { useNavigate, useLocation } from "react-router-dom";
import { ReactComponent as OfferIcon } from "../assets/svg/localOfferIcon.svg";
import { ReactComponent as ExploreIcon } from "../assets/svg/exploreIcon.svg";
import { ReactComponent as PersonOutllineIcon } from "../assets/svg/personOutlineIcon.svg";

const Navbar = () => {

    const navigate = useNavigate()
    const location = useLocation()

    const checkLocation = (route) => {
        if (route === location.pathname) {
            return true
        }
    }

    return (
        <footer className="navbar">
            <nav className="navbarNav">
                <ul className="navbarListItems">
                    <li className="navbarListItem" onClick={() => navigate('/')}>
                        <ExploreIcon fill={checkLocation('/') ? '#2c2c2c' : '#8f8f8f'} width="36px" height="36px" />
                        <p className={checkLocation('/') ? 'navbarListItemNameActive' : '#8f8f8f'}>Explore</p>
                    </li>
                    <li className="navbarListItem" onClick={() => navigate('/offers')}>
                        <OfferIcon fill={checkLocation('/offers') ? '#2c2c2c' : '#8f8f8f'} width="36px" height="36px" />
                        <p className={checkLocation('/offers') ? 'navbarListItemNameActive' : '#8f8f8f'}>Offers</p>
                    </li>
                    <li className="navbarListItem" onClick={() => navigate('/profile')}>
                        <PersonOutllineIcon fill={checkLocation('/profile') ? '#2c2c2c' : '#8f8f8f'} width="36px" height="36px" />
                        <p className={checkLocation('/profile') ? 'navbarListItemNameActive' : '#8f8f8f'}>Profile</p>
                    </li>
                </ul>
            </nav>
        </footer>
    );
};

export default Navbar;