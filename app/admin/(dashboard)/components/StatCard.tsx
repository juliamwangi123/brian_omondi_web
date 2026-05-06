import { type LucideIcon } from "lucide-react";

interface StatCardProps {
  label: string;
  value: string;
  sub: string;
  icon: LucideIcon;
  color: string; 
}

export default function StatCard({ label, value, sub, icon: Icon, color }: StatCardProps) {
  return (
    <div
      className="relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
    >
      {/* Radial glow in top-right */}
      <div
        className="pointer-events-none absolute right-0 top-0 h-24 w-24"
        style={{
          background: `radial-gradient(circle at top right, ${color}18, transparent 70%)`,
        }}
      />

      {/* Label + icon row */}
      <div className="flex items-start justify-between mb-4">
        <span
          className="text-xs font-bold uppercase tracking-widest"
          style={{ color: "#6b7280" }}
        >
          {label}
        </span>
        <div
          className="flex h-8 w-8 items-center justify-center rounded-xl flex-shrink-0"
          style={{ background: `${color}18` }}
        >
          <Icon size={16} style={{ color }} />
        </div>
      </div>

      {/* Value */}
      <p
        className="text-4xl font-black leading-none"
        style={{ color: "#1a2e1d", fontFamily: "Georgia, serif" }}
      >
        {value}
      </p>

      {/* Sub-label */}
      <p className="mt-2 text-xs" style={{ color: "#6b7280" }}>
        {sub}
      </p>
    </div>
  );
}