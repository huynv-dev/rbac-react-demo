import { useDispatch } from 'react-redux';
import { setUser, setPermissions } from './store/authSlice';
import { ROLES } from './types/roles';
import { PermissionGate } from './components/PermissionGate';
import { useEffect } from 'react';
import { Menu } from './components/Menu';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const user = { id: '1', name: 'John Doe', role: 'editor' as const };
    dispatch(setUser(user));
    dispatch(setPermissions(ROLES[user.role].permissions));
  }, [dispatch]);

  return (
    <div>
      <h1>RBAC Demo</h1>
      <Menu />
      <PermissionGate permission="post:create">
        <button>Create Post</button>
      </PermissionGate>

      <PermissionGate permission="user:delete">
        <button>Delete User</button>
      </PermissionGate>
    </div>
  );
}

export default App;