/**
 * Generic Event Bus Interfaces
 *
 * These interfaces define a generic, extensible event bus for the OS.
 * No business, industry, or UI logic is included.
 *
 * Terminology:
 * - Event:     Something that happened in the OS.
 * - Payload:   Arbitrary data describing the event.
 * - Timestamp: When the event occurred.
 * - Source:    The originator of the event.
 *
 * Designed for plugin and extension support.
 */

/**
 * Represents a generic domain event in the OS.
 */
export interface DomainEvent<Payload = unknown, Source = string> {
  /** Unique name or type of the event */
  type: string;
  /** Arbitrary event payload */
  payload: Payload;
  /** When the event occurred (ISO 8601 string) */
  timestamp: string;
  /** The originator of the event */
  source?: Source;
}

/**
 * Handles a specific type of event.
 */
export interface EventHandler<Event extends DomainEvent = DomainEvent> {
  /**
   * Handles the given event.
   * @param event The event to handle.
   */
  handle(event: Event): void;
}

/**
 * Publishes events and allows handlers to subscribe.
 */
export interface EventBus<Event extends DomainEvent = DomainEvent> {
  /**
   * Publishes an event to all subscribed handlers.
   * @param event The event to publish.
   */
  publish(event: Event): void;

  /**
   * Subscribes a handler to events of a specific type.
   * @param type The event type to subscribe to.
   * @param handler The handler to invoke when the event is published.
   */
  subscribe(type: string, handler: EventHandler<Event>): void;
}
