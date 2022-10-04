import { Welcome } from './components/Welcome.js';
import { Login } from './components/Login.js';
import { Register } from './components/Register.js';
import { Wall } from './components/wall.js';
import { userObserver } from './firebase/auth.js';

const root = document.getElementById('root');
const routes = {
  '/': Welcome, // solo / para welcome
  '/login': Login,
  '/register': Register,
  '/wall': Wall,
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

const component = routes[window.location.pathname];

window.onpopstate = () => {
  root.removeChild(root.firstChild);
  root.append(component());
};

root.appendChild(component());

userObserver((user) => {
  console.log(user);
  if (user) {
    onNavigate('/wall');
  } else {
    onNavigate('/');
  }
});

// hacer parte de login
