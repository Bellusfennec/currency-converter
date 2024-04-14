import { useTranslation } from "react-i18next";
import { Title } from "../../components/common/Title";

export const Home = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Title tag="h1">{t('conversion')}</Title>
    </div>
  );
};
