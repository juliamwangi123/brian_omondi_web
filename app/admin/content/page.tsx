import AdminNavbar from "../components/AdminNavbar";
import TiptapEditor from "../components/TiptapEditor";

export default function ContentPage() {
  return (
    <div className="flex flex-col flex-1">
      <AdminNavbar title="Content" />
      <div className="p-8 max-w-4xl">
        <div className="bg-white rounded-2xl border border-gray-200 p-6 flex flex-col gap-6">
         
          <div className="h-px bg-gray-100" />
          <TiptapEditor />
          
        </div>
      </div>
    </div>
  );
}