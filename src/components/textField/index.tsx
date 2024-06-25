import { useEffect, useState } from "react";
import "./styles.scss";

export type TextFieldType = {
  value: string;
  placeholder?: string;
  label?: string;
  onChange: (newValue: string) => void;
};

const TextField = ({
  value: valueFromProps,
  placeholder,
  label,
  onChange,
}: TextFieldType) => {
  const [value, setValue] = useState<string>(valueFromProps);

  useEffect(() => {
    setValue(valueFromProps);
  }, [valueFromProps]);

  useEffect(() => {
    return () => onChange("");
  }, []);

  return (
    <div className="textField">
      {label && <div className="textField__label">{label}</div>}
      <input
        className="textField__input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextField;
