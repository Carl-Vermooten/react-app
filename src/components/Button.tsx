import React from "react";

interface Props {
  onSelectItem: (item: string) => void;
}

const Button = () => {
  return (
    <button type="button" className="btn btn-primary">
      Click me
    </button>
  );
};

export default Button;
