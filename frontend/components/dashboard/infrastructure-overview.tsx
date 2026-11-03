import React from "react";
import { InfrastructureNode } from "../../types/dashboard";
import { IconInfrastructure } from "../ui/icons";

interface InfrastructureOverviewProps {
  node: InfrastructureNode;
}

export function InfrastructureOverview({ node }: InfrastructureOverviewProps) {
  const memPercent = Math.round((node.memoryUsedGb / node.memoryTotalGb) * 100);
  const diskPercent = Math.round((node.diskUsedGb / node.diskTotalGb) * 100);

  return (
    <div className="p-5 rounded-xl border border-zinc-800 bg-zinc-900/40 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-lg bg-zinc-800/80 border border-zinc-700/50 text-emerald-400">
            <IconInfrastructure className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-sm font-semibold text-zinc-100 tracking-tight">
              Host Node & Resources
            </h2>
            <p className="text-[11px] text-zinc-400">
              {node.hostname} • {node.os}
            </p>
          </div>
        </div>
        <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
          Node Online
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
        {/* CPU Usage */}
        <div className="p-3 rounded-lg bg-zinc-950/60 border border-zinc-800/80 space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="text-zinc-400 font-medium">CPU Load</span>
            <span className="font-mono text-zinc-200 font-bold">{node.cpuUsagePercent}%</span>
          </div>
          <div className="w-full h-1.5 rounded-full bg-zinc-800 overflow-hidden">
            <div
              className="h-full bg-emerald-400 rounded-full transition-all duration-500"
              style={{ width: `${node.cpuUsagePercent}%` }}
            />
          </div>
          <div className="text-[10px] text-zinc-400 font-mono">4 vCPU • Fair load</div>
        </div>

        {/* Memory Usage */}
        <div className="p-3 rounded-lg bg-zinc-950/60 border border-zinc-800/80 space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="text-zinc-400 font-medium">Memory (RAM)</span>
            <span className="font-mono text-zinc-200 font-bold">{memPercent}%</span>
          </div>
          <div className="w-full h-1.5 rounded-full bg-zinc-800 overflow-hidden">
            <div
              className="h-full bg-sky-400 rounded-full transition-all duration-500"
              style={{ width: `${memPercent}%` }}
            />
          </div>
          <div className="text-[10px] text-zinc-400 font-mono">
            {node.memoryUsedGb} GB / {node.memoryTotalGb} GB
          </div>
        </div>

        {/* Disk Storage */}
        <div className="p-3 rounded-lg bg-zinc-950/60 border border-zinc-800/80 space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="text-zinc-400 font-medium">Disk Storage</span>
            <span className="font-mono text-zinc-200 font-bold">{diskPercent}%</span>
          </div>
          <div className="w-full h-1.5 rounded-full bg-zinc-800 overflow-hidden">
            <div
              className="h-full bg-indigo-400 rounded-full transition-all duration-500"
              style={{ width: `${diskPercent}%` }}
            />
          </div>
          <div className="text-[10px] text-zinc-400 font-mono">
            {node.diskUsedGb} GB / {node.diskTotalGb} GB SSD
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-zinc-800/60 text-[11px] font-mono text-zinc-400">
        <div>Engine: {node.dockerVersion}</div>
        <div className="text-zinc-300">
          Containers: <span className="text-emerald-400 font-semibold">{node.containerCount.running}</span> running / {node.containerCount.total} total
        </div>
      </div>
    </div>
  );
}

