  // Inicializar la barra lateral
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems);
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, {});
});

//FUNCION PARA EL HEADER DE LALS VISTAS.

class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
<header id="header" class="page-topbar">
    <!-- encabezado logo-->
    <!-- Navbar -->
    <nav>
    <div class="nav-wrapper">
        <a href="#" class="brand-logo">Mi Proyecto</a>
        <a href="#" data-target="mobile-demo" class="sidenav-trigger"><span class="material-symbols-outlined">menu</span></a>
        
        <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a href="#"><i class="material-symbols-outlined">home</i> Inicio</a></li>
            <li><a href="#"><i class="material-symbols-outlined">info</i> Acerca de</a></li>
            <li><a href="#"><i class="material-symbols-outlined">call</i> Contacto</a></li>
            <li>
                <a href="#" class="dropdown-trigger" data-target="dropdown-login">
                    <i class="material-symbols-outlined">lock</i> Iniciar sesión
                    <i class="material-symbols-outlined right">arrow_drop_down</i>
                </a>
                <ul id="dropdown-login" class="dropdown-content">
                    <li><a href="#">Iniciar</a></li>
                    <li><a href="#">Registrarse</a></li>
                    <li><a href="#">Cerrar Sesión</a></li>
                </ul>
            </li>
        </ul>
    </div>
</nav>
   
    <!-- FIN DEL NAV encabezado logo-->


    <!-- MENU LATERAL IZQUIERDO -->
   
    <ul class="sidenav" id="mobile-demo">       
            <div class="row bordered">
              <div class="col s6 m6" style="display: flex; align-items: center;">
                <a href="home.html">
                <img src="img/Logo2.png" class="img-circle profile_img" style="max-width: 74%; height: auto;margin-right: 10px;">
                </a>
                <span id="usuario" class="hide-on-med-and-downx" style="color: #000;">USER NAME</span>
                <input type="hidden" id="hUsuario" />
              </div>
              <div class="col s6 m6">
                <div class="close-session">
                  <a href="#" onclick="logout();" class="green-text"><span class="material-symbols-outlined green-text right"
                      style="margin-right: 0px;">power_off</span><span class="textclose-sesion">Cerrar sesión</span></a>
                </div>
              </div>
            </div>
            <li><a href="#"><i class="material-symbols-outlined">home</i> Inicio</a></li>
            <li><a href="#"><i class="material-symbols-outlined">info</i> Acerca de</a></li>
            <li><a href="#"><i class="material-symbols-outlined">call</i> Contacto</a></li>
            <li>
                <a href="#" class="dropdown-trigger" data-target="dropdown-login">
                    <i class="material-symbols-outlined">lock</i> Iniciar sesión
                    <i class="material-symbols-outlined right">arrow_drop_down</i>
                </a>
                <ul id="dropdown-login" class="dropdown-content">
                    <li><a href="#">Iniciar</a></li>
                    <li><a href="#">Registrarse</a></li>
                    <li><a href="#">Cerrar Sesión</a></li>
                </ul>
            </li>
    </ul>
    <!-- FIN MENU LATERAL IZQUIERDO -->
  </header>
`;
  }
}
// template.innerHTML = document.body.appendChild(template.content);

customElements.define("my-header", MyHeader);
