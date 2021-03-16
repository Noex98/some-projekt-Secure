class MyAside extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render() {
        this.innerHTML = `
        <nav>
            <a href="index.html">Opslag</a>
            <a href="calender.html">Opslag kalender</a>
            <a href="strategi.html">Strategi</a>
            <a href="media/other/Designmanual.pdf" target="blank">Designmanual</a>
        </nav>
        `
    }
}

customElements.define('my-aside', MyAside);