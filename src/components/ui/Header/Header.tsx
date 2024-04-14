import { FC } from "react";
import { Link, NavLink } from "react-router-dom";
import { Container } from "../../common/Container";

const menuList = [{ name: "Избранное", link: "/favorites" }];

interface HeaderProps {
  className?: string;
}

export const Header: FC<HeaderProps> = ({ className }) => {
  return (
    <header className={"border-b" + (className ? " " + className : "")}>
      <Container className="flex justify-between items-center">
        <Link
          className="font-bold text-2xl text-orange-700 hover:text-orange-900 py-3 duration-200"
          to="/"
        >
          CurCon
        </Link>
        <nav>
          {menuList.map(({ name, link }) => (
            <NavLink
              key={name}
              className="text-gray-700 py-3 hover:text-orange-700 duration-200"
              to={link}
            >
              {name}
            </NavLink>
          ))}
        </nav>
      </Container>
    </header>
  );
};
