
import MessagesChart from "./MessagesChart";
import SentimentBreakdown from "./SentimentBreakdown";
import TopTopics from "./TopTopics";

export default function DashboardCharts() {
  return (
    <div className="grid grid-cols-3 gap-4 p-6">
      <MessagesChart />
      <SentimentBreakdown />
      <TopTopics />
    </div>
  );
}