class HeroBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div id="hero" class="hero">
        <div class="hero__inner">
            <h1 class="hero__title">KuyMakan</h1>
            <p class="hero__tagline">Cari Tempat Makan Favoritmu disini yuk!</p>
        </div>
    </div>
    `;
  }
}

customElements.define('hero-bar', HeroBar);
