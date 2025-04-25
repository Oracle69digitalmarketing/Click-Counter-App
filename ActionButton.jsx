const ActionButton = ({ label, onClick, disabled, bgColor }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`px-6 py-2 rounded-xl text-white transition-transform transform hover:scale-105 
      ${bgColor} ${disabled ? 'opacity-50 cursor-not-allowed' : `hover:${bgColor}-600`}`}
  >
    {label}
  </button>
);

export default ActionButton;