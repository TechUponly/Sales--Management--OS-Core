/**
 * Generic Audit and Compliance Logging Interfaces
 *
 * These interfaces define a generic, extensible audit logging module for the OS.
 * No business, industry, or UI logic is included.
 *
 * Terminology:
 * - Actor:     The entity performing the action.
 * - Action:    The operation performed.
 * - Target:    The object or resource affected.
 * - Timestamp: When the action occurred.
 * - Metadata:  Additional data for compliance or traceability.
 *
 * Designed for immutability and compliance support.
 */

/**
 * Represents a single audit record.
 */
export interface AuditRecord<Metadata = Record<string, unknown>> {
  /** Unique identifier for the audit record */
  id: string;
  /** The entity that performed the action */
  actor: string;
  /** The action performed */
  action: string;
  /** The target of the action */
  target: string;
  /** When the action occurred (ISO 8601 string) */
  timestamp: string;
  /** Additional metadata for compliance or traceability */
  metadata?: Metadata;
}

/**
 * Records audit events for compliance and traceability.
 */
export interface AuditLogger<Record extends AuditRecord = AuditRecord> {
  /**
   * Records a new audit event. Should be immutable once recorded.
   * @param record The audit record to log.
   */
  log(record: Record): void;
}

/**
 * Retrieves audit records for compliance and review.
 */
export interface AuditQuery<Record extends AuditRecord = AuditRecord> {
  /**
   * Retrieves audit records matching the given criteria.
   * @param criteria Arbitrary query criteria (implementation-defined).
   */
  query(criteria: Record<string, unknown>): Record[];
}
