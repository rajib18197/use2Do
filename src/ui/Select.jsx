export default function Select({ options, value, onSelect, ...props }) {
  return (
    <select name="" id="" value={value} onChange={onSelect} {...props}>
      <option value="">Select Priority</option>
      {options.map((option) => (
        <option key={option.value} value={option.field}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
