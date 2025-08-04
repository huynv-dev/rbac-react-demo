import { Permission } from '../types/permissions';

export interface MenuItem {
  label: string;
  path: string;
  permission?: Permission; // optional, nếu không có nghĩa là public
}

export const menuItems: MenuItem[] = [
  { label: 'Dashboard', path: '/' },
  { label: 'Users', path: '/users', permission: 'user:read' },
  { label: 'Create Post', path: '/posts/create', permission: 'post:create' },
  { label: 'All Posts', path: '/posts', permission: 'post:read' },
];