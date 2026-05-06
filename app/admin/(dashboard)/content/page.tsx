import AdminNavbar from "../components/AdminNavbar";
import TiptapEditor from "../components/TiptapEditor";
import RecentPosts from "../components/RecentPosts";
import { Suspense } from "react";

export default function ContentPage() {
  return (
    <div className="flex flex-col flex-1">
      <AdminNavbar title="Content" />
      <div className="flex gap-6 p-8">
        <div className="flex-1 min-w-0">
          <Suspense fallback={<div>Loading editor...</div>}>
            <TiptapEditor />
          </Suspense>
        </div>
        <div className="w-72 flex-shrink-0">
          <RecentPosts />
        </div>
      </div>
    </div>
  );
}