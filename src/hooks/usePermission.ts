import { useSelector } from 'react-redux';
import type { RootState } from '../store';
import {     Permission } from '../types/permissions'; 

export const usePermission = (permission: Permission): boolean => {
  const permissions = useSelector((state: RootState) => state.auth.permissions);
  return permissions.includes(permission);
};