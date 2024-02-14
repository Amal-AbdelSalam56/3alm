import React from "react";
import "./FormSelect.scss";
function FormSelect({ inputs, header, name, formValues, setFormValues, post }) {
  const handleInputChange = (inputName, value) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [inputName]: value,
    }));
    // console.log(formValues);
  };
  console.log(post)
  // console.log(inputs[0].state, "inputs");
  return (
    // <div className="inputSelect">
    <div className="inputSelect__All">
      {inputs?.map((tap, index) => (
        <div key={index} className={`${tap.class} input__select`}>
          <label>{tap.name}</label>
          {tap.type == "select" ? (
            <select
              onChange={(e) => handleInputChange(tap.state, e.target.value)}
              defaultValue={tap?.default}
            >
              {tap.select?.map((o, i) => (
                <option key={i}>{o}</option>
              ))}
            </select>
          ) : tap.type == "select-category" ? (
            <select
              onChange={(e) => handleInputChange(tap.state, e.target.value)}
            >
              {tap?.select?.map((o, i) => (
                <option key={i} value={o?.id}>
                  {o?.name}
                </option>
              ))}
            </select>
          ) : tap.type == "filemulti" ? (
            <input
              type="file"
              multiple
              onChange={(e) =>
                handleInputChange(tap.state, [...e.target.files])
              }
            />
          ) : tap.type == "file" ? (
            <input
              type="file"
              multiple
              onChange={(e) => handleInputChange(tap.state, e.target.files[0])}
            />
          ) : tap.type === "textarea" ? (
            <textarea
              defaultValue={
                post?.[tap?.state] ? post?.[tap?.state] : tap?.value
              }
              onChange={(e) => handleInputChange(tap.state, e.target.value)}
            />
          ) : (
            <>
              {/* {post?.[tap?.state]}as */}
              <input
                defaultValue={
                  post?.[tap?.state] ? post?.[tap?.state] : tap?.value
                }
                type={tap.type}
                onChange={(e) => handleInputChange(tap.state, e.target.value)}
              />
            </>
          )}
        </div>
      ))}
    </div>
    // </div>
  );
}

export default FormSelect;
