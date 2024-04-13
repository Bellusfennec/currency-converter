interface InputChangeEvent {
  target: HTMLInputElement;
}
interface InputFieldProps {
  value: number | string;
  onChange: (value: number | string) => void;
}

export const InputField = ({ value, onChange }: InputFieldProps) => {


  const handleChange = ({ target }: InputChangeEvent) => {
    let inputValue = target.value.replace(/^(0+)\B/, "");
		if
    if (isNaN(Number(inputValue))) return;
    if (inputValue.indexOf(" ") !== -1) return;
    onChange(inputValue);
  };

  return (
    <div>
      <input onChange={handleChange} value={value} type="text" />
    </div>
  );
};
