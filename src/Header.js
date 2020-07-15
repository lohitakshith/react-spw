import React from "react";
export default class Header extends React.Component {
  constructor(props) {
    super(props)
    this.dropDown = React.createRef();
  }
  menuItemClicked(index) {
   // console.log(this.props.refs[index].current);
   console.log(this.dropDown.current.classList)
    if (this.dropDown.current.classList[2] === "show") {
      this.dropDown.current.classList.remove("show");
    }
    if (this.props.refs[index].current) {
      // this.props.refs[index].current.scrollIntoView()
     // this.props.refs[index].current.paddingTop = "50px"
      this.props.refs[index].current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "start"
      });
    }
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <a className="navbar-brand" href="#">
          VLAR Tech Solutions
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarNav"
          ref={this.dropDown}
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item" onClick={() => this.menuItemClicked(0)}>
              <a className="nav-link">
                Section1 <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item" onClick={() => this.menuItemClicked(1)}>
              <a className="nav-link">Section2</a>
            </li>
            <li className="nav-item" onClick={() => this.menuItemClicked(2)}>
              <a className="nav-link">Section3</a>
            </li>
            <li className="nav-item" onClick={() => this.menuItemClicked(3)}>
              <a className="nav-link">Section4</a>
            </li>
            <li className="nav-item" onClick={() => this.menuItemClicked(4)}>
              <a className="nav-link">Section5</a>
            </li>
            <li className="nav-item" onClick={() => this.menuItemClicked(5)}>
              <a className="nav-link">Section6</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
