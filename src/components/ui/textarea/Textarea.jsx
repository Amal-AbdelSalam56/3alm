export default function Textarea({
  value,
  handleChange = () => {},
  placeholder,
  label = "",
  width = "w-full",
  height = "h-40",
  bg = "bg-[#f2f2f2]",
  color = "text-black",
}) {
  return (
    <div className={width}>
      {label && (
        <label htmlFor={"textarea" + label} children={label} className="px-1" />
      )}

      <textarea
        className={`resize-none rounded-xl p-3 my-1 outline-none w-full ${color} ${bg} ${height}`}
        id={"textarea" + label}
        name={"textarea" + label}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  );
}
