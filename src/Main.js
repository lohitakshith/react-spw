import React from "react";
import Header from "./Header";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.section1Ref = React.createRef();
    this.section2Ref = React.createRef();
    this.section3Ref = React.createRef();
    this.section4Ref = React.createRef();
    this.section5Ref = React.createRef();
    this.section6Ref = React.createRef();
  }
  render() {
    return (
      <>
        <Header
          refs={[
            this.section1Ref,
            this.section2Ref,
            this.section3Ref,
            this.section4Ref,
            this.section5Ref,
            this.section6Ref
          ]}
        />
        <section id="section1" className="py-5 px-4" ref={this.section1Ref}>
          <h1>Section1</h1>
          <p>
            Be sure to have your pages set up with the latest design and
            development standards. That means using an HTML5 doctype and
            including a viewport meta tag for proper responsive behaviors. Put
            it all together and your pages should look like this:
          </p>
        </section>
        <section id="section2" className="py-5 px-4" ref={this.section2Ref}>
          <h1>Section2</h1>
          <p>
            Be sure to have your pages set up with the latest design and
            development standards. That means using an HTML5 doctype and
            including a viewport meta tag for proper responsive behaviors. Put
            it all together and your pages should look like this:
          </p>
        </section>
        <section id="section3" className="py-5 px-4" ref={this.section3Ref}>
          <h1>Section3</h1>
          <p>
            Be sure to have your pages set up with the latest design and
            development standards. That means using an HTML5 doctype and
            including a viewport meta tag for proper responsive behaviors. Put
            it all together and your pages should look like this:
          </p>
        </section>
        <section id="section4" className="py-5 px-4" ref={this.section4Ref}>
          <h1>Section4</h1>
          <p>
            Be sure to have your pages set up with the latest design and
            development standards. That means using an HTML5 doctype and
            including a viewport meta tag for proper responsive behaviors. Put
            it all together and your pages should look like this:
          </p>
        </section>
        <section id="section5" className="py-5 px-4" ref={this.section5Ref}>
          <h1>Section5</h1>
          <p>
            Be sure to have your pages set up with the latest design and
            development standards. That means using an HTML5 doctype and
            including a viewport meta tag for proper responsive behaviors. Put
            it all together and your pages should look like this:
          </p>
        </section>
        <section id="section6" className="py-5 px-4" ref={this.section6Ref}>
          <h1>Section6</h1>
          <p>
            Be sure to have your pages set up with the latest design and
            development standards. That means using an HTML5 doctype and
            including a viewport meta tag for proper responsive behaviors. Put
            it all together and your pages should look like this:
          </p>
        </section>
      </>
    );
  }
}
