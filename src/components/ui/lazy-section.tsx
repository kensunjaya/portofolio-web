import { useInView } from "../hooks/useinview";

export function LazySection({ children, id }: { children: React.ReactNode, id: string }) {
  const { ref, isInView } = useInView();

  return (
    <div ref={ref} id={id} className="min-h-screen">
      {isInView && children}
    </div>
  );
}
