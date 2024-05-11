document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  M.Sidenav.init(elems);  
});


//FUNCION PARA EL HEADER DE LALS VISTAS.

class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
<header id="header" class="page-topbar">

<nav>
<div class="nav-wrapper">
    <a href="#" class="brand-logo">Mi Proyecto</a>
    <a href="#" data-target="mobile-demo" class="sidenav-trigger"><span class="material-symbols-outlined">menu</span></a>
    <div id="buscador">
        <input class="uil uil-search-alt" data-role="none" id="Buscado-in" placeholder="Buscar" value=""
        autocomplete="off">
        <button id="btn-buscado" class="search-action ui-btn" onclick="javascript: Busqueda()">
            <i class="material-symbols-outlined">search</i>
          </button>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a href="#" id="inicio-link"><i class="material-symbols-outlined">home</i> Inicio</a></li>
            <li><a href="#" id="acerca-de-link"><i class="material-symbols-outlined">info</i> Acerca de</a></li>
            <li><a href="#" id="contacto-link"><i class="material-symbols-outlined">call</i> Contacto</a></li>        
            <li>
                <a href="#" class="dropdown-trigger" data-target="dropdown-login">
                    <i class="material-symbols-outlined">lock</i> Iniciar sesión
                    <i class="material-symbols-outlined right">arrow_drop_down</i>
                </a>
                <ul id="dropdown-login" class="dropdown-content">
                    <li><a href="#" id="login">Ingresar</a></li>
                    <li><a href="#" id="registro">Registrarse</a></li>
                    <li><a href="#">Cerrar Sesión</a></li>
                </ul>
            </li>
        </ul>
    </div>    
</div>
</nav>

<!-- MENU LATERAL IZQUIERDO -->
<!-- Sidenav -->
<ul class="sidenav" id="mobile-demo">
<li><a href="#" id="inicio-link"><i class="material-symbols-outlined">home</i> Inicio</a></li>
<li><a href="#" id="acerca-de-link"><i class="material-symbols-outlined">info</i> Acerca de</a></li>
<li><a href="#" id="contacto-link"><i class="material-symbols-outlined">call</i> Contacto</a></li>        
<li>
    <a href="#" class="dropdown-trigger" data-target="dropdown-login-mobile">
        <i class="material-symbols-outlined">lock</i> Iniciar sesión
        <i class="material-symbols-outlined right">arrow_drop_down</i>
    </a>
    <ul id="dropdown-login-mobile" class="dropdown-content">
        <li><a href="#" id="login-mobile">Ingresar</a></li>
        <li><a href="#" id="registro-mobile">Registrarse</a></li>
        <li><a href="#">Cerrar Sesión</a></li>
    </ul>
</li>
</ul>
<!-- FIN DEL MENU LATERAL IZQUIERDO -->
  </header>
`;
  }
}
// template.innerHTML = document.body.appendChild(template.content);

customElements.define("my-header", MyHeader);
