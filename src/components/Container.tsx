import { cn } from "@/lib/utils";

type ContainerProps = React.ComponentProps<"div">;

const Container = ({ children, className, ...props }: ContainerProps) => {
  return (
    <div
      {...props}
      className={cn("w-full max-w-[90rem] mx-auto px-4 tablet:px-9", className)}
    >
      {children}
    </div>
  );
};

export default Container;

