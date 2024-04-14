import { useCallback } from "react";

interface Props {
  amount: number;
  convertibleCurrency: string;
  conversionIntoCurrency: string;
  course: number;
}

export const Result = ({
  amount,
  convertibleCurrency,
  conversionIntoCurrency,
  course
}: Props) => {
  const numberWithSpaces = useCallback(
    (num: number) => {
      const parts = num.toString().split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      if (parts[1]) {
        parts[1] = parts[1].substring(0, 5)
      }
      return parts.join(".");
    },
    [amount, course]
  );

  return (
    <div className="w-full">
      <div className="text-gray-500 font-semibold text-2xl">
        {numberWithSpaces(amount)} {convertibleCurrency} =
      </div>
      <div className="text-gray-600 font-bold text-3xl my-2.5">
        {numberWithSpaces(amount * course)} {conversionIntoCurrency}
      </div>
      <div className="text-gray-500 font-normal text-sm">
        1 {convertibleCurrency} = {course} {conversionIntoCurrency}
      </div>
      <div className="text-gray-500 font-normal text-sm">
        1 {conversionIntoCurrency} = {(1 / course).toFixed(7)}{" "}
        {convertibleCurrency}
      </div>
    </div>
  );
};
