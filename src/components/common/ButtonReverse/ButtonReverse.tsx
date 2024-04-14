import icon from "../../../assets/images/reverseIcon.png";

interface ButtonReverseProps {
  onReverse: () => void;
}

export const ButtonReverse: React.FC<ButtonReverseProps> = ({ onReverse }) => {
  const handleReverse = () => {
    onReverse();
  };

  return (
    <button
      onClick={handleReverse}
      className="clear rounded-full border p-3 hover:border-blue-400 active:border-blue-200 active:bg-gray-100"
    >
      <img className="w-[35px]" src={icon} alt="reverse" />
    </button>
  );
};
