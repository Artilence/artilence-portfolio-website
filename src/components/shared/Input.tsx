const Input = ({
  label = "sample label",
  placeholder = "sample placeholder",
  className = "",
  type = "text",
}: IInputProps) => {
  return (
    <div
      className={`
    flex flex-col text-[2.302vw] md:text-[1.99vw]
    3xl:text-[25px]
    ${className}
    `}
    >
      <div className="m-0 p-0">{label}</div>
      <input
        type={type}
        className="border-gray border-b text-[1.99vw] md:text-[1.5vw] md:border-b-2 3xl:text-[19px] m-0 p-0"
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
