import React, { useState } from "react";

interface WithButtonStateProps {
  selectedValue: string;
  onButtonClick: (value: string) => void;
}

const withButtonState = <P extends object>(
  WrappedComponent: React.ComponentType<P & WithButtonStateProps>
) => {
  const ComponentWithState = (props: P) => {
    const [selectedValue, setSelectedValue] = useState<string>("");

    const handleButtonClick = (value: string) => {
      setSelectedValue(value);
    };

    return (
      <WrappedComponent
        {...props}
        selectedValue={selectedValue}
        onButtonClick={handleButtonClick}
      />
    );
  };

  return ComponentWithState;
};

export default withButtonState;
