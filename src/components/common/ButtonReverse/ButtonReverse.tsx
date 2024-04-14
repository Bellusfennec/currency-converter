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
      className="clear rounded-full border w-[40px] h-[40px] p-1 hover:border-blue-400 active:border-blue-200 active:bg-gray-100 relative"
    >
      <img
        className="top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 absolute w-[25px]"
        src={icon}
        alt="reverse"
      />
    </button>
  );
};
