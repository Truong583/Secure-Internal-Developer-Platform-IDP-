import React from "react";
import { MetricCardData } from "../../types/dashboard";
import { IconActivity, IconClock, IconRocket, IconSecurity } from "../ui/icons";

interface MetricsGridProps {
  metrics: MetricCardData[];
}

export function MetricsGrid({ metrics }: MetricsGridProps) {
  const getIcon = (name: string) => {
    switch (name) {
      case "activity":
        return <IconActivity className="w-5 h-5 text-emerald-400" />;
      case "clock":
        return <IconClock className="w-5 h-5 text-sky-400" />;
      case "rocket":
        return <IconRocket className="w-5 h-5 text-indigo-400" />;
      case "shield":
        return <IconSecurity className="w-5 h-5 text-teal-400" />;
      default:
        return <IconActivity className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((item, idx) => (
        <div
          key={idx}
          className="p-5 rounded-xl border border-zinc-800 bg-zinc-900/40 hover:bg-zinc-900/70 transition-all duration-200 flex flex-col justify-between"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-medium text-zinc-400 uppercase tracking-wider">
              {item.title}
            </span>
            <div className="p-2 rounded-lg bg-zinc-800/60 border border-zinc-700/40">
              {getIcon(item.iconName)}
            </div>
          </div>

          <div>
            <div className="text-2xl font-bold tracking-tight text-zinc-100 font-mono">
              {item.value}
            </div>
            <div className="flex items-center gap-1.5 mt-1 text-xs text-emerald-400 font-medium">
              <span>{item.trend}</span>
            </div>
            <p className="text-[11px] text-zinc-400 mt-2 truncate">
              {item.caption}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

