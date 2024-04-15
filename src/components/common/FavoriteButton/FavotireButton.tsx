import React, { useState } from "react"
import logoActive from "../../../assets/images/favourite-active.png"
import logo from "../../../assets/images/favourite.png"
import { Currency } from "../../../types";

interface FavoriteButtonProps {
  item: Currency,
  favouriteState: boolean,
  onFavourite: (element: Currency, state: boolean) => void,
}

export const FavoriteButton: React.FC<FavoriteButtonProps> = ({ item, favouriteState, onFavourite }) => {
  const [favourite, setFavorite] = useState<boolean>(favouriteState);

  const handleToggle = () => {
    onFavourite(item, !favourite);
    setFavorite(prevState => !prevState);
  };

  return (
    <button
      onClick={handleToggle}
      className="flex w-7 h-7 rounded-md bg-gray-200 justify-center items-center"
    >
      <img className="w-5" src={favourite ? logoActive : logo} alt={favourite ? "-" : "+"} />
    </button>
  )
};