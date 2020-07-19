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
            Tab: 'index',
            SubTab: '',
            MoreTab: '',
            dashboard_menu: false,
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
            emt_menu: false,
            restaurant_menu: false,
            menus_menu: false,
            user_menu: false,
            customer_menu: false,
            coupon_menu: false,
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

        let state = this.state, SubTab = state.SubTab;

        function closeMenuDropdown() {
            return {
                restaurant_menu: false,
                auth_menu: false,
                user_menu: false,
                payment_menu: false,
                customer_menu: false,
                coupon_menu: false,
            }
        }

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
                                <li className={state.dashboard_menu ? 'has_sub active-menu nav-active' : 'has_sub'}>
                                    <Link to="/" onClick={() => this.setState(closeMenuDropdown)}
                                          className={state.Tab === 'index' ? 'waves-effect active-menu' : 'waves-effect'}><i
                                        className="mdi mdi-view-dashboard"></i> <span> Dashboard</span> </Link>
                                </li>

                                <li>
                                    <Link className={SubTab === 'my-restaurant' ? 'active-menu' : ''}
                                          onClick={this.setActiveTab.bind(this, 'eco', 'my-restaurant', '')}
                                          to="my-restaurant"><i className="mdi mdi-settings"></i> My Restaurant</Link>
                                </li>

                                <li>
                                    <Link
                                        className={SubTab === 'orders' ? 'active-menu' : ''}
                                        onClick={this.setActiveTab.bind(this, 'eco', 'orders', '')}
                                        to="orders">
                                        <i className="mdi mdi-cart-outline"></i> Orders
                                    </Link>
                                </li>

                                <li className={state.user_menu ? 'has_sub active-menu nav-active' : 'has_sub'}>

                                    <Link to="#" onClick={() => this.setState({
                                        customer_menu: !state.customer_menu,
                                        user_menu: false,
                                        menus_menu: false,
                                        restaurant_menu: false,
                                        auth_menu: false,
                                        payment_menu: false,
                                        coupon_menu: false,
                                    })} className="waves-effect">
                                        <i className="mdi mdi-account-multiple"></i><span> Client Management <span
                                        className="pull-right"><i className="mdi mdi-chevron-right"></i></span> </span></Link>
                                    <ul className="list-unstyled"
                                        style={{display: state.customer_menu ? 'block' : 'none'}}>
                                        <li>
                                            <Link className={SubTab === 'customer-add' ? 'active-menu' : ''}
                                                  onClick={this.setActiveTab.bind(this, 'eco', 'customer-add', '')}
                                                  to="customer-add">Add</Link>
                                        </li>
                                        <li>
                                            <Link className={SubTab === 'customer-list' ? 'active-menu' : ''}
                                                  onClick={this.setActiveTab.bind(this, 'eco', 'customer-list', '')}
                                                  to="customer-list">List</Link>
                                        </li>
                                    </ul>
                                </li>

                                <li className={state.menus_menu ? 'has_sub active-menu nav-active' : 'has_sub'}>

                                    <Link to="#" onClick={() => this.setState({
                                        menus_menu: !state.menus_menu,
                                        restaurant_menu: false,
                                        auth_menu: false,
                                        user_menu: false,
                                        customer_menu: false,
                                        coupon_menu: false,
                                    })} className="waves-effect">
                                        <i className="mdi mdi-tag-multiple"></i><span> Menus Management <span
                                        className="pull-right"><i className="mdi mdi-chevron-right"></i></span> </span></Link>
                                    <ul className="list-unstyled"
                                        style={{display: state.menus_menu ? 'block' : 'none'}}>
                                        <li>
                                            <Link className={SubTab === 'menu-add' ? 'active-menu' : ''}
                                                  onClick={this.setActiveTab.bind(this, 'eco', 'menu-add', '')}
                                                  to="menu-add">Add</Link>
                                        </li>
                                        <li>
                                            <Link className={SubTab === 'menu-list' ? 'active-menu' : ''}
                                                  onClick={this.setActiveTab.bind(this, 'eco', 'menu-list', '')}
                                                  to="menu-list">List</Link>
                                        </li>
                                    </ul>
                                </li>

                                <li className={state.coupon_menu ? 'has_sub active-menu nav-active' : 'has_sub'}>

                                    <Link to="#" onClick={() => this.setState({
                                        coupon_menu: !state.coupon_menu,
                                        payment_menu: false,
                                        menus_menu: false,
                                        restaurant_menu: false,
                                        auth_menu: false,
                                        user_menu: false,
                                        customer_menu: false
                                    })} className="waves-effect">
                                        <i className="ion-card"></i><span> Coupon Management<span
                                        className="pull-right"><i className="mdi mdi-chevron-right"></i></span> </span></Link>
                                    <ul className="list-unstyled"
                                        style={{display: state.coupon_menu ? 'block' : 'none'}}>
                                        <li>
                                            <Link className={SubTab === 'coupon-add' ? 'active-menu' : ''}
                                                  onClick={this.setActiveTab.bind(this, 'eco', 'coupon-add', '')}
                                                  to="coupon-add">Add</Link>
                                        </li>
                                        <li>
                                            <Link className={SubTab === 'coupon-list' ? 'active-menu' : ''}
                                                  onClick={this.setActiveTab.bind(this, 'eco', 'coupon-list', '')}
                                                  to="coupon-list">List</Link>
                                        </li>
                                    </ul>
                                </li>

                                <li className={state.payment_menu ? 'has_sub active-menu nav-active' : 'has_sub'}>

                                    <Link to="#" onClick={() => this.setState({
                                        payment_menu: !state.payment_menu,
                                        menus_menu: false,
                                        restaurant_menu: false,
                                        auth_menu: false,
                                        user_menu: false,
                                        customer_menu: false,
                                        coupon_menu: false,
                                    })} className="waves-effect">
                                        <i className="ion-card"></i><span> Payment Method <span
                                        className="pull-right"><i className="mdi mdi-chevron-right"></i></span> </span></Link>
                                    <ul className="list-unstyled"
                                        style={{display: state.payment_menu ? 'block' : 'none'}}>
                                        <li>
                                            <Link className={SubTab === 'payment-method-add' ? 'active-menu' : ''}
                                                  onClick={this.setActiveTab.bind(this, 'eco', 'payment-method-add', '')}
                                                  to="payment-method-add">Add</Link>
                                        </li>
                                        <li>
                                            <Link className={SubTab === 'payment-method-list' ? 'active-menu' : ''}
                                                  onClick={this.setActiveTab.bind(this, 'eco', 'payment-method-list', '')}
                                                  to="payment-method-list">List</Link>
                                        </li>
                                    </ul>
                                </li>

                                <li className={state.user_menu ? 'has_sub active-menu nav-active' : 'has_sub'}>

                                    <Link to="#" onClick={() => this.setState({
                                        user_menu: !state.user_menu,
                                        menus_menu: false,
                                        restaurant_menu: false,
                                        auth_menu: false,
                                        payment_menu: false,
                                        customer_menu: false,
                                        coupon_menu: false
                                    })} className="waves-effect">
                                        <i className="mdi mdi-human-child"></i><span> User Management <span
                                        className="pull-right"><i className="mdi mdi-chevron-right"></i></span> </span></Link>
                                    <ul className="list-unstyled"
                                        style={{display: state.user_menu ? 'block' : 'none'}}>
                                        <li>
                                            <Link className={SubTab === 'user-add' ? 'active-menu' : ''}
                                                  onClick={this.setActiveTab.bind(this, 'eco', 'user-add', '')}
                                                  to="user-add">Add</Link>
                                        </li>
                                        <li>
                                            <Link className={SubTab === 'user-list' ? 'active-menu' : ''}
                                                  onClick={this.setActiveTab.bind(this, 'eco', 'user-list', '')}
                                                  to="user-list">List</Link>
                                        </li>
                                    </ul>
                                </li>

                                <li>
                                    <Link to="calendar"
                                          className={state.Tab === 'calendar' ? 'waves-effect active-menu' : 'waves-effect'}
                                          onClick={this.setActiveTab.bind(this, 'calendar', '', '')}><i
                                        className="mdi mdi-calendar-check"></i><span> Calendar </span></Link>
                                </li>

                                <li>
                                    <Link
                                        className={SubTab === 'reports' ? 'active-menu' : ''}
                                        onClick={this.setActiveTab.bind(this, 'eco', 'reports', '')}
                                        to="reports">
                                        <i className="ion-arrow-graph-up-right"></i> Reports
                                    </Link>
                                </li>


                                <li className={state.auth_menu ? 'has_sub active-menu nav-active' : 'has_sub'}
                                    style={{display: 'none'}}>
                                    <Link to="#" onClick={() => this.setState({
                                        auth_menu: !state.auth_menu,
                                        email_menu: false,
                                    })} className="waves-effect"><i
                                        className="mdi mdi-account-location"></i><span> Authentication <span
                                        className="pull-right"><i className="mdi mdi-chevron-right"></i></span> </span></Link>
                                    <ul className="list-unstyled"
                                        style={{display: state.auth_menu ? 'block' : 'none'}}>
                                        <li><Link to="pages_login">Login</Link></li>
                                        <li><Link to="pages_register">Register</Link></li>
                                        <li><Link to="pages_recoverpw">Recover Password</Link></li>
                                    </ul>
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