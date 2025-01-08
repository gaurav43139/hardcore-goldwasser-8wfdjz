import { useState } from "react";
import "./styles.css";

export default function App() {
  const options = [
    {
      id: 1,
      name: "one",
    },
    {
      id: 2,
      name: "two",
    },
    {
      id: 3,
      name: "three",
    },
  ];

  const [dropdown, setDropdown] = useState(false);
  const [value, setValue] = useState([]);
  function handleDropdown(e) {
    setDropdown((prev) => !prev);
  }
  function handleDropdownclick(item) {
    if (value.includes(item.name)) {
      setValue(value.filter((n) => n != item.name));
    } else {
      console.log(item.id);
      const nameval = item.name;

      setValue((prev) => [...prev, nameval]);
      console.log(value);
    }
    // const val = e.target.id;
  }
  return (
    <div className="App">
      <div style={{ height: "100vh", position: "relative", width: "100px" }}>
        <input
          style={{ position: "relative", left: "0%", width: "100%" }}
          value={value}
        />
        <button onClick={(e) => handleDropdown(e)}>{">"}</button>
        {dropdown && (
          <div style={{ position: "absolute", width: "100%" }}>
            {options.map((item, idx) => (
              <div
                style={{}}
                key={item.id}
                id={item}
                onClick={(e) => handleDropdownclick(item)}
              >
                {item.name}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
