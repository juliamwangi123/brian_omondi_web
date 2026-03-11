import AdminNavbar from "../components/AdminNavbar";

export default function FeedbackPage() {
  return (
    <div className="flex flex-col flex-1">
      <AdminNavbar title="Feedback" />
      <div className="p-8">
        <h1 className="text-2xl font-bold">Gallery content goes here</h1>
      </div>
    </div>
  );
}