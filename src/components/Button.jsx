function Button({ children, variant = "primary", onClick }) {
  const base = "px-4 py-2 rounded font-semibold transition";
  const colors = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };

  return (
    <button className={`${base} ${colors[variant]}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
