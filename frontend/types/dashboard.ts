export type ServiceHealthStatus = "UP" | "DEGRADED" | "DOWN" | "STARTING";

export interface ServiceItem {
  id: string;
  name: string;
  role: string;
  technology: string;
  hostname: string;
  internalPort: number;
  status: ServiceHealthStatus;
  latencyMs: number;
  uptime: string;
  lastChecked: string;
  description: string;
}

export interface MetricCardData {
  title: string;
  value: string;
  trend: string;
  trendDirection: "up" | "down" | "neutral";
  caption: string;
  iconName: string;
}

export interface DeploymentLog {
  id: string;
  commitHash: string;
  commitMessage: string;
  author: string;
  branch: string;
  environment: "Production" | "Staging";
  status: "SUCCESS" | "FAILED" | "IN_PROGRESS";
  duration: string;
  timestamp: string;
}

export interface InfrastructureNode {
  hostname: string;
  os: string;
  ip: string;
  cpuUsagePercent: number;
  memoryUsedGb: number;
  memoryTotalGb: number;
  diskUsedGb: number;
  diskTotalGb: number;
  dockerVersion: string;
  containerCount: {
    running: number;
    stopped: number;
    total: number;
  };
}

// ── Admin-specific types ──

export interface AuditLogEntry {
  id: string;
  action: string;
  actor: string;
  target: string;
  severity: "INFO" | "WARNING" | "CRITICAL";
  timestamp: string;
  ip: string;
}

export interface PlatformUser {
  id: string;
  name: string;
  email: string;
  role: "Admin" | "Developer" | "Viewer";
  status: "Active" | "Inactive";
  lastLogin: string;
}

export interface NginxRoute {
  subdomain: string;
  target: string;
  port: number;
  ssl: boolean;
  status: ServiceHealthStatus;
}

