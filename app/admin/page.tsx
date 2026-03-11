import AdminNavbar from "./components/AdminNavbar";

export default function AdminPage() {
  return (
    <div className="flex flex-col flex-1">
      <AdminNavbar title="Dashboard" />
      <div className="pl-10">
        <h1 className="text-2xl font-bold">Dashboard content goes here</h1>
      </div>
    </div>
  );
}