import { FC } from "react";
import { Link, NavLink } from "react-router-dom";
import { Container } from "../../common/Container";
import { LanguageSelection } from "../LanguageSelection/LanguageSelection";
import { useTranslation } from "react-i18next";

const menuList = [{ name: "favourites", link: "/favorites" }];

interface HeaderProps {
  className?: string;
}

export const Header: FC<HeaderProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <header className={"border-b" + (className ? " " + className : "")}>
      <Container className="flex justify-between items-center">
        <Link
          className="font-bold text-2xl text-orange-700 hover:text-orange-900 py-3"
          to="/"
        >
          CurCon
        </Link>
        <nav>
          {menuList.map(({ name, link }) => (
            <NavLink
              key={name}
              className="text-gray-700 py-3 hover:text-orange-700"
              to={link}
            >
              {t(name)}
            </NavLink>
          ))}
        </nav>
        <LanguageSelection />
      </Container>
    </header>
  );
};
