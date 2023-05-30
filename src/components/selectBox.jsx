import { useState } from "react";

export default function SelectBox({ onCheckboxChange }) {
  const [checkedBox, setCheckedBox] = useState("site");

  const handleCheckboxChange = (e) => {
    const { name } = e.target;

    setCheckedBox(name);
    onCheckboxChange(name);
  };

  return (
    <>
      <div className="space-x-2 ml-6 mt-3">
        <input
          type="checkbox"
          name="site"
          checked={checkedBox === "site"}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="site">景點</label>
        <input
          type="checkbox"
          name="hotel"
          checked={checkedBox === "hotel"}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="hotel">住宿</label>
      </div>
    </>
  );
}
