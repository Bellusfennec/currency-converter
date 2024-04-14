import React from "react";
import { getCurrencies } from "../../../store/common/currency.slicer";
import { useAppSelector } from "../../../store/hooks";
import { InputField } from "../../common/InputField";
import { Selector } from "../../common/Selector";
import { Currency } from "../../../types";

interface FormState {
  from: Currency | null;
  to: Currency | null;
  amount: string | number;
}

export const Converter = () => {
  const currency = useAppSelector(getCurrencies());
  const [formState, setFormState] = React.useState<FormState>({
    from: null,
    to: null,
    amount: 1
  });

  return (
    <div className="flex gap-3 flex-col">
      <div className="flex gap-3 items-start">
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
            setFormState(state => ({ ...state, from: value || null }))
          }
        />
        <Selector
          options={currency}
          value={formState.to?.name || ""}
          placeholder="To"
          onChange={value =>
            setFormState(state => ({ ...state, to: value || null }))
          }
        />
      </div>
    </div>
  );
};
