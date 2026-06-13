type ContainerProps = {
  children: React.ReactNode;
};
export function Container ({ children }: ContainerProps) {
  return <div className="mx-auto w-[90%] max-w-[1100px] 2xl:max-w-[1300px]">{children}</div>;
}