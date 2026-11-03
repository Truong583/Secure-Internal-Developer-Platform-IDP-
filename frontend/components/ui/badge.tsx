import React from "react";
import { ServiceHealthStatus } from "../../types/dashboard";

interface BadgeProps {
  status: ServiceHealthStatus | "SUCCESS" | "FAILED" | "IN_PROGRESS";
  label?: string;
  size?: "sm" | "md";
}

export function StatusBadge({ status, label, size = "md" }: BadgeProps) {
  const displayLabel = label || status;

  let colorClasses = "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
  let dotClasses = "bg-emerald-400";
  let animatePulse = false;

  switch (status) {
    case "UP":
    case "SUCCESS":
      colorClasses = "bg-emerald-500/10 text-emerald-400 border-emerald-500/30";
      dotClasses = "bg-emerald-400";
      animatePulse = true;
      break;
    case "DEGRADED":
      colorClasses = "bg-amber-500/10 text-amber-400 border-amber-500/30";
      dotClasses = "bg-amber-400";
      animatePulse = true;
      break;
    case "DOWN":
    case "FAILED":
      colorClasses = "bg-rose-500/10 text-rose-400 border-rose-500/30";
      dotClasses = "bg-rose-400";
      break;
    case "STARTING":
    case "IN_PROGRESS":
      colorClasses = "bg-sky-500/10 text-sky-400 border-sky-500/30";
      dotClasses = "bg-sky-400";
      animatePulse = true;
      break;
  }

  const sizeClasses = size === "sm" ? "px-2 py-0.5 text-xs" : "px-2.5 py-1 text-xs font-medium";

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border ${colorClasses} ${sizeClasses}`}
    >
      <span className="relative flex h-2 w-2">
        {animatePulse && (
          <span
            className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${dotClasses}`}
          />
        )}
        <span className={`relative inline-flex h-2 w-2 rounded-full ${dotClasses}`} />
      </span>
      <span>{displayLabel}</span>
    </span>
  );
}

