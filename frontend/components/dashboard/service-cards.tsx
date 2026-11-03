import React from "react";
import { ServiceItem } from "../../types/dashboard";
import { StatusBadge } from "../ui/badge";
import { IconServer, IconDatabase, IconExternalLink, IconActivity } from "../ui/icons";

interface ServiceCardsProps {
  services: ServiceItem[];
}

export function ServiceCards({ services }: ServiceCardsProps) {
  const getServiceIcon = (id: string) => {
    if (id.includes("db") || id.includes("postgres")) {
      return <IconDatabase className="w-5 h-5 text-emerald-400" />;
    }
    if (id.includes("api") || id.includes("backend")) {
      return <IconServer className="w-5 h-5 text-sky-400" />;
    }
    return <IconActivity className="w-5 h-5 text-indigo-400" />;
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-base font-semibold text-zinc-100 tracking-tight">
            Core Service Mesh
          </h2>
          <p className="text-xs text-zinc-400">
            Real-time status of services routed via Nginx & Docker Compose
          </p>
        </div>
        <span className="text-xs font-mono text-zinc-400 bg-zinc-900 px-2.5 py-1 rounded-md border border-zinc-800">
          3 / 3 Active
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {services.map((service) => (
          <div
            key={service.id}
            className="p-5 rounded-xl border border-zinc-800 bg-zinc-900/40 hover:bg-zinc-900/70 hover:border-zinc-700 transition-all duration-200 flex flex-col justify-between group"
          >
            <div>
              {/* Card Header */}
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-zinc-800/80 border border-zinc-700/50">
                    {getServiceIcon(service.id)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-zinc-100 group-hover:text-emerald-400 transition-colors">
                      {service.name}
                    </h3>
                    <div className="text-[11px] text-zinc-400">{service.role}</div>
                  </div>
                </div>
                <StatusBadge status={service.status} />
              </div>

              {/* Tech & Description */}
              <div className="space-y-2 mb-4">
                <div className="inline-block px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-800/80 text-zinc-300 border border-zinc-700/40">
                  {service.technology}
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed line-clamp-2">
                  {service.description}
                </p>
              </div>

              {/* Network Details */}
              <div className="space-y-1.5 p-3 rounded-lg bg-zinc-950/60 border border-zinc-800/80 font-mono text-xs mb-4">
                <div className="flex items-center justify-between">
                  <span className="text-zinc-400 text-[11px]">Hostname</span>
                  <span className="text-zinc-200 text-[11px] font-medium">{service.hostname}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-400 text-[11px]">Internal Port</span>
                  <span className="text-zinc-300 text-[11px]">:{service.internalPort}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-400 text-[11px]">Response Time</span>
                  <span className="text-emerald-400 text-[11px] font-semibold">{service.latencyMs}ms</span>
                </div>
              </div>
            </div>

            {/* Card Footer */}
            <div className="flex items-center justify-between pt-3 border-t border-zinc-800/60 text-xs">
              <span className="text-[11px] text-zinc-400">
                Uptime: <span className="text-zinc-300 font-mono">{service.uptime}</span>
              </span>
              <a
                href={service.hostname.includes("http") ? service.hostname : `http://${service.hostname}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-zinc-400 hover:text-emerald-400 font-medium transition-colors"
              >
                <span>Inspect</span>
                <IconExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

