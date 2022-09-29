/* eslint-disable max-len */
import { onNavigate } from '../main.js';

export const Register = () => {
  const div = document.createElement('div');
  const title = document.createElement('h2');
  const descriptionRegister = document.createElement('h3');
  const button = document.createElement('button');
  const buttonBack = document.createElement('button');
  const buttonVincule = document.createElement('button');
  const inputEmail = document.createElement('input');
  const inputPass = document.createElement('input');
  const inputConfirm = document.createElement('input');
  const imageGoogle = document.createElement('img');
  div.classList.add('container-Create');

  button.textContent = 'Registrar';
  button.classList = ('button');
  buttonBack.textContent = 'Menu de inicio';
  buttonVincule.textContent = 'Google';
  buttonVincule.classList = ('buttonVincule');
  buttonBack.classList = ('buttonBack');
  button.classList = ('button');
  title.textContent = 'Postalk';
  title.classList = ('register');
  inputEmail.textContent = ('input');
  inputEmail.classList = ('inputEmail');
  inputPass.textContent = ('input');
  inputPass.classList = ('inputPass');
  inputConfirm.textContent = ('input');
  inputConfirm.classList = ('inputConfirm');
  descriptionRegister.textContent = 'Crea tu cuenta';
  descriptionRegister.classList = ('descriptionRegister');
  inputEmail.placeholder = 'Email';
  inputPass.placeholder = 'Contraseña';
  inputConfirm.placeholder = 'Confirmar contraseña';
  imageGoogle.setAttribute('src', 'https://i.postimg.cc/tJh7mK8T/google.png'); // Se agrego la imagen en vez del boton//
  imageGoogle.classList = ('buttongoogler');

  button.addEventListener('click', () => {
    onNavigate('/');
  });
  buttonBack.addEventListener('click', () => {
    onNavigate('/');
  });

  imageGoogle.addEventListener('click', () => {

  });

  div.append(title, inputEmail, inputPass, inputConfirm, button, buttonBack, descriptionRegister, imageGoogle);

  return div;
};
