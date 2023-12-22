const Input = () => {
  return (
    <div className="flex flex-col mb-4 lg:mb-14">
      <label>label</label>
      <input
        type="text"
        className="border-gray border-b py-2 md:border-b-2"
        placeholder="Enter your name"
      />
    </div>
  );
};

export default Input;
