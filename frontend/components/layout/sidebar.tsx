"use client";

import React, { useState } from "react";
import {
  IconOverview,
  IconServices,
  IconDeployments,
  IconInfrastructure,
  IconSecurity,
  IconTerminal,
} from "../ui/icons";

interface NavItem {
  name: string;
  id: string;
  icon: React.ReactNode;
  badge?: string;
}

interface SidebarProps {
  activeTab?: string;
  onTabChange?: (tabId: string) => void;
}

export function Sidebar({ activeTab = "overview", onTabChange }: SidebarProps) {
  const [currentTab, setCurrentTab] = useState(activeTab);

  const navItems: NavItem[] = [
    {
      name: "Overview",
      id: "overview",
      icon: <IconOverview className="w-4 h-4" />,
    },
    {
      name: "Services",
      id: "services",
      icon: <IconServices className="w-4 h-4" />,
      badge: "3",
    },
    {
      name: "Deployments",
      id: "deployments",
      icon: <IconDeployments className="w-4 h-4" />,
    },
    {
      name: "Infrastructure",
      id: "infrastructure",
      icon: <IconInfrastructure className="w-4 h-4" />,
    },
    {
      name: "Security",
      id: "security",
      icon: <IconSecurity className="w-4 h-4" />,
      badge: "A+",
    },
  ];

  const handleSelect = (id: string) => {
    setCurrentTab(id);
    if (onTabChange) {
      onTabChange(id);
    }
  };

  return (
    <aside className="w-64 flex-shrink-0 border-r border-zinc-800 bg-zinc-950/80 backdrop-blur-md flex flex-col justify-between p-4">
      <div>
        {/* Brand Header */}
        <div className="flex items-center gap-3 px-3 py-3 mb-6">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
            <IconTerminal className="w-5 h-5" />
          </div>
          <div>
            <div className="font-semibold text-sm tracking-tight text-zinc-100 flex items-center gap-2">
              Secure IDP
              <span className="text-[10px] font-mono uppercase bg-zinc-800 text-zinc-400 px-1.5 py-0.5 rounded">v1.0</span>
            </div>
            <div className="text-xs text-zinc-400 font-mono">DevSecOps Platform</div>
          </div>
        </div>

        {/* Navigation Section */}
        <div className="space-y-1">
          <div className="px-3 text-[11px] font-semibold uppercase tracking-wider text-zinc-400 mb-2">
            Navigation
          </div>
          <nav className="space-y-1">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleSelect(item.id)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium transition-all ${
                    isActive
                      ? "bg-zinc-800/80 text-zinc-100 shadow-sm border border-zinc-700/60"
                      : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/60"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={isActive ? "text-emerald-400" : "text-zinc-400"}>
                      {item.icon}
                    </span>
                    <span>{item.name}</span>
                  </div>
                  {item.badge && (
                    <span
                      className={`text-[11px] font-mono px-1.5 py-0.5 rounded-full ${
                        isActive
                          ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                          : "bg-zinc-800 text-zinc-400"
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Cluster / VPS Info Box */}
      <div className="rounded-lg border border-zinc-800/80 bg-zinc-900/40 p-3 text-xs space-y-2">
        <div className="flex items-center justify-between text-zinc-400">
          <span className="font-medium text-zinc-300">Environment</span>
          <span className="inline-flex items-center gap-1.5 text-emerald-400 font-mono text-[11px]">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            PROD
          </span>
        </div>
        <div className="text-[11px] font-mono text-zinc-400 truncate">
          Host: ubuntu-vps-idp
        </div>
        <div className="text-[11px] font-mono text-zinc-400">
          Subnet: 10.100.50.0/24
        </div>
      </div>
    </aside>
  );
}

