import Select from "./Select";

export default function SortBy({ options, currentSortValue, onSort }) {
  return (
    <div>
      <Select options={options} value={currentSortValue} onSelect={onSort} />
    </div>
  );
}
