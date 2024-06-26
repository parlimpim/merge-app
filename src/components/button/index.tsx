import cn from "classnames";
import "./styles.scss";

type ButtonType = {
  id: string,
  disabled?: boolean;
  secondary?: boolean;
  size?: "small" | "medium" | "large";
  onClick: () => void;
  children: React.ReactNode;
};

const Button = ({
  id,
  disabled = false,
  secondary = false,
  size = "small",
  onClick,
  children,
}: ButtonType) => {
  return (
    <button
      id={`${id}-button`}
      className={cn("button", { [size]: size, secondary } )}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
