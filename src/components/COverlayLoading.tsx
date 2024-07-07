import React from "react";
import { Spin, SpinProps } from "antd";
const COverlayLoading: React.FC<{ spinning: boolean; style?: any }> = ({
  spinning,
  style,
}) => {
  const props: SpinProps = {
    size: "default",
    tip: "Loading...",
    delay: 0.5,
    style: style,
  };
  return (
    <div className="fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center bg-white">
      <Spin spinning={spinning} {...props} />
    </div>
  );
};
export default COverlayLoading;
