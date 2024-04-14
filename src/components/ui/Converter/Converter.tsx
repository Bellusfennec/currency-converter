import React from "react";
import { getCurrencies } from "../../../store/common/currency.slicer";
import { useAppSelector } from "../../../store/hooks";
import { InputField } from "../../common/InputField";

interface FormState {
  from: "USD";
  to: "EUR";
  amount: string | number;
}

export const Converter = () => {
  const currency = useAppSelector(getCurrencies());
  const [formState, setFormState] = React.useState<FormState>({
    from: "USD",
    to: "EUR",
    amount: 1
  });

  return (
    <div className="flex gap-3 flex-col">
      <div className="flex gap-3">
        <InputField
          label={formState.to}
          value={formState.amount}
          onChange={value =>
            setFormState(state => ({ ...state, amount: value }))
          }
        />
        {/* <Selector /> */}
        {/* <Selector /> */}
      </div>
    </div>
  );
};
