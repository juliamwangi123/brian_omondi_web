import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function FeedbackTableSkeleton() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <table className="w-full border-collapse table-fixed">
        <thead>
          <tr className="border-b border-gray-100 bg-gray-50/80">
            {["Name", "Ward", "Message", "Date"].map(h => (
              <th key={h} className="px-5 py-3 text-left text-xs font-bold uppercase tracking-widest text-gray-400">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 6 }).map((_, i) => (
            <tr key={i} className="border-b border-gray-50 last:border-none">
              <td className="px-5 py-4">
                <div className="flex items-center gap-3">
                  <Skeleton width={32} height={32} borderRadius={50} />
                  <Skeleton width={100} height={14} />
                </div>
              </td>
              <td className="px-5 py-4">
                <Skeleton width={80} height={26} borderRadius={8} />
              </td>
              <td className="px-5 py-4">
                <Skeleton width="80%" height={14} />
              </td>
              <td className="px-5 py-4">
                <Skeleton width={90} height={14} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}