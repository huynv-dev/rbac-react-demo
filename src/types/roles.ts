import type { Permission } from "./permissions";

export type Role = 'admin' | 'editor' | 'viewer';

export interface RoleDefinition {
  name: Role;
  permissions: Permission[];
}

export const ROLES: Record<Role, RoleDefinition> = {
  admin: {
    name: 'admin',
    permissions: [
      'user:create', 'user:read', 'user:update', 'user:delete',
      'post:create', 'post:read', 'post:update', 'post:delete',
    ],
  },
  editor: {
    name: 'editor',
    permissions: ['post:create', 'post:read', 'post:update'],
  },
  viewer: {
    name: 'viewer',
    permissions: ['post:read'],
  },
};