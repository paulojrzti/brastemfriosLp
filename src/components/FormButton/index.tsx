type FormButtonProps = {
  size?: "sm" | "md" | "lg" | "xl";
  loading?: boolean;
  children?: React.ReactNode;
};

const sizeClasses = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
};

export function FormButton({
  size = "md",
  loading = false,
  children = "Enviar",
}: FormButtonProps) {
  return (
    <button
      type="submit"
      disabled={loading}
      className={`
        flex items-center justify-center w-full bg-orange text-light px-4 py-2 rounded-full font-semibold 
        shadow-[-4px_-3px_7.8px_0_rgba(255,255,255,0.25)_inset,0_4px_4px_0_rgba(255,255,255,0.25)_inset] mt-4
        transition-transform duration-200 ease-out
        transform hover:scale-105
        disabled:opacity-60 disabled:cursor-not-allowed
        ${sizeClasses[size]}
      `}
    >
      {loading ? "Enviando..." : children}
    </button>
  );
}
