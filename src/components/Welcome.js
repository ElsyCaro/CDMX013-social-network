import { onNavigate } from '../main.js';

export const Welcome = () => {
  const div = document.createElement('div');
  const title = document.createElement('h2');
  const description = document.createElement('h3');
  const buttonLogin = document.createElement('button');
  const buttonRegister = document.createElement('button');
  div.classList.add('container-welcome');

  buttonLogin.textContent = 'Login';
  buttonLogin.classList.add('buttonLogin');
  buttonRegister.textContent = 'Sign Up';
  title.textContent = 'Postalk';
  buttonRegister.classList.add('buttonRegister');
  title.classList = ('postalk');
  description.textContent = 'Recomienda tu podcast favorito, likea y comenta';
  description.classList = ('description');

  buttonLogin.addEventListener('click', () => {
    onNavigate('/login');
  });
  buttonRegister.addEventListener('click', () => {
    onNavigate('/register');
  });

  div.append(title, description, buttonLogin, buttonRegister);

  return div;
};
