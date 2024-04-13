import { useState } from "react";

interface InputChangeEvent {
  target: HTMLInputElement;
}

export const Input = () => {
  const [state, setState] = useState<string | number>(1)
  
  const handleChange = ({ target }: InputChangeEvent) => {
    if (isNaN(Number(target.value))) return;
    if (target.value.indexOf(" ") !== -1) return;

    setState(target.value)
  }

  console.log(Number(state) * 93)

  return ( <input className="
    w-[200px] border-[1px] bg-white py-2 px-3
    rounded-lg outline-none caret-black 
  hover:border-red-500 focus:border-blue-400"
    onChange={handleChange}
    value={state}
  >

  </input>
  );
}
