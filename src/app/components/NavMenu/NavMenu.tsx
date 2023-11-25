import "./NavMenu.css";
import Button from "../Button/Button";
import Link from "next/link";

const MENU = [
  {
    link: "/",
    title: "Главная",
  },
  {
    link: "/posts",
    title: "Посты",
  },
];

const NavMenu = () => {
  return (
    <nav className={"nav-root"}>
      {MENU.map(({ link, title }, index) => (
        <Link key={index} href={link}>
          <Button>{title}</Button>
        </Link>
      ))}
    </nav>
  );
};

export default NavMenu;
