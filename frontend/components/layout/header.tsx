"use client";

import React, { useState } from "react";
import { IconSearch, IconBell, IconRefresh } from "../ui/icons";

interface HeaderProps {
  onRefresh?: () => void;
  isRefreshing?: boolean;
}

export function Header({ onRefresh, isRefreshing = false }: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="h-16 border-b border-zinc-800 bg-zinc-950/70 backdrop-blur-md px-6 flex items-center justify-between sticky top-0 z-20">
      {/* Left: Platform Title & Quick Path */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 text-sm text-zinc-400">
          <span className="font-semibold text-zinc-100 tracking-tight">Internal Developer Platform</span>
          <span className="text-zinc-600">/</span>
          <span className="text-zinc-300 font-mono text-xs">Production Cluster</span>
        </div>
      </div>

      {/* Center: Search Bar */}
      <div className="flex-1 max-w-md mx-6">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-400">
            <IconSearch className="w-4 h-4" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search services, deployments, metrics... (Ctrl + K)"
            className="w-full pl-9 pr-12 py-1.5 bg-zinc-900/80 border border-zinc-800 rounded-lg text-xs text-zinc-200 placeholder-zinc-400 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/30 transition-all font-mono"
          />
          <div className="absolute inset-y-0 right-0 pr-2.5 flex items-center pointer-events-none">
            <kbd className="px-1.5 py-0.5 text-[10px] font-mono text-zinc-400 bg-zinc-800 rounded border border-zinc-700">
              /
            </kbd>
          </div>
        </div>
      </div>

      {/* Right: Actions & User Info */}
      <div className="flex items-center gap-4">
        {/* Refresh button */}
        <button
          onClick={onRefresh}
          disabled={isRefreshing}
          title="Reload system telemetry"
          className="p-2 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900 rounded-lg border border-zinc-800 transition-all disabled:opacity-50"
        >
          <IconRefresh className={`w-4 h-4 ${isRefreshing ? "animate-spin text-emerald-400" : ""}`} />
        </button>

        {/* Notifications */}
        <button className="relative p-2 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900 rounded-lg border border-zinc-800 transition-all">
          <IconBell className="w-4 h-4" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-emerald-400" />
        </button>

        <div className="h-5 w-[1px] bg-zinc-800" />

        {/* User Profile */}
        <div className="flex items-center gap-3 pl-1">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-400 flex items-center justify-center text-xs font-bold text-zinc-950 font-mono shadow-sm">
            PT
          </div>
          <div className="hidden sm:block text-left">
            <div className="text-xs font-semibold text-zinc-200 leading-tight">
              Pham Dinh Truong
            </div>
            <div className="text-[11px] font-mono text-zinc-400 leading-tight">
              Senior DevSecOps
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

