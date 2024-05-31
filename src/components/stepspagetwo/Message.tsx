export const Message = ({
  className,
  step,
  children,
}: {
  className: string;
  step: number;
  children?: React.ReactNode;
}) => {
  return (
    <div className={`${className}`}>
      <h3>Step {step}</h3> {children}
    </div>
  );
};
