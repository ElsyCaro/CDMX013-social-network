import { logOut } from '../firebase/auth.js';
import { MakePost } from './MakePost.js';
import { getPost, deletePost, editPost } from '../firebase/post.js';

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
    console.log('Post nuevo');
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
      buttonDelete.textContent = 'Borrar';
      buttonDelete.classList = 'buttonDelete';
      buttonDelete.addEventListener('click', async () => {
        await deletePost(doc.id);
      });
      const buttonEdit = document.createElement('button');
      buttonEdit.textContent = 'editar comentario';
      buttonEdit.classList = 'buttonEdit';
      buttonEdit.addEventListener('click', () => {
        contenidoPost.removeAttribute('readonly');
        buttonEdit.style.display = 'none';

        const buttonSave = document.createElement('button');
        buttonSave.textContent = 'guardar';
        buttonSave.addEventListener('click', () => {
          editPost(doc.id, { mensaje: contenidoPost.value });
        });
        divPost.append(buttonSave);

        // editPost(doc.id, { mensaje: 'XD' });
      });

      divPost.append(contenidoPost, buttonDelete, buttonEdit);
    });
  });

  // funcion que recibe el snapshot ( como argumento una funcion que s encargue de tomar snapshot y utilizarla )
  return div;
};

// como pintar comentario 2 vias: hacer un nuevo elemento y eso vincularlo con la funcion, hacer un nuevo div
// hacer una condicional para que asocie el usuario con el mensaje y que aparezca arriba (fecha, manera ordenada)
//

// activar y desactivar input
// timespamt
//boton cancelar para editar post


//borrar y editar solamente pueda hacerlo el usuario
//boton cancelar edición
//si da tiempo agregar más css
