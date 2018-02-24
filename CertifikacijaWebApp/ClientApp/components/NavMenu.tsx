import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';

export class NavMenu extends React.Component<{}, {}> {
    public render() {
        return <div className='main-nav'>
                <div className='navbar navbar-inverse'>
                <div className='navbar-header'>
                    <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>
                        <span className='sr-only'>Toggle navigation</span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                    </button>
                    <img src="logo.png"/>
                </div>
                <div className='clearfix'></div>
                <div className='navbar-collapse collapse'>
                    <ul className='nav navbar-nav'>
                        <li>
                            <NavLink to={'/user'} exact activeClassName='active'>
                                <span className='glyphicon glyphicon-user'></span> User
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className='clearfix'></div>
                <div className='navbar-collapse collapse'>
                    <ul className='nav navbar-nav'>
                        <li>
                            <NavLink to={ '/' } exact activeClassName='active'>
                                <span className='glyphicon glyphicon-home'></span> Dashboard
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/polaznici'} activeClassName='active'>
                                <span className='glyphicon glyphicon-education'></span> Polaznici
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/pitanja'} activeClassName='active'>
                                <span className='glyphicon glyphicon-question-sign'></span> Pitanja i odgovori
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={ '/rezultati' } activeClassName='active'>
                                <span className='glyphicon glyphicon-education'></span> Rezultati
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={ '/certifikati' } activeClassName='active'>
                                <span className='glyphicon glyphicon-certificate'></span> Certifikati
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/racuni'} activeClassName='active'>
                                <span className='glyphicon glyphicon-print'></span> Računi
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/virmani'} activeClassName='active'>
                                <span className='glyphicon glyphicon-print'></span> Virmani
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/catalog'} activeClassName='active'>
                                <span className='glyphicon glyphicon-th-list'></span> Catalog Example
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/kalendar'} activeClassName='active'>
                                <span className='glyphicon glyphicon-calendar'></span> Kalendar
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>;
    }
}
