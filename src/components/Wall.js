import { logOut, auth } from '../firebase/auth.js';
import { MakePost } from './MakePost.js';
import {
  getPost, deletePost, editPost,
} from '../firebase/post.js';

export const Wall = () => {
  const div = document.createElement('div');
  const title = document.createElement('h2');
  const exit = document.createElement('button');
  const containerPosts = document.createElement('div');
  const welcome = document.createElement('Bienvenido');

  div.classList.add('container-register');
  exit.classList = 'exit';

  welcome.textContent = 'Bienvenido';
  welcome.classList = 'welcome';

  title.textContent = 'Postalk';
  title.classList = ('postalkr');
  // eslint-disable-next-line max-len
  div.append(title, exit, MakePost(), containerPosts, welcome);

  exit.addEventListener('click', () => {
    logOut();
  });

  getPost((recorre) => {
    containerPosts.innerHTML = '';
    recorre.forEach((doc) => {
      console.log(doc.id, '=>', doc.data());
      const post = doc.data();
      const divPost = document.createElement('div');
      containerPosts.append(divPost);
      divPost.classList = 'divPost';
      const contenidoPost = document.createElement('textarea');
      contenidoPost.setAttribute('readonly', true);
      contenidoPost.textContent = post.mensaje;
      contenidoPost.classList = 'contenidoPost';
      containerPosts.classList = 'cajadecontenido'; // div
      post.classList = 'post';
      console.log(post);

      const buttonDelete = document.createElement('button');
      buttonDelete.classList = 'buttonDelete';

      const buttonEdit = document.createElement('button');

      buttonEdit.classList = 'buttonEdit';

      buttonEdit.addEventListener('click', () => {
        contenidoPost.removeAttribute('readonly');
        buttonEdit.style.display = 'none';

        const buttonSave = document.createElement('button');

        buttonSave.classList = 'buttonSave';

        buttonSave.addEventListener('click', () => {
          editPost(doc.id, { mensaje: contenidoPost.value });
        });
        const buttonCancel = document.createElement('button');

        buttonCancel.classList = 'buttonCancel';

        buttonCancel.addEventListener('click', (e) => {
          e.stopImmediatePropagation();
          buttonSave.style.display = 'none';
          buttonCancel.style.display = 'none';
          buttonEdit.style.display = 'inline';
          contenidoPost.setAttribute('readonly', true);
        });

        // al dar editar y cancelar se puede seguir comentando

        divPost.append(buttonSave, buttonCancel);
      });

      divPost.append(contenidoPost);

      if (auth.currentUser.uid === post.uid) {
        divPost.append(buttonDelete);
        divPost.append(buttonEdit);
        buttonDelete.addEventListener('click', async () => {
          await deletePost(doc.id);
        });
      }
      // boton cancelar editar
    });
  });

  return div;
};
// borrar y editar solamente pueda hacerlo el usuario
// boton cancelar edición
// si da tiempo agregar más css
