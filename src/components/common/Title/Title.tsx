interface Props {
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  children: React.ReactNode;
}
export const Title: React.FC<Props> = ({ tag, children }) => {
  switch (tag) {
    case "h1": {
      return <h1 className="font-bold text-3xl text-gray-700">{children}</h1>;
    }
    case "h2": {
      return <h2>{children}</h2>;
    }
    case "h3": {
      return <h3>{children}</h3>;
    }
    case "h4": {
      return <h4>{children}</h4>;
    }
    case "h5": {
      return <h5>{children}</h5>;
    }
    case "h6": {
      return <h6>{children}</h6>;
    }
    case "p": {
      return <p>{children}</p>;
    }

    default:
      return <p>{children}</p>;
  }
};
