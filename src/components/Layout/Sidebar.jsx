import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {Link} from 'react-router-dom';
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';
import $ from 'jquery';

class sidebar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Tab: 'index', SubTab: '', MoreTab: '', dashboard_menu: false, email_menu: false, ui_menu: false,
            form_menu: false, chart_menu: false, table_menu: false, icon_menu: false, map_menu: false,
            auth_menu: false, extra_menu: false, eco_menu: false, emt_menu: false
        };
    }

    setActiveTab = (tab, subtab, moretab, toggleTab, e) => {
        this.setState({Tab: tab, SubTab: subtab, MoreTab: moretab});
    }

    componentDidMount() {
        var now_route = "";
        var pageUrl = window.location.pathname.split(/[?#]/)[0];
        now_route = pageUrl.substr(1).replace(/_/g, " ");
        $('#now_routing').empty();
        if (now_route == "") {
            now_route = "Dashboard"
        } else {
        }
        $('#now_routing').append(now_route);

        $('.toggle-search').on('click', function () {
            var targetId = $(this).data('target');
            var $searchBar;
            if (targetId) {
                $searchBar = $(targetId);
                $searchBar.toggleClass('open');
            }
        });

        $('.button-menu-mobile').on('click', function (event) {
            event.preventDefault();
            $("body").toggleClass("enlarged");
        });

        $('li.has_sub li').on('click', function (event) {
            $("body").toggleClass("enlarged");
        });
    }

    componentDidUpdate() {
        var now_route = "";
        var pageUrl = window.location.pathname.split(/[?#]/)[0];
        now_route = pageUrl.substr(1).replace("_", " ");
        $('#now_routing').empty();
        if (now_route == "") {
            now_route = "Dashboard"
        } else {
        }
        $('#now_routing').append(now_route);
    }

    render() {
        let SubTab = this.state.SubTab;
        return (
            <div className="left side-menu">

                <div className="topbar-left">
                    <div className="">
                        <Link to="/" className="logo"><img src="assets/images/logo.png" height="36" alt="logo"/></Link>
                    </div>
                </div>

                <div className="sidebar-inner slimscrollleft">
                    <PerfectScrollbar>
                        <div id="sidebar-menu">
                            <ul>
                                <li className={this.state.dashboard_menu ? 'has_sub active-menu nav-active' : 'has_sub'}>
                                    <Link to="/" onClick={() => this.setState({
                                        dashboard_menu: !this.state.dashboard_menu,
                                        email_menu: false,
                                        ui_menu: false,
                                        form_menu: false,
                                        chart_menu: false,
                                        table_menu: false,
                                        icon_menu: false,
                                        map_menu: false,
                                        auth_menu: false,
                                        extra_menu: false,
                                        eco_menu: false,
                                        emt_menu: false
                                    })}
                                          className={this.state.Tab === 'index' ? 'waves-effect active-menu' : 'waves-effect'}><i
                                        className="mdi mdi-view-dashboard"></i> <span> Dashboard</span> </Link>
                                </li>

                                <li>
                                    <Link className={this.state.SubTab === 'restaurants' ? 'active-menu' : ''}
                                          onClick={this.setActiveTab.bind(this, 'eco', 'restaurants', '')}
                                          to="restaurants"><i
                                        className="dripicons-cutlery"></i> Restaurants</Link>
                                </li>

                                <li>
                                    <Link
                                        className={this.state.SubTab === 'orders' ? 'active-menu' : ''}
                                        onClick={this.setActiveTab.bind(this, 'eco', 'orders', '')}
                                        to="orders">
                                        <i className="mdi mdi-cart-outline"></i> Orders
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className={SubTab === 'products' ? 'active-menu' : ''}
                                        onClick={this.setActiveTab.bind(this, 'eco', 'products', '')}
                                        to="products">
                                        <i className="mdi mdi-tag-multiple"></i> Menus
                                    </Link>
                                </li>



                                <li><Link className={this.state.SubTab === 'customers' ? 'active-menu' : ''}
                                          onClick={this.setActiveTab.bind(this, 'eco', 'customers', '')}
                                          to="customers"><i
                                    class="mdi mdi-account-multiple"></i> Clients</Link></li>

                                <li>
                                    <Link
                                        className={SubTab === 'reports' ? 'active-menu' : ''}
                                        onClick={this.setActiveTab.bind(this, 'eco', 'reports', '')}
                                        to="reports">
                                        <i className="ion-arrow-graph-up-right"></i> Reports
                                    </Link>
                                </li>

                                <li>
                                    <Link to="calendar"
                                          className={this.state.Tab === 'calendar' ? 'waves-effect active-menu' : 'waves-effect'}
                                          onClick={this.setActiveTab.bind(this, 'calendar', '', '')}><i
                                        className="mdi mdi-calendar-check"></i><span> Holidays </span></Link>
                                </li>


                                <li className={this.state.auth_menu ? 'has_sub active-menu nav-active' : 'has_sub'}>
                                    <Link to="#" onClick={() => this.setState({
                                        auth_menu: !this.state.auth_menu,
                                        dashboard_menu: false,
                                        email_menu: false,
                                        ui_menu: false,
                                        form_menu: false,
                                        chart_menu: false,
                                        table_menu: false,
                                        icon_menu: false,
                                        map_menu: false,
                                        extra_menu: false,
                                        eco_menu: false,
                                        emt_menu: false
                                    })} className="waves-effect"><i
                                        className="mdi mdi-account-location"></i><span> Authentication <span
                                        className="pull-right"><i className="mdi mdi-chevron-right"></i></span> </span></Link>
                                    <ul className="list-unstyled"
                                        style={{display: this.state.auth_menu ? 'block' : 'none'}}>
                                        <li><Link to="pages_login">Login</Link></li>
                                        <li><Link to="pages_register">Register</Link></li>
                                        <li><Link to="pages_recoverpw">Recover Password</Link></li>
                                    </ul>
                                </li>

                                <li>
                                    <Link className={SubTab === 'users' ? 'active-menu' : ''}
                                          onClick={this.setActiveTab.bind(this, 'eco', 'users', '')}
                                          to="users"><i className="mdi mdi-human-child"></i> Users</Link>
                                </li>

                                <li>
                                    <Link className={SubTab === 'settings' ? 'active-menu' : ''}
                                          onClick={this.setActiveTab.bind(this, 'eco', 'settings', '')}
                                          to="settings"><i className="mdi mdi-settings"></i> Settings</Link>
                                </li>

                            </ul>
                        </div>

                        <div className="clearfix"></div>
                    </PerfectScrollbar>
                </div>

            </div>
        );
    }
}

export default withRouter(sidebar);