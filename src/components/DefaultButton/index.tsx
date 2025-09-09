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
      className={`flex items-center w-max bg-orange text-light px-4 py-2 rounded-full font-semibold hover:bg-darkOrange transition-colors shadow-2xl mt-4 ${sizeClasses[size]}`}
    >
      Solicitar Orçamento
    </button>
  );
}
