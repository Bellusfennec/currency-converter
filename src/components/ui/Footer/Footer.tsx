import { Link } from "react-router-dom";
import { Container } from "../../common/Container";
import { FC } from "react";

interface FooterProps {
  className?: string;
}

export const Footer: FC<FooterProps> = ({ className }) => {
  return (
    <footer className={"border-t" + (className ? " " + className : "")}>
      <Container className="py-1 flex justify-center">
        <Link
          className="font-bold text-gray-700 hover:text-gray-900 py-3 duration-200"
          to="https://github.com/Bellusfennec/currency-converter"
          target="_blank"
        >
          Github
        </Link>
      </Container>
    </footer>
  );
};
