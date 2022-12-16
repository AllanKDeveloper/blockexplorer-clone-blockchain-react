import { Link } from "react-router-dom";

import ETHERSCAN_LOGO from "../assets/images/etherscan-logo-circle.png";

function Header() {
    return (
        <header className="flex px-24 py-6 bg-sky-50 items-center">
            <img src={ETHERSCAN_LOGO} className="h-10" />
            <h1 className="ml-4 text-[#21325B] font-bold text-2xl">
                Etherscan Clone
            </h1>
            <Link to="/" className="ml-auto text-[#21325B] font-bold text-xl">
                HOME
            </Link>
        </header>
    );
}

export default Header;
