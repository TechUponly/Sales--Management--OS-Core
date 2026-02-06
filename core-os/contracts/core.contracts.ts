
/**
 * Core Contracts Layer (Permanent Public Boundary)
 *
 * This module defines the authoritative, transport-agnostic contracts for all external communication
 * with the Core OS. These interfaces are designed for maximum backward compatibility, explicit intent,
 * and machine-first semantics. No business, transport, or implementation logic is included.
 *
 * Principles:
 * - Command Query Responsibility Segregation (CQRS)
 * - Explicit intent over implicit behavior
 * - Backward compatibility by default
 * - Machine-first, human-readable second
 * - Suitable for UI, backend, and AI agents equally
 */

/**
 * CoreCommand
 * Represents an immutable intent to change system state.
 * Used by any external system to request a state change in the OS.
 */
export interface CoreCommand<Payload = unknown, Context = Record<string, unknown>> {
  /** Immutable unique identifier for this command */
  readonly commandId: string;
  /** Semantic name describing the intent */
  readonly name: string;
  /** Arbitrary payload for the command */
  readonly payload: Payload;
  /** Identifier for the actor issuing the command */
  readonly actorId: string;
  /** ISO 8601 timestamp when the command was issued */
  readonly issuedAt: string;
  /** Key-value metadata for context */
  readonly context?: Context;
}

/**
 * CoreQuery
 * Represents an immutable, read-only request for information.
 * Used by any external system to query the OS without changing state.
 */
export interface CoreQuery<Criteria = Record<string, unknown>, Context = Record<string, unknown>> {
  /** Unique identifier for this query */
  readonly queryId: string;
  /** Semantic name describing the query intent */
  readonly name: string;
  /** Generic filter or criteria object */
  readonly criteria: Criteria;
  /** Identifier for the actor issuing the query */
  readonly actorId: string;
  /** ISO 8601 timestamp when the query was issued */
  readonly issuedAt: string;
  /** Key-value metadata for context */
  readonly context?: Context;
}

/**
 * CoreError
 * Structured, machine-readable error for all contract responses.
 * Enables robust error handling and diagnostics across all integrations.
 */
export interface CoreError {
  /** Machine-readable error code */
  readonly code: string;
  /** Human-readable error message */
  readonly message: string;
  /** Error category for classification */
  readonly category: 'VALIDATION' | 'AUTH' | 'POLICY' | 'SYSTEM' | 'UNKNOWN';
}

/**
 * CoreResult<T>
 * Generic result wrapper for all command/query responses.
 * Ensures explicit success/failure and structured error reporting.
 */
export interface CoreResult<T = unknown, Metadata = Record<string, unknown>> {
  /** Indicates if the operation was successful */
  readonly success: boolean;
  /** Optional result data */
  readonly data?: T;
  /** Optional structured error */
  readonly error?: CoreError;
  /** Key-value metadata for diagnostics or traceability */
  readonly metadata?: Metadata;
}

/**
 * CoreEnvelope<T>
 * Universal, immutable wrapper for all inbound/outbound communication with the OS.
 * Guarantees versioning, traceability, and correlation for every message.
 */
export interface CoreEnvelope<T = unknown> {
  /** Contract version identifier */
  readonly version: string;
  /** Correlation identifier for tracing requests/responses */
  readonly correlationId: string;
  /** Wrapped payload (command, query, result, etc.) */
  readonly payload: T;
  /** ISO 8601 timestamp for the envelope */
  readonly timestamp: string;
}
