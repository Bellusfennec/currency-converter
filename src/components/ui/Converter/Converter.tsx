import React from "react";
import { getCurrencies } from "../../../store/common/currency.slicer";
import { useAppSelector } from "../../../store/hooks";
import { InputField } from "../../common/InputField";
import { Selector } from "../../common/Selector";
import { Currency } from "../../../types";
import { Result } from "../Result";
import { ButtonReverse } from "../../common/ButtonReverse";

interface FormState {
  from: Currency;
  to: Currency;
  amount: string | number;
}

export const Converter = () => {
  const currency = useAppSelector(getCurrencies());
  const [reversed, setReversed] = React.useState(false);
  const [formState, setFormState] = React.useState<FormState>({
    from: { name: "USD", value: 1 },
    to: { name: "USD", value: 1 },
    amount: 1
  });

  const handelReversed = () => {
    setFormState({
      ...formState,
      from: formState.to,
      to: formState.from
    });
    setReversed(!reversed);
  };

  return (
    <div className="flex gap-3 flex-col justify-center md:w-full">
      <div className="flex gap-3 flex-col items-center md:flex-row">
        <InputField
          label={formState.from?.name || ""}
          value={formState.amount}
          onChange={value =>
            setFormState(state => ({ ...state, amount: value }))
          }
        />
        <div className="flex items-center gap-2 flex-col sd:flex-row">
          <Selector
            options={currency}
            value={formState.from?.name}
            placeholder="From"
            onChange={value => setFormState(state => ({ ...state, from: value }))}
          />
          <ButtonReverse onReverse={handelReversed} />
          <Selector
            options={currency}
            value={formState.to?.name}
            placeholder="To"
            onChange={value => setFormState(state => ({ ...state, to: value }))}
          />
        </div>
      </div>
      {
        <Result
          amount={+formState.amount}
          conversionIntoCurrency={formState.to}
          convertibleCurrency={formState.from}
        />
      }
    </div>
  );
};
