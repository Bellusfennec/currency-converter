import { useCallback } from "react";
import { Currency } from "../../../types";

interface Props {
  amount: number;
  convertibleCurrency: Currency;
  conversionIntoCurrency: Currency;
}

export const Result = ({
  amount,
  convertibleCurrency,
  conversionIntoCurrency
}: Props) => {
  const numberWithSpaces = useCallback((num: number) => {
    const parts = num.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    if (parts[1]) {
      parts[1] = parts[1].substring(0, 5);
    }
    return parts.join(".");
  }, []);

  return (
    <div className="w-full">
      <div className="text-gray-500 font-semibold text-2xl">
        {numberWithSpaces(amount)} {convertibleCurrency.name} =
      </div>
      <div className="text-gray-600 font-bold text-3xl my-2.5">
        {numberWithSpaces(
          amount * (conversionIntoCurrency.value / convertibleCurrency.value)
        )}{" "}
        {conversionIntoCurrency.name}
      </div>
      <div className="text-gray-500 font-normal text-sm">
        1 {convertibleCurrency.name} ={" "}
        {conversionIntoCurrency.value / convertibleCurrency.value}{" "}
        {conversionIntoCurrency.name}
      </div>
      <div className="text-gray-500 font-normal text-sm">
        1 {conversionIntoCurrency.name} ={" "}
        {(
          1 /
          (conversionIntoCurrency.value / convertibleCurrency.value)
        ).toFixed(7)}{" "}
        {convertibleCurrency.name}
      </div>
    </div>
  );
};
