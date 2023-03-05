import AbstractView from "./AbstractView.js";

export default class Posts extends AbstractView {
  constructor() {
    super();
    this.setTitle = "Posts";
  }

  async getHtml() {
    return `
    <h1>Posts</h1>
    <p>
    Nunc quis lacus luctus, varius ligula et, volutpat erat. Sed in arcu eget purus tempus congue eu at tellus. Morbi quis nulla venenatis, pharetra odio ac, dapibus dui. Etiam quis nisl sit amet nisl laoreet efficitur. Aenean malesuada ante odio, sit amet semper lorem tempus eget. Duis at elit quis lorem hendrerit convallis. Mauris velit felis, hendrerit id ullamcorper eu, vestibulum in ligula. Vivamus nec ullamcorper turpis. 
    </p>
    <p>
        <a href="/">Goto Dashboard</a>.
    </p>
    `;
  }
}
