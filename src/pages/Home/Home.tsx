import { useState, useEffect } from "react";
import { InputField } from "../../components/InputField";

export const Home = () => {
  const [fromPrice, setFromPrice] = useState<number | string>(1);
  const [rates, setRates] = useState({});

  useEffect(() => {
    console.log("changed");
  }, [fromPrice]);

  useEffect(() => {
    fetch("https://v6.exchangerate-api.com/v6/6bf322c7f3dcd82ff0f66d99/latest/usd")
      .then((res) => res.json())
      .then((data) => {
        setRates(data.conversion_rates);
        console.log(data.conversion_rates);
      })
      .catch((error) => {
        console.warn(error);
        alert("Не удалось получить информацию");
      });
  }, []);

  const onChangeFromPrice = (value: number | string) => {
    setFromPrice(value);
  };

  return (
    <>
      <InputField value={fromPrice} onChange={onChangeFromPrice} />
    </>
  );
};
