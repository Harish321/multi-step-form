function Button({ title, onClick, disabled = false }) {
  return (
    <button
      type="button"
      className="btn btn-primary"
      title={title}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
}

export default Button;
