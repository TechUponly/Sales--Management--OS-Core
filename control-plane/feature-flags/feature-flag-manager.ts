export interface FeatureFlag {
  flagId: string;
  enabled: boolean;
  tenantId?: string;
  createdAt: string;
  updatedAt?: string;
}

export interface FeatureFlagManager {
  setFlag(flag: FeatureFlag): void;
  getFlag(flagId: string, tenantId?: string): FeatureFlag;
  listFlags(tenantId?: string): FeatureFlag[];
}

export class FeatureFlagManagerImpl implements FeatureFlagManager {
  setFlag(flag: FeatureFlag): void {
    throw new Error('NotImplemented');
  }
  getFlag(flagId: string, tenantId?: string): FeatureFlag {
    throw new Error('NotImplemented');
  }
  listFlags(tenantId?: string): FeatureFlag[] {
    throw new Error('NotImplemented');
  }
}
