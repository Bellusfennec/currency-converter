import { useEffect, useState } from "react";
import { Converter } from "../../components/ui/Converter";
import { Title } from "../../components/common/Title";
import { useTranslation } from "react-i18next";
import { useAppDispatch } from "../../store/hooks.ts";
import { addStories } from "../../store/common/stories.slicer.ts";

export const Home = () => {
  const [countConverter, setCountConverter] = useState([1]);
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const addConversionInStory = () => {
    dispatch(
      addStories({
        from: {
          name: "USD",
          value: 1
        },
        to: {
          name: "USD",
          value: 1
        },
        date: new Date().toLocaleString()
      })
    );
  };
  const handlerAddConversion = () => {
    setCountConverter(state => [...state, state.length + 1]);
    addConversionInStory();
  };
  useEffect(() => {
    addConversionInStory();
  }, []);
  return (
    <div className="flex flex-col gap-3">
      <Title tag="h1">{t("conversion")}</Title>
      {countConverter.map(order => (
        <div className="flex gap-5  justify-center items-center ml:justify-between" key={order}>
          <Converter key={order} />
        </div>
      ))}
      <button
        onClick={() =>
          setCountConverter(state =>
            state.filter(item => item !== state.length - 1)
          )
        }
        className="h-full border py-1 rounded-md px-5 text-[20px] bg-slate-50 text-red-700 hover:bg-red-100 hover:text-gray-700 duration-200 hover:border-red-100"
      >
        -
      </button>
      <button
        onClick={handlerAddConversion}
        className="flex items-center justify-center border rounded-md w-full text-[20px] bg-slate-50 text-green-700 hover:bg-green-100 hover:text-gray-700 duration-200 hover:border-green-100"
      >
        +
      </button>
    </div>
  );
};
