/**
 * Generic State Machine Interfaces
 *
 * These interfaces define a generic, extensible workflow module for representing state machines
 * applicable to any entity. No business, industry, or UI logic is included.
 *
 * Terminology:
 * - Entity:     The object whose state is being managed.
 * - State:      A possible state for the entity.
 * - Transition: A possible movement from one state to another, triggered by an event.
 * - Event:      The trigger that causes a transition.
 *
 * Designed for future extension via configuration or plugins.
 */

/**
 * Represents a possible state in the state machine.
 */
export interface State {
  /** Unique identifier for the state */
  id: string;
  /** Optional human-readable name or description */
  name?: string;
}

/**
 * Represents a transition between two states, triggered by an event.
 */
export interface Transition<Event = string> {
  /** The state from which the transition starts */
  from: string;
  /** The state to which the transition leads */
  to: string;
  /** The event that triggers the transition */
  event: Event;
}

/**
 * Generic StateMachine interface for managing states and transitions of an entity.
 */
export interface StateMachine<Entity = unknown, Event = string> {
  /** List of all possible states */
  states: State[];
  /** List of all possible transitions */
  transitions: Transition<Event>[];

  /**
   * Returns the current state of the given entity.
   * @param entity The entity whose state is being queried.
   */
  getCurrentState(entity: Entity): State;

  /**
   * Returns all possible transitions for the given entity from its current state.
   * @param entity The entity whose possible transitions are being queried.
   */
  getAvailableTransitions(entity: Entity): Transition<Event>[];
}
