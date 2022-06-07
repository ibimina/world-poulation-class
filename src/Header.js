import React from "react"

class Header extends React.Component {
    state = {  } 
    render() { 
        return (
            <header>
                <h1>{this.props.head}</h1>
<h2>{this.props.subtitle}</h2>
<h3>{this.props.title}</h3>

            </header>
        );
    }
}
 
export default Header;