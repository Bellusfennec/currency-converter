import { FC, useEffect, useMemo, useRef, useState } from "react";

interface SelectorProps {
  options: Record<string, number>;
  placeholder: string;
}

interface InputChangeEvent {
  target: HTMLInputElement;
}

export const Selector: FC<SelectorProps> = ({ options, placeholder }) => {
  const [value, setValue] = useState<Record<string, number> | null>(null);
  const [inputValue, setInputValue] = useState<string>("");
  const [show, setShow] = useState<boolean>(false);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const filterOptions = useMemo(
    () => Object.keys(options).filter(el => el.includes(inputValue)),
    [options, inputValue]
  );

  const handleChange = ({ target }: InputChangeEvent): void => {
    setInputValue(target.value);
    if (target.value.length === 0) {
      setValue(null);
    }
  };

  const handleSetValue = (key: string): void => {
    const valit = options[key];
    setValue({ [key]: valit });
    setInputValue(key);
    setShow(false);
  };

  const handleFavourite = (key: string): void => {
    console.log(key);
  };

  const handleClickOutside = (e: MouseEvent): void => {
    if (selectRef.current && !selectRef.current.contains(e.target as Node)) {
      setShow(false);
      console.log(value);
    }
  };

  if (options.USD === undefined) {
    return "loading...";
  }

  return (
    <div
      ref={selectRef}
      className="m-10 w-[200px] rounded-sm flex items-center flex-col text-base font-normal"
    >
      <input
        className="
          w-[200px] border-[1px] bg-white py-2 px-3
          rounded-lg outline-none caret-black shadow-sm
        hover:border-blue-400 focus:border-blue-400"
        onChange={handleChange}
        placeholder={placeholder}
        value={inputValue}
        onClick={() => setShow(true)}
      ></input>
      {show && (
        <div className="my-2 bg-white border w-full rounded-md py-2 text-base font-normal max-h-[200px] overflow-y-auto">
          {filterOptions.length !== 0 ? (
            filterOptions.map(el => (
              <div
                key={el}
                className="flex justify-between text-base cursor-pointer font-normal text-black hover:bg-zinc-100 items-center"
              >
                <div
                  className="px-2 py-1 w-full"
                  onClick={() => handleSetValue(el)}
                >
                  {el}
                </div>
                <button
                  onClick={() => handleFavourite(el)}
                  className="w-7 h-6 mr-1 rounded-sm bg-red-300"
                >
                  +
                </button>
              </div>
            ))
          ) : (
            <div className="px-4 py-1 text-base cursor-pointer font-normal text-black">
              No results avaible
            </div>
          )}
        </div>
      )}
    </div>
  );
};
