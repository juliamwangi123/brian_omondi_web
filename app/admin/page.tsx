import AdminNavbar from "./components/AdminNavbar";
import DashboardCharts from "./components/DashboardCharts";
import DashboardBottomRow from "./components/DashboardBottomRow";
import DashboardStatCards from "./components/DashboardStatCards";

export default function AdminPage() {
  return (
    <div className="flex flex-col flex-1">
      <AdminNavbar title="Dashboard" />
      <DashboardStatCards />
      <DashboardCharts />
      <DashboardBottomRow />
    </div>
  );
}