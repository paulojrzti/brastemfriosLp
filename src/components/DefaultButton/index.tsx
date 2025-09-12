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
        shadow-[-4px_-3px_7.8px_0_rgba(255,255,255,0.25)_inset,0_4px_4px_0_rgba(255,255,255,0.25)_inset]  mt-4
        transition-transform duration-200 ease-out
        transform hover:scale-105
        ${sizeClasses[size]}
      `}
    >
      <a
        href="https://wa.link/jcltng"
        target="_blank"
        rel="noopener noreferrer"
      >
        Solicitar Orçamento
      </a>
    </button>
  );
}
