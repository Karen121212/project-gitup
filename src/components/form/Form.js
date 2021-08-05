import { useState } from "react";

function Form() {
  const [texts, setText] = useState("");

  return (
    <form>
      <input
        type="text"
        value={texts}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button>Add</button>
    </form>
  );
}

export default Form;
