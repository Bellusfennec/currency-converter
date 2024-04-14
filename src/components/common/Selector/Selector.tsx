import React, { useEffect, useMemo, useRef, useState } from "react";
import { Currency } from "../../../types";
import { FavoriteButton } from "../FavoriteButton";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import {
  addFavorites,
  deleteFavorites,
  getFavorites
} from "../../../store/common/favorites.slicer";
import { isObjectInArray } from "../../../utils/isObjectInArray";

interface SelectorProps {
  options: Currency[];
  placeholder: string;
  onChange: (object: Currency) => void;
  value: string;
}

interface InputChangeEvent {
  target: HTMLInputElement;
}

export const Selector: React.FC<SelectorProps> = ({
  options = [],
  placeholder,
  onChange,
  value
}) => {
  const dispatch = useAppDispatch();
  const [favorites, setFavorites] = useState<Currency[]>(
    useAppSelector(getFavorites())
  );
  const [inputValue, setInputValue] = useState<string>(value);
  const [show, setShow] = useState<boolean>(false);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const filterOptions = useMemo(
    () =>
      [...options]
        .sort((a, b) => {
          const aIsFavorite = favorites.some(item => item.name === a.name);
          const bIsFavorite = favorites.some(item => item.name === b.name);

          if (aIsFavorite === bIsFavorite) {
            return 0;
          }
          if (aIsFavorite) {
            return -1;
          }
          return 1;
        })
        .filter(el => el.name.toLowerCase().includes(inputValue.toLowerCase())),
    [options, favorites, inputValue]
  );


  const handleChange = ({ target }: InputChangeEvent): void => {
    setInputValue(target.value);
    if (target.value.length === 0) {
      onChange({ name: 'USD', value: 1 });
    }
  };

  const handleSetValue = (name: string): void => {
    const currency = options.filter(el => el.name === name)[0];
    onChange(currency);
    setInputValue(currency.name);
    setShow(false);
  };

  const handleFavourite = (element: Currency, state: boolean): void => {
    if (state) {
      dispatch(addFavorites(element));
      setFavorites(prevState => [element, ...prevState]);
    } else {
      dispatch(deleteFavorites(element));
      const filterFavorites = favorites.filter(el => el.name !== element.name);
      setFavorites(filterFavorites);
    }
  };

  const handleClickOutside = (e: MouseEvent): void => {
    if (selectRef.current && !selectRef.current.contains(e.target as Node)) {
      setShow(false);
    }
  };

  return (
    <div
      ref={selectRef}
      className="w-[200px] rounded-sm flex items-center flex-col text-base font-normal relative"
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
        <div className="absolute top-full my-2 bg-white border w-full rounded-md py-2 text-base font-normal max-h-[200px] overflow-y-auto ">
          {filterOptions.length !== 0 ? (
            filterOptions.map(el => (
              <div
                key={el.name}
                className="flex justify-between text-base cursor-pointer font-normal text-black hover:bg-zinc-100 items-center"
              >
                <div
                  className="px-2 py-1 w-full"
                  onClick={() => handleSetValue(el.name)}
                >
                  {el.name}
                </div>
                <div className="mr-2">
                  <FavoriteButton
                    item={el}
                    onFavourite={handleFavourite}
                    favouriteState={isObjectInArray(el, favorites)}
                  />
                </div>
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
