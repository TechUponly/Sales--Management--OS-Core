# PLATFORM_REFERENCE.md

---

## 1. What This Platform IS and IS NOT

**This platform IS:**
- A horizontal, industry-agnostic Core Operating System (OS) for multi-tenant, long-living, highly secure, and scalable solutions.
- A foundation for building configurable, governed, and extensible platforms for any industry without changing the core.
- A strict separation of concerns, enforcing boundaries between kernel, governance, UI shells, and business logic.

**This platform IS NOT:**
- An application, product, or industry-specific solution.
- A place for business logic, workflows, or domain rules outside plugins.
- A mutable or ad-hoc codebase; architecture and contracts are immutable.

---

## 2. Why the Architecture Is Immutable

- The architecture is locked to guarantee long-term stability, security, and extensibility.
- Immutability prevents domain creep, ensures tenant isolation, and enforces strict boundaries between platform and business logic.
- All extension and customization occur via contracts and plugins, never by modifying the core.

---

## 3. Responsibilities

**core-os:**
- Defines only contracts (interfaces/types) for extension, tenant context, and plugin boundaries.
- Is strictly immutable, industry-agnostic, and contains no business logic, UI, or domain code.

**control-plane:**
- Governs tenant lifecycle, configuration, policy enforcement, feature flags, and plugin orchestration.
- Enforces auditability, compliance, and runtime decisions for all tenants and plugins.

**app-shells (web & mobile):**
- Provide thin, config-driven UI containers.
- Render UI based solely on configuration, policy, and feature flags from the control-plane.
- Contain no business or domain logic.

**plugins:**
- The only mechanism for introducing business logic, domain rules, and industry features.
- Must strictly adhere to core-os contracts, be tenant-scoped, and fully removable.
- Never influence core-os, control-plane, or app-shells.

---

## 4. Mandatory DO / DO NOT Rules

**DO:**
- Build only on top of existing contracts and architecture.
- Implement business logic exclusively in plugins.
- Enforce tenant isolation in every operation.
- Use control-plane for all configuration, policy, and plugin lifecycle.
- Document all changes and follow governance review.

**DO NOT:**
- Change or refactor architecture, folder structure, or contracts.
- Add business logic, UI, or persistence to core-os or control-plane.
- Bypass tenant isolation, policy enforcement, or configuration governance.
- Interact directly with other plugins or app-shells from plugins.
- Introduce domain logic outside plugins.

---

## 5. Tenant Isolation Model

- All tenant-specific data, configuration, and policy reside in control-plane modules.
- Tenant context is explicitly required for every operation; never global or inferred.
- No cross-tenant access is possible at any layer.
- Plugins and app-shells must request tenant context from the control-plane, never from core-os or other plugins.

---

## 6. How Config, Policy, and Plugins Drive Behavior

- All platform behavior is driven by configuration, policy, and plugin activation, governed by the control-plane.
- Feature flags, workflows, and UI are enabled/disabled via configuration, never by code changes.
- Plugins are activated, configured, and orchestrated by the control-plane, not by modifying core or app-shells.
- Policy evaluation governs access to all actions and features.

---

## 7. The ONLY Allowed Flow to Build a Real Use Case

1. Define contracts in core-os (if not already present).
2. Implement a plugin in the plugins directory, strictly adhering to contracts.
3. Configure the plugin via control-plane configuration modules.
4. Set policy for plugin actions and features via control-plane policy modules.
5. Render UI in app-shells, driven by configuration, policy, and plugin activation—never by direct logic.

---

## 8. What Happens If Someone Bypasses the Flow

- Any bypass of this flow is a violation of platform governance.
- Violations trigger audit alerts, review, and possible rollback or removal of offending code.
- Platform integrity, tenant isolation, and future extensibility are compromised.
- Contributors responsible for violations may be sanctioned or removed from the project.

---

## 9. How to Go Live with a Real Industry Use Case WITHOUT Changing Core

- Identify the required domain logic and extension points.
- Implement the logic as a plugin, using only existing contracts.
- Configure and govern the plugin via control-plane modules.
- Set policies and feature flags as needed.
- UI shells render the use case based on configuration and policy, with no changes to core-os or architecture.

---

**This document is authoritative and non-negotiable. All contributors and teams must adhere strictly to these principles to ensure platform integrity, security, and long-term success.**
