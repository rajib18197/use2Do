import Button from "./Button";

export default function Filters({
  options,
  currentFilterValue,
  onChangeFilter,
}) {
  return (
    <div>
      {options.map((option) => (
        <Button
          size={"small"}
          key={option.label}
          onClick={() => onChangeFilter(option.value)}
        >
          {option.color} {option.label}
        </Button>
      ))}
    </div>
  );
}
