import { Welcome } from './components/Welcome.js';
import { Login } from './components/Login.js';
import { Register } from './components/Register.js';

const root = document.getElementById('root');
const routes = {
  '/': Welcome,
  '/login': Login,
  '/register': Register,
};

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  root.removeChild(root.firstChild);
  root.appendChild(routes[pathname]());
};

window.onpopstate = () => {
  root.removeChild(root.firstChild);
  root.append(components());
};

const components = routes[window.location.pathname];

root.appendChild(components());
