/**
 * PolicyEngine Interface
 *
 * A generic, extensible interface for evaluating whether an Actor can perform a specific Action on a Resource.
 * This interface is intentionally industry-agnostic and client-agnostic.
 *
 * Terminology:
 * - Actor:    The entity attempting to perform an action (e.g., service, process, agent).
 * - Action:   The operation to be performed (e.g., "read", "write", "delete").
 * - Resource: The target of the action (e.g., object, record, entity).
 * - Context:  Additional data relevant to the evaluation (e.g., environment, metadata).
 *
 * No business, UI, or industry-specific logic is included.
 * This interface is designed for extensibility and plugin support.
 */

export interface PolicyEngine<Actor = unknown, Action = string, Resource = unknown, Context = unknown> {
  /**
   * Evaluates whether the given Actor can perform the specified Action on the Resource within the provided Context.
   *
   * @param actor    The entity attempting the action.
   * @param action   The action to be performed.
   * @param resource The target of the action.
   * @param context  Additional contextual information for evaluation.
   * @returns        A boolean indicating if the action is permitted.
   */
  evaluate(
    actor: Actor,
    action: Action,
    resource: Resource,
    context?: Context
  ): boolean;
}
