import RecentFeedback from "./RecentFeedback";
import RecentPosts from "./RecentPosts";

export default function DashboardBottomRow() {
  return (
    <div className="grid grid-cols-2 gap-4 p-6">
      <RecentFeedback />
      <RecentPosts dashboard={true} />
    </div>
  );
}