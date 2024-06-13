import React from "react";

export const GlobalParagraph = React.forwardRef(
  (
    {
      title,
      description,
      children,
      titleClass,
      descriptionClass,
      className,
      ...rest
    },
    ref
  ) => {
    return (
      <>
        {title && <h3 className={"title3 " + titleClass}>{title}</h3>}
        {description && <p className={descriptionClass}>{description}</p>}
        {children && <p className={className}>{children}</p>}
      </>
    );
  }
);
GlobalParagraph.displayName = "GlobalParagraph";
