export interface ManagedConfig {
  configId: string;
  version: string;
  data: Record<string, any>;
  createdAt: string;
  updatedAt?: string;
}

export interface ConfigManager {
  registerConfig(config: ManagedConfig): void;
  updateConfig(configId: string, config: ManagedConfig): void;
  getConfig(configId: string, version?: string): ManagedConfig;
  listConfigVersions(configId: string): string[];
}

export class ConfigManagerImpl implements ConfigManager {
  registerConfig(config: ManagedConfig): void {
    throw new Error('NotImplemented');
  }
  updateConfig(configId: string, config: ManagedConfig): void {
    throw new Error('NotImplemented');
  }
  getConfig(configId: string, version?: string): ManagedConfig {
    throw new Error('NotImplemented');
  }
  listConfigVersions(configId: string): string[] {
    throw new Error('NotImplemented');
  }
}
