/**
 * Plugin SDK Interfaces for Sales Management OS Core
 *
 * This SDK defines the minimal, foolproof contract for external modules (plugins) to extend the Core OS
 * without direct access to or coupling with core-os internals. Plugins interact only via exposed kernel capabilities
 * through a read-only, capability-based PluginContext. No business, BFSI, or implementation logic is included.
 *
 * Principles:
 * - Plugin isolation and safety
 * - Capability-based, read-only context
 * - No direct imports from core-os internals
 * - Lifecycle managed via initialize()
 */

/**
 * Read-only capability context provided to plugins for safe interaction with the OS.
 * All references are read-only and expose only kernel capabilities, not internals.
 */
export interface PluginContext {
  /** Read-only reference to the event bus capability */
  readonly eventBus: unknown;
  /** Read-only reference to the policy engine capability */
  readonly policyEngine: unknown;
  /** Read-only reference to the entity registry capability */
  readonly entityRegistry: unknown;
  /** Read-only reference to the audit logger capability */
  readonly auditLogger: unknown;
}

/**
 * CorePlugin
 * Minimal contract for any external module to extend the OS safely.
 * Plugins are identified by id, name, and version, and are initialized with a PluginContext.
 */
export interface CorePlugin {
  /** Unique plugin identifier */
  readonly id: string;
  /** Human-readable plugin name */
  readonly name: string;
  /** Semantic version of the plugin */
  readonly version: string;
  /**
   * Lifecycle method to initialize the plugin with kernel capabilities.
   * @param context Read-only capability context
   */
  initialize(context: PluginContext): void;
}
