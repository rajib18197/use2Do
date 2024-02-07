export default function FormRow({ label, error, children }) {
  return (
    <div>
      {label && <label htmlFor={children.props.id}>{label}</label>}
      {children}
      {error && <p>{error}</p>}
    </div>
  );
}
