import type { ReactNode } from 'react';
import { usePermission } from '../hooks/usePermission';
import { Permission } from '../types/permissions';

interface Props {
  permission: Permission;
  fallback?: ReactNode;
  children: ReactNode;
}

export const PermissionGate = ({ permission, fallback = null, children }: Props) => {
  const hasPermission = usePermission(permission);
  return hasPermission ? <>{children}</> : <>{fallback}</>;
};