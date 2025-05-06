// coding challenge

import React from "react";
// write code for 1 text field, enter the data.
// display table product id, name, description
//top of table display text field and search button - click on search need to show table with hardcode data.

const mockData = [
  { id: 1, name: "apple iphone", description: "its a mobile" },
  { id: 1, name: "range rover", description: "its a car" },
  { id: 1, name: "windows", description: "its a os" },
];

const debounce = (cb, time) => {
  let timer;
  return (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      cb(...args);
    }, time);
  };
};

export function App(props) {
  const [data, setData] = React.useState([...mockData]);
  const handleChange = debounce((value) => {
    if (value === "") {
      setData(mockData);
      return;
    }
    const result = mockData.filter(
      (item) => item.name?.includes(value) || item.description.includes(value)
    );
    setData(result);
  }, 500);

  return (
    <div className="App">
      <h1>Hello React.</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input onChange={(e) => handleChange(e.target.value)} />
      {data?.map(({ id, name, description }) => (
        <div style={{ display: "flex" }} key={id}>
          <p>{name}</p>
          <p>{description}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
