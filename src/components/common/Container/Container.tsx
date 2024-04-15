import { FC } from "react";

interface ContainerProps {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
}

export const Container: FC<ContainerProps> = ({ children, className }) => {
  return (
    <div
      className={
        "w-auto mx-0 px-[5%] lg:w-[900px] lg:mx-auto lg:px-0" +
        (className ? ` ${className}` : "")
      }
    >
      {children}
    </div>
  );
};
