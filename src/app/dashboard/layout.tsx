
import Sidebar from "@/Components/Dashboard/Sidebar";


export const metadata = {
  title: "Hospital Dashboard",
  description: "Manage hospital food and delivery system.",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex">
        <Sidebar />
        <main className="flex-1 ml-64 p-6 bg-gray-100">{children}</main>
      </body>
    </html>
  );
}
