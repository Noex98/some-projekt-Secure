class MyHeader extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render() {
        this.innerHTML = `
        <img class="logo" src="media/images/mediacLogo.webp" alt="Logo">
        `
    }
}
customElements.define('my-header', MyHeader);