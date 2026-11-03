import React from "react";
import { DeploymentLog } from "../../types/dashboard";
import { StatusBadge } from "../ui/badge";
import { IconDeployments, IconCheckCircle } from "../ui/icons";

interface DeploymentActivityProps {
  deployments: DeploymentLog[];
}

export function DeploymentActivity({ deployments }: DeploymentActivityProps) {
  return (
    <div className="p-5 rounded-xl border border-zinc-800 bg-zinc-900/40 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-lg bg-zinc-800/80 border border-zinc-700/50 text-indigo-400">
            <IconDeployments className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-sm font-semibold text-zinc-100 tracking-tight">
              Deployment Pipeline
            </h2>
            <p className="text-[11px] text-zinc-400">
              Recent automated triggers from GitHub Actions (maven.yml)
            </p>
          </div>
        </div>
        <span className="text-[11px] font-mono text-zinc-400">CI/CD: Healthy</span>
      </div>

      <div className="divide-y divide-zinc-800/80">
        {deployments.map((log) => (
          <div
            key={log.id}
            className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 first:pt-1 last:pb-1"
          >
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                  {log.commitHash}
                </span>
                <span className="text-xs font-medium text-zinc-200 line-clamp-1">
                  {log.commitMessage}
                </span>
              </div>
              <div className="flex items-center gap-3 text-[11px] text-zinc-400 font-mono">
                <span>By {log.author}</span>
                <span>•</span>
                <span className="text-zinc-400">branch: {log.branch}</span>
                <span>•</span>
                <span className="text-zinc-400">{log.timestamp}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 sm:self-center">
              <span className="text-[11px] font-mono text-zinc-400">
                {log.duration}
              </span>
              <StatusBadge status={log.status} size="sm" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

