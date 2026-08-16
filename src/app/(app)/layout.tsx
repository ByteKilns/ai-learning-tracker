import { Sidebar } from "@/components/Sidebar";
import { AppBar } from "@/components/AppBar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-full flex-1">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <AppBar />
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
