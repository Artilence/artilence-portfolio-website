const Input = ({
  label = "sample label",
  placeholder = "sample placeholder",
  className = "",
  type = "text",
}: IInputProps) => {
  return (
    <div
      className={`
    flex flex-col text-[5px]
    sm:text-[8px]
   mb-4 md:text-lg md:p-5 
    2xl:text-2xl lg:mb-14 
    ${className}
    `}
    >
      <label>{label}</label>
      <input
        type={type}
        className="border-gray border-b py-2 md:border-b-2"
        placeholder={placeholder}
      />
    </div>
  );
};

interface IInputProps {
  label?: string;
  placeholder?: string;
  className?: string;
  type?: string;
}

export default Input;
