import TransparentHeader from "@/components/TransHeader";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <TransparentHeader />
      {children}
    </div>
  );
}
