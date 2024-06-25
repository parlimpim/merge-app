import cn from "classnames";
import "./styles.scss"

type ButtonType = {
  disabled?: boolean;
  secondary?: boolean;
  size?: "small" | "medium" | "large";
  onClick: () => void;
  children: React.ReactNode;
};

const Button = ({
  disabled = false,
  secondary = false,
  size = "medium",
  onClick,
  children,
}: ButtonType) => {
  return (
    <button
      className={cn("button", { [size]: size, secondary } )}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;