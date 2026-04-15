class Nodo {
  constructor(titulo, link = '#') {
    this.titulo = titulo;
    this.link = link;
    this.hijos = [];
  }

  agregarHijo(nodo) {
    this.hijos.push(nodo);
  }
}

const raiz = new Nodo('Menu');

const perfil = new Nodo('Profile', '/profile');
const mensajes = new Nodo('Messages', '/messages');
const configuracion = new Nodo('Settings', '/settings');
const ayuda = new Nodo('Help', '/help');
const logout = new Nodo('Logout', '/logout');

configuracion.agregarHijo(new Nodo('Account', '/settings/account'));
configuracion.agregarHijo(new Nodo('Profile', '/settings/profile'));
configuracion.agregarHijo(new Nodo('Security & Privacy', '/settings/security'));
configuracion.agregarHijo(new Nodo('Password', '/settings/password'));
configuracion.agregarHijo(new Nodo('Notification', '/settings/notification'));

ayuda.agregarHijo(new Nodo('FAQs', '/help/faqs'));
ayuda.agregarHijo(new Nodo('Submit a Ticket', '/help/ticket'));
ayuda.agregarHijo(new Nodo('Network Status', '/help/network'));

raiz.agregarHijo(perfil);
raiz.agregarHijo(mensajes);
raiz.agregarHijo(configuracion);
raiz.agregarHijo(ayuda);
raiz.agregarHijo(logout);

export default raiz;