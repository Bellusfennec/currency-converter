import { useEffect, useState } from "react";
import Selector from "./components/Selector";
import Input from "./components/ui/input";

const array = [
  {
    name: "USD",
    image: "",
    id: "123456",
    curently: 1
  },
  {
    name: "RUB",
    image: "",
    id: "654321",
    curently: 1
  }
]

export function App() {
  const [options, setOptions] = useState({})

  useEffect(() => {
    fetch("https://v6.exchangerate-api.com/v6/6bf322c7f3dcd82ff0f66d99/latest/usd")
      .then((res) => res.json())
      .then((data) => {
        return setOptions(data.conversion_rates);
      })
      .catch((error) => {
        console.warn(error);
        alert("Не удалось получить информацию");
      });
  }, []);

  return <div>
    <Selector options={options} placeholder="Type to search..." />
    <Input></Input>
  </div>;
}