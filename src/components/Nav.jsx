import logo from "../assets/icons/logo.svg";
import user from "../assets/icons/user.svg";
import burgerMenu from "../assets/icons/burger_menu.svg";
import Button from "./buttons/Button";
import { Link, useNavigate } from "react-router-dom";

function Nav() {
  const navItems = [
    { text: "Marketplace", link: "/" },
    { text: "Rankings", link: "/" },
    { text: "Connect a wallet", link: "/connect-wallet" },
  ];

  const navigate = useNavigate();

  return (
    <nav>
      <div className="w-full h-24 flex items-center px-12 py-5 justify-between">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <div className="flex-1 mr-8 max-lg:hidden">
          <ul className="flex justify-end gap-12">
            {navItems.map((item) => (
              <li
                className="text-white font-display text-base font-semibold"
                key={item.text}
              >
                <Link to={item.link}>{item.text}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="max-lg:hidden">
          <Button
            icon={user}
            label="Sign Up"
            onClick={() => {
              navigate("/create-account");
            }}
          />
        </div>
        <div className="lg:hidden">
          <img src={burgerMenu} alt="Menu" />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
