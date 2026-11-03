import React from "react";
import { IconActivity, IconTerminal, IconRocket, IconFileCode } from "../ui/icons";

interface QuickActionsProps {
  onTriggerHealthCheck?: () => void;
}

export function QuickActions({ onTriggerHealthCheck }: QuickActionsProps) {
  const actions = [
    {
      title: "Trigger Healthcheck",
      description: "Send live probe to /api/health and database",
      icon: <IconActivity className="w-4 h-4 text-emerald-400" />,
      onClick: onTriggerHealthCheck,
      badge: "HTTP GET",
    },
    {
      title: "View Container Logs",
      description: "Inspect docker compose logs for backend & db",
      icon: <IconTerminal className="w-4 h-4 text-sky-400" />,
      onClick: () => {
        alert("Command: docker compose logs --tail=50 backend");
      },
      badge: "Shell",
    },
    {
      title: "Deploy New Service",
      description: "Register a new service into IDP service mesh",
      icon: <IconRocket className="w-4 h-4 text-indigo-400" />,
      onClick: () => {
        alert("Self-service catalog module will be enabled in Phase 2.");
      },
      badge: "CI/CD",
    },
    {
      title: "API Documentation",
      description: "Explore OpenAPI specifications and endpoints",
      icon: <IconFileCode className="w-4 h-4 text-amber-400" />,
      onClick: () => {
        window.open("http://api.truongtest.id.vn/api/health", "_blank");
      },
      badge: "Docs",
    },
  ];

  return (
    <div className="p-5 rounded-xl border border-zinc-800 bg-zinc-900/40 space-y-3">
      <div className="flex items-center justify-between mb-1">
        <h2 className="text-sm font-semibold text-zinc-100 tracking-tight">
          Quick Operator Actions
        </h2>
        <span className="text-[11px] text-zinc-400">Platform Shortcuts</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {actions.map((act, idx) => (
          <button
            key={idx}
            onClick={act.onClick}
            className="p-3.5 rounded-lg border border-zinc-800/80 bg-zinc-950/60 hover:bg-zinc-800/60 hover:border-zinc-700/80 text-left transition-all duration-150 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="p-1.5 rounded-md bg-zinc-900 border border-zinc-800">
                  {act.icon}
                </div>
                <span className="text-[10px] font-mono uppercase bg-zinc-800/80 text-zinc-400 px-1.5 py-0.5 rounded border border-zinc-700/40">
                  {act.badge}
                </span>
              </div>
              <div className="font-medium text-xs text-zinc-200 group-hover:text-emerald-400 transition-colors">
                {act.title}
              </div>
              <div className="text-[11px] text-zinc-400 mt-1 line-clamp-2 leading-relaxed">
                {act.description}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

