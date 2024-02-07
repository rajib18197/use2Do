import Button from "./Button";

export default function Filters({ options }) {
  return (
    <div>
      {options.map((option) => (
        <Button size={"small"} key={option.label}>
          {option.color} {option.label}
        </Button>
      ))}
    </div>
  );
}
