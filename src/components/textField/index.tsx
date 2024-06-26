import { useEffect, useState } from "react";
import "./styles.scss";

type TextFieldType = {
  id: string,
  value: string;
  placeholder?: string;
  label?: string;
  onChange: (newValue: string) => void;
};

const TextField = ({
  id,
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
        id={`${id}-input`}
        className="textField__input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextField;
