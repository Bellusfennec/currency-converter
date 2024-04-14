interface InputChangeEvent {
  target: HTMLInputElement;
}
interface InputFieldProps {
  value: number | string;
  onChange: (value: number | string) => void;
  label: string;
}

export const InputField = ({ value, onChange, label }: InputFieldProps) => {
  const handleChange = ({ target }: InputChangeEvent) => {
    let inputValue = target.value.trim();
    inputValue = inputValue.replace(/^(0+)\B/, "");
    if (!inputValue) {
      inputValue = "0";
    }
    if (isNaN(Number(inputValue))) return;
    onChange(inputValue);
  };

  return (
    <div
      className="flex  border-[1px]  bg-white py-2 px-3
		rounded-lg outline-none caret-black 
	hover:border-blue-400 focus:border-blue-400 w-full"
    >
      <p className="text-gray-400">{label}</p>
      <input
        className="px-2 w-full mx-1 outline-none caret-blue-500"
        onChange={handleChange}
        value={value}
        type="text"
      />
    </div>
  );
};
