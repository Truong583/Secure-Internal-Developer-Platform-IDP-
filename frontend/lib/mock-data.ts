import {
  ServiceItem,
  MetricCardData,
  DeploymentLog,
  InfrastructureNode,
  AuditLogEntry,
  PlatformUser,
  NginxRoute,
} from "../types/dashboard";

/**
 * DEMO_DATA: Mock data used for frontend visualization.
 * In production, these values will be replaced by real-time telemetry from Spring Boot / Actuator API.
 */
export const CORE_SERVICES: ServiceItem[] = [
  {
    id: "web-frontend",
    name: "Web Frontend",
    role: "User Facing Portal",
    technology: "Next.js 16 (React 19, TypeScript)",
    hostname: "truongtest.id.vn",
    internalPort: 3000,
    status: "UP",
    latencyMs: 14,
    uptime: "99.98%",
    lastChecked: "Just now",
    description: "Main developer platform portal and self-service catalog interface.",
  },
  {
    id: "backend-api",
    name: "Backend Core API",
    role: "Business & Security Layer",
    technology: "Spring Boot 4.1 (Java 21, JPA)",
    hostname: "api.truongtest.id.vn",
    internalPort: 8000,
    status: "UP",
    latencyMs: 38,
    uptime: "99.95%",
    lastChecked: "Just now (/api/health)",
    description: "RESTful API orchestrating platform services, auth tokens, and audit logs.",
  },
  {
    id: "postgres-db",
    name: "PostgreSQL Database",
    role: "Relational Persistence",
    technology: "PostgreSQL 16 (Alpine)",
    hostname: "db (Docker network)",
    internalPort: 5432,
    status: "UP",
    latencyMs: 4,
    uptime: "100.0%",
    lastChecked: "Just now (pg_isready)",
    description: "Primary database storing developer profiles, configurations, and state.",
  },
];

export const SYSTEM_METRICS: MetricCardData[] = [
  {
    title: "Platform Status",
    value: "100% Operational",
    trend: "3 / 3 Services Healthy",
    trendDirection: "up",
    caption: "All ingress endpoints responding normally",
    iconName: "activity",
  },
  {
    title: "Global Uptime",
    value: "99.98%",
    trend: "+0.02% this month",
    trendDirection: "up",
    caption: "Calculated over last 30 rolling days",
    iconName: "clock",
  },
  {
    title: "Deployments Today",
    value: "14 Runs",
    trend: "100% Success Rate",
    trendDirection: "neutral",
    caption: "Triggered via GitHub Actions CI/CD",
    iconName: "rocket",
  },
  {
    title: "Security & DevSecOps",
    value: "Grade A",
    trend: "Zero Critical Vulnerabilities",
    trendDirection: "up",
    caption: "Least-privilege non-root containers active",
    iconName: "shield",
  },
];

export const RECENT_DEPLOYMENTS: DeploymentLog[] = [
  {
    id: "dep-001",
    commitHash: "b87b9c4",
    commitMessage: "Update HealthController with database connectivity verification",
    author: "Pham Dinh Truong",
    branch: "main",
    environment: "Production",
    status: "SUCCESS",
    duration: "1m 42s",
    timestamp: "25 minutes ago",
  },
  {
    id: "dep-002",
    commitHash: "bb89b54",
    commitMessage: "Remove cd command from health-check.sh for system diagnostics",
    author: "Pham Dinh Truong",
    branch: "main",
    environment: "Production",
    status: "SUCCESS",
    duration: "48s",
    timestamp: "2 hours ago",
  },
  {
    id: "dep-003",
    commitHash: "103ecd6",
    commitMessage: "Enhance automated deployment process in GitHub Actions maven.yml",
    author: "Pham Dinh Truong",
    branch: "main",
    environment: "Production",
    status: "SUCCESS",
    duration: "2m 10s",
    timestamp: "Yesterday",
  },
];

export const HOST_INFRASTRUCTURE: InfrastructureNode = {
  hostname: "ubuntu-vps-idp-prod",
  os: "Ubuntu 24.04 LTS (x86_64)",
  ip: "10.100.50.1 / Public Ingress",
  cpuUsagePercent: 28,
  memoryUsedGb: 1.8,
  memoryTotalGb: 4.0,
  diskUsedGb: 12.4,
  diskTotalGb: 50.0,
  dockerVersion: "Docker Engine 27.2 / Compose v2.29",
  containerCount: {
    running: 3,
    stopped: 0,
    total: 3,
  },
};


// ── ADMIN DEMO_DATA ──
// Data below powers the Admin Console (admin.truongtest.id.vn)
// Clearly separated from Web Portal data above.

export const AUDIT_LOGS: AuditLogEntry[] = [
  {
    id: "audit-001",
    action: "docker compose up -d --build",
    actor: "GitHub Actions (CI/CD)",
    target: "backend, db",
    severity: "INFO",
    timestamp: "2 minutes ago",
    ip: "140.82.115.0 (GitHub)",
  },
  {
    id: "audit-002",
    action: "SSH login as deploy user",
    actor: "Pham Dinh Truong",
    target: "ubuntu-vps-idp-prod",
    severity: "INFO",
    timestamp: "15 minutes ago",
    ip: "113.161.x.x",
  },
  {
    id: "audit-003",
    action: "Database password rotation attempted",
    actor: "System (cron)",
    target: "PostgreSQL idp_db",
    severity: "WARNING",
    timestamp: "1 hour ago",
    ip: "10.100.50.2 (internal)",
  },
  {
    id: "audit-004",
    action: "Failed SSH login attempt (root)",
    actor: "Unknown",
    target: "ubuntu-vps-idp-prod:22",
    severity: "CRITICAL",
    timestamp: "3 hours ago",
    ip: "185.220.101.x (TOR exit)",
  },
  {
    id: "audit-005",
    action: "Nginx configuration reloaded",
    actor: "Pham Dinh Truong",
    target: "/etc/nginx/sites-enabled/*",
    severity: "INFO",
    timestamp: "Yesterday",
    ip: "113.161.x.x",
  },
];

export const PLATFORM_USERS: PlatformUser[] = [
  {
    id: "user-001",
    name: "Pham Dinh Truong",
    email: "tphamdinh583@gmail.com",
    role: "Admin",
    status: "Active",
    lastLogin: "Just now",
  },
  {
    id: "user-002",
    name: "CI/CD Bot",
    email: "actions@github.com",
    role: "Developer",
    status: "Active",
    lastLogin: "2 minutes ago",
  },
  {
    id: "user-003",
    name: "Reviewer Account",
    email: "reviewer@truongtest.id.vn",
    role: "Viewer",
    status: "Inactive",
    lastLogin: "3 days ago",
  },
];

export const NGINX_ROUTES: NginxRoute[] = [
  {
    subdomain: "truongtest.id.vn",
    target: "http://127.0.0.1:3000",
    port: 3000,
    ssl: false,
    status: "UP",
  },
  {
    subdomain: "api.truongtest.id.vn",
    target: "http://127.0.0.1:8000",
    port: 8000,
    ssl: false,
    status: "UP",
  },
  {
    subdomain: "admin.truongtest.id.vn",
    target: "http://127.0.0.1:3000/admin",
    port: 3000,
    ssl: false,
    status: "UP",
  },
];
