import React from "react";
import { StatusBadge } from "../ui/badge";

interface WelcomeBannerProps {
  lastUpdated?: string;
}

export function WelcomeBanner({ lastUpdated = "Just now" }: WelcomeBannerProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-xl border border-zinc-800 bg-gradient-to-r from-zinc-900/80 via-zinc-900/50 to-zinc-950/80 backdrop-blur-sm">
      <div className="space-y-1">
        <div className="flex items-center gap-3">
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-100">
            Welcome to IDP Console
          </h1>
          <StatusBadge status="UP" label="All Systems Operational" />
        </div>
        <p className="text-sm text-zinc-400">
          Centralized developer platform monitoring, microservices orchestration, and DevSecOps pipelines.
        </p>
      </div>

      <div className="flex items-center gap-3 text-xs font-mono text-zinc-400 border-t md:border-t-0 md:border-l border-zinc-800 pt-3 md:pt-0 md:pl-6">
        <div>
          <div className="text-zinc-400 uppercase text-[10px]">Active Domain</div>
          <div className="text-zinc-200 font-semibold">truongtest.id.vn</div>
        </div>
        <div className="h-6 w-[1px] bg-zinc-800 mx-1" />
        <div>
          <div className="text-zinc-400 uppercase text-[10px]">Telemetry Sync</div>
          <div className="text-emerald-400">{lastUpdated}</div>
        </div>
      </div>
    </div>
  );
}

