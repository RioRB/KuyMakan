class FooterBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer>
        <p>KuyMakan &#169; 2022</p>
    </footer>
    `;
  }
}

customElements.define('footer-bar', FooterBar);
