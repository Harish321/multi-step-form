import Button from "./atomic/Button";

function Nextbutton({ onClick, disabled }) {
  return <Button title="Next" onClick={onClick} disabled={disabled} />;
}

function PreviousButton({ onClick, disabled }) {
  return <Button title="Previous" onClick={onClick} disabled={disabled} />;
}

function SubmitButton({ onClick, disabled }) {
  return <Button title="Submit" onClick={onClick} disabled={disabled} />;
}

export { Nextbutton, PreviousButton, SubmitButton };
