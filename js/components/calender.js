if (localStorage.myLogin) {

    //Create custom element
    var calender = document.createElement("my-calender");
    document.body.appendChild(calender);

    //Render Index page
    class MyCalender extends HTMLElement {

        //render
        connectedCallback() {
            this.render();
        }

        //Component
        render() {
            this.innerHTML = `
            <main class="main">
            <my-aside></my-aside>
                <section class="main__hero">
                    <my-header></my-header>
                    <img src="/media/images/kalender.png" alt="SoMe kalender" class="hero__calender">
                </section>
            </main>
            `
        }
    }
    //Define custom element
    customElements.define('my-calender', MyCalender);
}