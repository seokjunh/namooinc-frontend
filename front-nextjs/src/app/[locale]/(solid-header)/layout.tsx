import SolidHeader from "@/components/SolidHeader";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <SolidHeader />
      {children}
    </div>
  );
}
