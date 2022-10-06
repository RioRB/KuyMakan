class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <a tabindex="0" class="skip-link">Menuju ke konten</a>
    <header class="header">
        <div class="header__inner">
            <a href="/">KuyMakan</a>
        </div>
        <button aria-label="dropdown menu" id="hamburgerButton" class="header__menu">☰</button>
    </header>
    
    <nav id="navigationDrawer" class="nav">
        <ul class="nav__list">
            <li class="nav__item"><a href="/">Home</a></li>
            <li class="nav__item"><a href="#/favorite">Favorite</a></li>
            <li class="nav__item"><a target="_blank" rel="noreferrer" href="https://github.com/RioRB">About Us</a></li>
        </ul>
    </nav>
    `;
  }
}

customElements.define('app-bar', AppBar);
