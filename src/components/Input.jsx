export default function Input({ label, bool, nameRef, dateRef }) {
  return (
    <div id="input">
      <label>{label}</label>
      {bool ? (
        <input type="text" name="user-input" ref={nameRef} />
      ) : (
        <input type="date" name="user-input" ref={dateRef} />
      )}
    </div>
  );
}
