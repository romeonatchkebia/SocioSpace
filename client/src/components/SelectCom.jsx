import Select from "react-select";
import { useState } from "react";
import { useSelector } from "react-redux";

const SelectCom = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const mode = useSelector((state) => state.mode);

  const name = useSelector((state) => state.user);

  const options = [
    {
      value: "name",
      label: name,
      color: "#454545",
      backgroundColor: "#f7f7f7",
    },
    {
      value: "logout",
      label: "Log Out",
      color: "#454545",
      backgroundColor: "#f7f7f7",
    },
  ];

  const colorStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: `${mode === "dark" ? "#6b6b6b" : "#f7f7f7"}`,
      color: `${mode === "dark" ? "#f7f7f7" : "#454545"}`,
      borderColor: `${mode === "dark" ? "#454545" : "#f7f7f7"}`,
    }),
    option: (styles, { data }) => {
      return {
        ...styles,
        color: data.color,
        backgroundColor: data.backgroundColor,
      };
    },
  };

  return (
    <Select
      defaultValue={options}
      onChange={setSelectedOption}
      options={options}
      styles={colorStyles}
    />
  );
};

export default SelectCom;
