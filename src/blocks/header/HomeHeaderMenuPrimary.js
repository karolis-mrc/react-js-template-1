import React, { Component } from 'react';
import { Link } from 'react-scroll';
import Fade from '@material-ui/core/Fade';

class HomeHeaderMenuPrimary extends Component {
    constructor() {
        super();
        this.state = {
            over: false,
            pushed: false
        };

        this.scrollEvent     = this.scrollEvent.bind( this );
        this.set             = this.set.bind( this );
        this.handleOverEnter = this.handleOverEnter.bind( this );
        this.handleOverLeave = this.handleOverLeave.bind( this );
    };

    handleOverEnter() {
        this.setState( { over: true } );
    };

    handleOverLeave() {
        this.setState( { over: false } );
    };

    componentDidMount() {
        window.addEventListener( 'scroll', this.scrollEvent, { passive: true } );
    };

    componentWillUnmount() {
        window.removeEventListener( 'scroll', this.scrollEvent, { passive: true } );
    };

    removeActive() {
        if ( document.querySelector( '.active' ) ) {
            let actives = document.querySelector( '.active' );

            if ( actives !== null ) {
                actives.classList.remove( "active" );
            }
        }
    };

    scrollEvent() {
        let offset = 76;
        const offsets = [];
        const link_names = [];
        
        offsets.push( document.getElementById( "services" ).offsetTop );
        offsets.push( document.getElementById( "about-us" ).offsetTop );
        offsets.push( document.getElementById( "why-us" ).offsetTop );
        offsets.push( document.getElementById( "gallery" ).offsetTop );
        offsets.push( document.getElementById( "reviews" ).offsetTop );
        offsets.push( document.getElementById( "clients" ).offsetTop );
        offsets.push( document.getElementById( "news" ).offsetTop );
        offsets.push( document.getElementById( "contacts" ).offsetTop );

        link_names.push( document.getElementById( "nav-services" ) );
        link_names.push( document.getElementById( "nav-about-us" ) );
        link_names.push( document.getElementById( "nav-why-us" ) );
        link_names.push( document.getElementById( "nav-gallery" ) );
        link_names.push( document.getElementById( "nav-reviews" ) );
        link_names.push( document.getElementById( "nav-clients" ) );
        link_names.push( document.getElementById( "nav-news" ) );
        link_names.push( document.getElementById( "nav-contacts" ) );

        if ( ! this.state.pushed ) {
            if ( window.scrollY < offsets[0] ) {
                this.removeActive();
            }

            for (let i = 0; i < offsets.length; i++) {
                if ( window.scrollY + offset > offsets[i] ) {
                    this.removeActive();
                    link_names[i].classList.add( 'active' );
                }  
            }
        }
    };

    handleClick( e ) {
        this.setState( { pushed: true } )
        this.removeActive();

        let active = e.target;
        active.parentNode.classList.add( "active" );

        setTimeout( this.set, 800 );
    };

    set() {
        this.setState( { pushed: false } )
    };

    render() {
        const { over } = this.state;

        return (
            <nav className="menu-primary">
                <ul className="nav">
                    <li className="nav-item" id="nav-services">
                        <Link to="services" title="Services" href="#services" onClick={ ( e ) => this.handleClick( e ) }>Services</Link>
                    </li>

                    <li className="nav-item" id="nav-about-us">
                        <Link to="about-us" title="About us" onClick={ ( e ) => this.handleClick( e ) } href="#about-us">About us</Link>
                    </li>

                    <li className="nav-item" id="nav-why-us">
                        <Link to="why-us" title="Why us" onClick={ ( e ) => this.handleClick( e ) } href="#why-us">Why us</Link>
                    </li>

                    <li onMouseOver={ this.handleOverEnter } onMouseOut={ this.handleOverLeave } id="nav-gallery" className={ "nav-item nav-item-has-children dropdown-hover " + ( this.state.over ? 'show' : '' ) }>
                        <Link to="gallery" title="Gallery" onClick={ ( e ) => this.handleClick( e ) } href="#gallery">Gallery</Link>

                        <span className="dropdown-toggle dropdown-custom-icon">
                            <span className="dropdown-icon">
                                <i className="fas fa-caret-down"></i>
                            </span>
                        </span>

                        <Fade in={ over } timeout={ 400 }>
                            <ul className="dropdown-menu" style={ { display: "block" } }>
                                <li>
                                    <a className="dropdown-item" title="Truck Logistics" href={ process.env.PUBLIC_URL + '/gallery-inside' }>Truck Logistics</a>
                                </li>

                                <li>
                                    <a className="dropdown-item" title="Ship Logistics" href={ process.env.PUBLIC_URL + '/gallery-inside' }>Ship Logistics</a>
                                </li>

                                <li>
                                    <a className="dropdown-item" title="Storage Logistics" href={ process.env.PUBLIC_URL + '/gallery-inside' }>Storage Logistics</a>
                                </li>

                                <li>
                                    <a className="dropdown-item" title="Plain Logistics" href={ process.env.PUBLIC_URL + '/gallery-inside' }>Plane Logistics</a>
                                </li>
                            </ul>
                        </Fade>
                    </li>

                    <li className="nav-item" id="nav-reviews">
                        <Link to="reviews" title="Reviews" onClick={ ( e ) => this.handleClick( e ) } href="#reviews">Reviews</Link>
                    </li>

                    <li className="nav-item" id="nav-clients">
                        <Link to="clients" title="Clients" onClick={ ( e ) => this.handleClick( e ) } href="#clients">Clients</Link>
                    </li>

                    <li className="nav-item" id="nav-news">
                        <Link to="news" title="News" onClick={ ( e ) => this.handleClick( e ) } href="#news">News</Link>
                    </li>

                    <li className="nav-item" id="nav-contacts">
                        <Link to="contacts" title="Contacts" onClick={ ( e ) => this.handleClick( e ) } href="#contacts">Contacts</Link>
                    </li>
                </ul>
            </nav>
        );
    };
};

export default HomeHeaderMenuPrimary;
