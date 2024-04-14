import { useTranslation } from "react-i18next";
import { Title } from "../../components/common/Title";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { addFavorites, deleteFavorites, getFavorites, setFavorites } from "../../store/common/favorites.slicer";
import { FavoriteButton } from "../../components/common/FavoriteButton";
import { isObjectInArray } from "../../utils/isObjectInArray";
import { Currency } from "../../types";

export const Favorites = () => {
  const dispatch = useAppDispatch()
  const { t } = useTranslation();
  const [favorites, setFavorites] = useState(useAppSelector(getFavorites()))
  
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

  return (
    <div className="flex flex-col gap-5">
      <Title tag="h1">{t('favourites')}</Title>
      <div className="grid md:grid-cols-4 gap-[20px]">{favorites.map(el => (
        <div className="w-full rounded-md h-[100px] border-[2px] p-2 border-dashed flex justify-between">
          <p>{el.name}</p>
          <div className="">
            <FavoriteButton item={el} onFavourite={handleFavourite} favouriteState={isObjectInArray(el, favorites)} />
          </div>
        </div>
        ))
      }</div>
    </div>
  );
};
