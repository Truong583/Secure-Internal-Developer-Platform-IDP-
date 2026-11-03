"use client";

import React, { useState } from "react";
import {
  IconSecurity,
  IconActivity,
  IconServer,
  IconExternalLink,
  IconChevronRight,
  IconTerminal,
} from "../../components/ui/icons";
import { StatusBadge } from "../../components/ui/badge";
import {
  AUDIT_LOGS,
  PLATFORM_USERS,
  NGINX_ROUTES,
  CORE_SERVICES,
} from "../../lib/mock-data";
import type { AuditLogEntry } from "../../types/dashboard";

export default function AdminDashboardPage() {
  const [activeSection, setActiveSection] = useState("overview");

  return (
    <div className="flex h-screen overflow-hidden bg-zinc-950 font-sans text-zinc-100">
      {/* ── Admin Sidebar ── */}
      <aside className="w-64 flex-shrink-0 border-r border-zinc-800 bg-zinc-950/80 backdrop-blur-md flex flex-col justify-between p-4">
        <div>
          {/* Admin Brand - khác biệt với Web Portal bằng màu Amber */}
          <div className="flex items-center gap-3 px-3 py-3 mb-6">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400">
              <IconSecurity className="w-5 h-5" />
            </div>
            <div>
              <div className="font-semibold text-sm tracking-tight text-zinc-100 flex items-center gap-2">
                IDP Admin
                <span className="text-[10px] font-mono uppercase bg-amber-500/10 text-amber-400 px-1.5 py-0.5 rounded border border-amber-500/20">
                  Admin
                </span>
              </div>
              <div className="text-xs text-zinc-400 font-mono">System Management</div>
            </div>
          </div>

          {/* Admin Navigation */}
          <div className="space-y-1">
            <div className="px-3 text-[11px] font-semibold uppercase tracking-wider text-zinc-400 mb-2">
              Administration
            </div>
            <nav className="space-y-1">
              {[
                { id: "overview", label: "System Overview" },
                { id: "users", label: "User Management" },
                { id: "routes", label: "Nginx Routes" },
                { id: "audit", label: "Audit Logs" },
                { id: "security", label: "Security Policies" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium transition-all ${
                    activeSection === item.id
                      ? "bg-zinc-800/80 text-zinc-100 border border-zinc-700/60"
                      : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/60"
                  }`}
                >
                  <span>{item.label}</span>
                  {activeSection === item.id && (
                    <IconChevronRight className="w-3.5 h-3.5 text-amber-400" />
                  )}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Link quay về Web Portal */}
        <a
          href="/"
          className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-xs text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/60 border border-zinc-800/60 transition-all"
        >
          <IconExternalLink className="w-3.5 h-3.5" />
          <span>Back to Web Portal</span>
        </a>
      </aside>

      {/* ── Main Content ── */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Admin Header - khác biệt bằng badge ADMIN và màu amber */}
        <header className="h-16 border-b border-zinc-800 bg-zinc-950/70 backdrop-blur-md px-6 flex items-center justify-between sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <h1 className="font-semibold text-zinc-100 tracking-tight text-sm">
              Administration Console
            </h1>
            <span className="text-[10px] font-mono uppercase bg-amber-500/10 text-amber-400 px-2 py-0.5 rounded-full border border-amber-500/20">
              admin.truongtest.id.vn
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[11px] font-mono text-zinc-400">
              Logged in as <span className="text-amber-400 font-semibold">Admin</span>
            </span>
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-600 to-orange-400 flex items-center justify-center text-xs font-bold text-zinc-950 font-mono">
              PT
            </div>
          </div>
        </header>

        {/* Scrollable Body */}
        <main className="flex-1 overflow-y-auto px-6 py-8 space-y-8">
          {/* Admin Welcome Banner */}
          <div className="p-6 rounded-xl border border-amber-500/20 bg-gradient-to-r from-amber-500/5 via-zinc-900/50 to-zinc-950/80">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <h2 className="text-xl font-bold tracking-tight text-zinc-100 flex items-center gap-3">
                  Admin Control Panel
                  <StatusBadge status="UP" label="Authorized" />
                </h2>
                <p className="text-sm text-zinc-400">
                  Manage platform users, Nginx routing rules, security policies, and audit trail.
                </p>
              </div>
              <div className="text-xs font-mono text-zinc-400 border-t md:border-t-0 md:border-l border-zinc-800 pt-3 md:pt-0 md:pl-6">
                <div className="text-[10px] text-zinc-400 uppercase">Access Level</div>
                <div className="text-amber-400 font-bold text-sm">Super Administrator</div>
              </div>
            </div>
          </div>

          {/* ── Section: Nginx Routing Table ── */}
          <div className="p-5 rounded-xl border border-zinc-800 bg-zinc-900/40 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-zinc-800/80 border border-zinc-700/50 text-sky-400">
                  <IconServer className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-zinc-100">Nginx Reverse Proxy Routes</h3>
                  <p className="text-[11px] text-zinc-400">Subdomain → Container mapping configuration</p>
                </div>
              </div>
              <span className="text-[11px] font-mono text-emerald-400">{NGINX_ROUTES.length} routes active</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-zinc-800 text-zinc-400 text-left">
                    <th className="pb-2 pr-4 font-medium">Subdomain</th>
                    <th className="pb-2 pr-4 font-medium">Proxy Target</th>
                    <th className="pb-2 pr-4 font-medium">Port</th>
                    <th className="pb-2 pr-4 font-medium">TLS/SSL</th>
                    <th className="pb-2 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800/60">
                  {NGINX_ROUTES.map((route) => (
                    <tr key={route.subdomain} className="hover:bg-zinc-800/30 transition-colors">
                      <td className="py-2.5 pr-4">
                        <span className="font-mono text-zinc-200 font-medium">{route.subdomain}</span>
                      </td>
                      <td className="py-2.5 pr-4 font-mono text-zinc-400">{route.target}</td>
                      <td className="py-2.5 pr-4 font-mono text-zinc-400">:{route.port}</td>
                      <td className="py-2.5 pr-4">
                        <span className={`text-[11px] px-1.5 py-0.5 rounded font-mono ${route.ssl ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" : "bg-zinc-800 text-zinc-400 border border-zinc-700"}`}>
                          {route.ssl ? "ENABLED" : "PENDING"}
                        </span>
                      </td>
                      <td className="py-2.5">
                        <StatusBadge status={route.status} size="sm" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* ── Two Columns: Users + Audit ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* User Management */}
            <div className="p-5 rounded-xl border border-zinc-800 bg-zinc-900/40 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-zinc-100">Platform Users</h3>
                <span className="text-[11px] font-mono text-zinc-400">{PLATFORM_USERS.length} accounts</span>
              </div>

              <div className="space-y-2">
                {PLATFORM_USERS.map((user) => (
                  <div
                    key={user.id}
                    className="flex items-center justify-between p-3 rounded-lg bg-zinc-950/60 border border-zinc-800/80 hover:border-zinc-700 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold font-mono ${
                        user.role === "Admin"
                          ? "bg-gradient-to-tr from-amber-600 to-orange-400 text-zinc-950"
                          : user.role === "Developer"
                          ? "bg-gradient-to-tr from-sky-600 to-blue-400 text-zinc-950"
                          : "bg-zinc-700 text-zinc-300"
                      }`}>
                        {user.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                      </div>
                      <div>
                        <div className="text-xs font-medium text-zinc-200">{user.name}</div>
                        <div className="text-[11px] font-mono text-zinc-400">{user.email}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded border ${
                        user.role === "Admin"
                          ? "bg-amber-500/10 text-amber-400 border-amber-500/20"
                          : user.role === "Developer"
                          ? "bg-sky-500/10 text-sky-400 border-sky-500/20"
                          : "bg-zinc-800 text-zinc-400 border-zinc-700"
                      }`}>
                        {user.role}
                      </span>
                      <StatusBadge
                        status={user.status === "Active" ? "UP" : "DOWN"}
                        label={user.status}
                        size="sm"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Security Audit Logs */}
            <div className="p-5 rounded-xl border border-zinc-800 bg-zinc-900/40 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-zinc-800/80 border border-zinc-700/50 text-amber-400">
                    <IconActivity className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-semibold text-zinc-100">Security Audit Trail</h3>
                </div>
                <span className="text-[11px] font-mono text-zinc-400">{AUDIT_LOGS.length} events</span>
              </div>

              <div className="space-y-1 divide-y divide-zinc-800/60">
                {AUDIT_LOGS.map((log) => (
                  <AuditRow key={log.id} log={log} />
                ))}
              </div>
            </div>
          </div>

          {/* ── Docker Compose Service Map ── */}
          <div className="p-5 rounded-xl border border-zinc-800 bg-zinc-900/40 space-y-4">
            <h3 className="text-sm font-semibold text-zinc-100">Docker Compose Service Registry</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {CORE_SERVICES.map((svc) => (
                <div
                  key={svc.id}
                  className="p-4 rounded-lg bg-zinc-950/60 border border-zinc-800/80 space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold text-zinc-200">{svc.name}</span>
                    <StatusBadge status={svc.status} size="sm" />
                  </div>
                  <div className="text-[11px] font-mono text-zinc-400 space-y-1">
                    <div>Host: {svc.hostname}</div>
                    <div>Port: :{svc.internalPort}</div>
                    <div>Tech: {svc.technology}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Admin Footer */}
          <footer className="pt-6 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-400 font-mono">
            <div className="flex items-center gap-2">
              <IconTerminal className="w-3.5 h-3.5 text-amber-400" />
              <span>Secure IDP • Admin Console • admin.truongtest.id.vn</span>
            </div>
            <div className="text-[11px]">
              Role: Super Administrator • Session: Encrypted
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}

// ── Sub-component: Audit Log Row ──
function AuditRow({ log }: { log: AuditLogEntry }) {
  const severityStyles = {
    INFO: "text-sky-400 bg-sky-500/10 border-sky-500/20",
    WARNING: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    CRITICAL: "text-rose-400 bg-rose-500/10 border-rose-500/20",
  };

  return (
    <div className="py-2.5 space-y-1">
      <div className="flex items-center justify-between gap-2">
        <span className="text-xs text-zinc-200 font-medium line-clamp-1">{log.action}</span>
        <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded border shrink-0 ${severityStyles[log.severity]}`}>
          {log.severity}
        </span>
      </div>
      <div className="flex items-center gap-3 text-[11px] font-mono text-zinc-400">
        <span>{log.actor}</span>
        <span>•</span>
        <span>{log.ip}</span>
        <span>•</span>
        <span>{log.timestamp}</span>
      </div>
    </div>
  );
}

