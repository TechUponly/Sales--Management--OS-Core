export interface AuditEvent {
  eventId: string;
  type: string;
  actorId?: string;
  tenantId?: string;
  timestamp: string;
  details?: Record<string, any>;
}

export interface AuditLogger {
  logEvent(event: AuditEvent): void;
  getEvents(filter?: Record<string, any>): AuditEvent[];
}

export class AuditLoggerImpl implements AuditLogger {
  logEvent(event: AuditEvent): void {
    throw new Error('NotImplemented');
  }
  getEvents(filter?: Record<string, any>): AuditEvent[] {
    throw new Error('NotImplemented');
  }
}
