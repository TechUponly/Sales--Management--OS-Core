/**
 * Generic Entity Registry Interfaces
 *
 * These interfaces define a generic, extensible entity registry for identifying and registering entities in the OS.
 * No business, industry, or persistence logic is included.
 *
 * Terminology:
 * - Entity:   Any identifiable object managed by the OS.
 * - Type:     The classification or kind of the entity.
 * - Metadata: Arbitrary key-value data describing the entity.
 *
 * Designed for future extension and dynamic entity registration.
 */

/**
 * Represents a generic entity with an id, type, and metadata.
 */
export interface BaseEntity<Metadata = Record<string, unknown>> {
  /** Unique identifier for the entity */
  id: string;
  /** Type or classification of the entity */
  type: string;
  /** Arbitrary metadata associated with the entity */
  metadata?: Metadata;
}

/**
 * Interface for registering and retrieving entity definitions.
 */
export interface EntityRegistry<Entity extends BaseEntity = BaseEntity> {
  /**
   * Registers a new entity definition in the registry.
   * @param entity The entity definition to register.
   */
  register(entity: Entity): void;

  /**
   * Retrieves an entity definition by its unique id.
   * @param id The unique identifier of the entity.
   */
  getById(id: string): Entity | undefined;

  /**
   * Retrieves all registered entity definitions.
   */
  getAll(): Entity[];
}
