import React from "react";
import { getCurrencies } from "../../../store/common/currency.slicer";
import { useAppSelector } from "../../../store/hooks";
import { InputField } from "../../common/InputField";
import { Selector } from "../../common/Selector";
import { Currency } from "../../../types";
import { Result } from "../Result";

interface FormState {
  from: Currency;
  to: Currency;
  amount: string | number;
}

export const Converter = () => {
  const currency = useAppSelector(getCurrencies());
  const [formState, setFormState] = React.useState<FormState>({
    from: { name: 'USD', value: 1 },
    to: { name: 'USD', value: 1 },
    amount: 1
  });
  console.log(formState)
  return (
    <div className="flex gap-3 flex-col">
      <div className="flex gap-3 items-center">
        <InputField
          label={formState.to?.name || ""}
          value={formState.amount}
          onChange={value =>
            setFormState(state => ({ ...state, amount: value }))
          }
        />
        <Selector
          options={currency}
          value={formState.from?.name || ""}
          placeholder="From"
          onChange={value =>
            setFormState(state => ({ ...state, from: value }))
          }
        />
        <Selector
          options={currency}
          value={formState.to?.name || ""}
          placeholder="To"
          onChange={value =>
            setFormState(state => ({ ...state, to: value }))
          }
        />
      </div>
      {
        <Result
          amount={+formState.amount}
          conversionIntoCurrency={formState.from.name}
          convertibleCurrency={formState.from.name}
          course={currency.find(curr => curr.name === formState.to.name)?.value || 1}
        />
      }
    </div>
  );
};
