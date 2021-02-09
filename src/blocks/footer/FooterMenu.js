import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Collapse } from '@material-ui/core';

class FooterMenu extends Component {
    constructor( props ) {
        super();
        this.state = {
            visible: false
        };

        this.handleClick = this.handleClick.bind( this );
    };

    handleClick() {
        this.setState( { visible: ! this.state.visible } );
    };

    render() {
        return (
            <nav className="menu-primary">
                <ul className="nav">
                    <li className={"nav-item " + ( this.props.location.pathname ===  window.location.pathname && this.props.location.pathname === process.env.PUBLIC_URL + "/"  ? "current-nav-item" : "" ) }>
                        <a href={ process.env.PUBLIC_URL + "/" } title="Home">Home</a>
                    </li>

                    <li className={ "nav-item " + ( window.location.pathname.includes( "/services" ) || window.location.pathname.includes( "/service-inside" ) ? "current-nav-item" : "" ) }>
                        <a href={ process.env.PUBLIC_URL + "/services" } title="Services">Services</a>
                    </li>

                    <li className={ "nav-item " + ( window.location.pathname.includes( "/about-us" ) ? "current-nav-item" : "" ) }>
                        <a href={ process.env.PUBLIC_URL + "/about-us" } title="About us">About us</a>
                    </li>

                    <li className={ "nav-item " + ( window.location.pathname.includes( "/why-us" ) ? "current-nav-item" : "" ) }>
                        <a href={ process.env.PUBLIC_URL + "/why-us" } title="Why us">Why us</a>
                    </li>

                    <li className={ "nav-item nav-item-has-children dropdown-child-click-effect " + ( window.location.pathname.includes( "/gallery" ) || window.location.pathname.includes( "/gallery-inside" ) ? "current-nav-item" : "" )  + ( this.state.visible ? ' show' : '' ) }>
                        <a href={ process.env.PUBLIC_URL + "/gallery" } title="Gallery">Gallery</a>

                        <span onClick={ this.handleClick } className="dropdown-toggle dropdown-custom-icon" style={ { color: '#ffffff' } }>
                            <span className="dropdown-icon">
                                <i className="fas fa-caret-down footer-icon"></i>
                            </span>
                        </span>

                        <Collapse in={ this.state.visible } className="footer-collapse" timeout={ 400 } style={ { width: '230px' } }>
                            <ul className="footer-dropdown" style={ { display: 'block' } }>
                                <li>
                                    <a title="Truck Logistics" href={ process.env.PUBLIC_URL + "/gallery-inside" }>Truck Logistics</a>
                                </li>

                                <li>
                                    <a title="Ship Logistics" href={ process.env.PUBLIC_URL + "/gallery-inside" }>Ship Logistics</a>
                                </li>

                                <li>
                                    <a title="Storage Logistics" href={ process.env.PUBLIC_URL + "/gallery-inside" }>Storage Logistics</a>
                                </li>

                                <li>
                                    <a title="Plain Logistics" href={ process.env.PUBLIC_URL + "/gallery-inside" }>Plane Logistics</a>
                                </li>
                            </ul>
                        </Collapse>
                    </li>

                    <li className={ "nav-item " + ( window.location.pathname.includes( "/reviews" ) ? "current-nav-item" : "" ) }>
                        <a href={ process.env.PUBLIC_URL + "/reviews" } title="Reviews">Reviews</a>
                    </li>

                    <li className={ "nav-item " + ( window.location.pathname.includes( "/clients" ) ? "current-nav-item" : "" ) }>
                        <a href={ process.env.PUBLIC_URL + "/clients" } title="Clients">Clients</a>
                    </li>

                    <li className={ "nav-item " + ( window.location.pathname.includes( "/news" ) || window.location.pathname.includes( "/news-single-page" ) ? "current-nav-item" : "" ) }>
                        <a href={ process.env.PUBLIC_URL + "/news" } title="News">News</a>
                    </li>

                    <li className={ "nav-item " + ( window.location.pathname.includes( "/contacts" ) ? "current-nav-item" : "" ) }>
                        <a href={ process.env.PUBLIC_URL + "/contacts" } title="Contacts">Contacts</a>
                    </li>
                </ul>
            </nav>
        );
    };
};

export default withRouter(FooterMenu);
