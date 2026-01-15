import React from "react";

type Props = {
  children: React.ReactNode;
  desktopPadding?: string;
  laptopPadding?: string;
  mobilePadding?: string;
  maxwidth?: string;
};

const ContentWrapper = (props: Props) => {
  return (
    <div
      className={`${props.desktopPadding ?? "p-[80px_0px_200px]"} ${props.laptopPadding ?? "max-xl:p-[60px_40px_60px]"} ${props.mobilePadding ?? "max-lg:p-[40px_20px_40px]"} ${props.maxwidth ?? "max-w-300 mx-auto"}`}
    >
      {props.children}
    </div>
  );
};

export default ContentWrapper;
