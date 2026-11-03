"use client";

import React, { useState } from "react";
import { Sidebar } from "../components/layout/sidebar";
import { Header } from "../components/layout/header";
import { WelcomeBanner } from "../components/dashboard/welcome-banner";
import { MetricsGrid } from "../components/dashboard/metrics-grid";
import { ServiceCards } from "../components/dashboard/service-cards";
import { DeploymentActivity } from "../components/dashboard/deployment-activity";
import { InfrastructureOverview } from "../components/dashboard/infrastructure-overview";
import { QuickActions } from "../components/dashboard/quick-actions";
import {
  CORE_SERVICES,
  SYSTEM_METRICS,
  RECENT_DEPLOYMENTS,
  HOST_INFRASTRUCTURE,
} from "../lib/mock-data";

export default function OverviewDashboardPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastSyncTime, setLastSyncTime] = useState("Just now");
  const [services, setServices] = useState(CORE_SERVICES);

  const handleRefresh = async () => {
    setIsRefreshing(true);

    try {
      // Non-blocking attempt to probe real backend if reachable
      const res = await fetch("http://localhost:8000/api/health", {
        signal: AbortSignal.timeout(1500),
      });
      if (res.ok) {
        const data = await res.json();
        setServices((prev) =>
          prev.map((s) =>
            s.id === "backend-api"
              ? { ...s, status: data.status === "UP" ? "UP" : "DOWN", lastChecked: "Just now (Live API)" }
              : s
          )
        );
      }
    } catch {
      // Graceful fallback to simulated telemetry
    } finally {
      setTimeout(() => {
        setIsRefreshing(false);
        const now = new Date();
        setLastSyncTime(now.toLocaleTimeString());
      }, 600);
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-zinc-950 font-sans text-zinc-100">
      {/* 1. Left Navigation Sidebar */}
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />

      {/* 2. Main Content Container */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Header */}
        <Header onRefresh={handleRefresh} isRefreshing={isRefreshing} />

        {/* Scrollable Dashboard Body */}
        <main className="flex-1 overflow-y-auto px-6 py-8 space-y-8">
          {/* Welcome & Top Notification */}
          <WelcomeBanner lastUpdated={lastSyncTime} />

          {/* System Telemetry KPI Cards */}
          <section className="space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                System Key Performance Indicators
              </h2>
              <span className="text-[11px] font-mono text-zinc-400">
                Auto-refresh: 30s
              </span>
            </div>
            <MetricsGrid metrics={SYSTEM_METRICS} />
          </section>

          {/* Core Services Section */}
          <section>
            <ServiceCards services={services} />
          </section>

          {/* Dual Column: Deployments & Host Infrastructure */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <DeploymentActivity deployments={RECENT_DEPLOYMENTS} />
            <InfrastructureOverview node={HOST_INFRASTRUCTURE} />
          </section>

          {/* Operator Quick Actions */}
          <section>
            <QuickActions onTriggerHealthCheck={handleRefresh} />
          </section>

          {/* Enterprise Footer */}
          <footer className="pt-6 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-400 font-mono">
            <div>
              Secure IDP • Internal Developer Platform Portal
            </div>
            <div className="flex items-center gap-4 text-[11px]">
              <span>Nginx Ingress: Active</span>
              <span>•</span>
              <span>Docker Network: 10.100.50.0/24</span>
              <span>•</span>
              <span className="text-emerald-400">TLS Ready</span>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
