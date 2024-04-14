import { useTranslation } from "react-i18next";
import { Title } from "../../components/common/Title";

export const Favorites = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-5">
      <Title tag="h1">{t('favourites')}</Title>
      <p>{t('nothing')}</p>
    </div>
  );
};
