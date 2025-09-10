type DefaultButtonProps = {
  size: "sm" | "md" | "lg" | "xl";
};

const sizeClasses = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
};

export function DefaultButton({ size }: DefaultButtonProps) {
  return (
    <button
      className={`
        flex items-center w-max bg-orange text-light px-4 py-2 rounded-full font-semibold 
        hover:bg-darkOrange hover:shadow-amber-500 shadow-md mt-4
        transition-transform duration-200 ease-out
        transform hover:scale-105
        ${sizeClasses[size]}
      `}
    >
      Solicitar Orçamento
    </button>
  );
}
