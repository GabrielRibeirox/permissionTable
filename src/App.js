import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { PermissionTable } from './pages/permissionTable/permissionTable';
import './global.scss';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={PermissionTable} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
