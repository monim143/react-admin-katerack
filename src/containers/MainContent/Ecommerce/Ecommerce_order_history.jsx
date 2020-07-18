import React, {Component} from 'react';
import AUX from '../../../hoc/Aux_';
import {Link} from 'react-router-dom';

class ecommerce_order_history extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        function details(id) {
            return <td>
                <Link className="font-600 text-muted"
                      to="order-details">#{id}</Link>
            </td>;
        }

        function date(day) {
            Date.prototype.getMonthName = function () {
                let monthNames = ["January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"];
                return monthNames[this.getMonth()];
            }
            let dt = new Date();
            return <td>{dt.getMonthName() + " " + day + ", " + dt.getFullYear()}</td>;
        }

        function action() {
            return <td>
                <Link className="font-600 text-muted"
                      to="order-details">Details</Link>
            </td>;
        }

        return (
            <AUX>
                <div className="page-content-wrapper">
                    <div className="container-fluid">

                        {(
                            () => {
                                if (this.props.type == 'dashboard') {

                                } else {
                                    return <div className="row">
                                        <div className="col-md-6 col-lg-6 col-xl-3">
                                            <div className="mini-stat clearfix bg-white">
                                    <span className="font-40 text-primary mr-0 float-right"><i
                                        className="mdi mdi-cart-outline"></i></span>
                                                <div className="mini-stat-info">
                                                    <h3 className="counter font-light mt-0">$36,410</h3>
                                                </div>
                                                <div className="clearfix"></div>
                                                <p className=" mb-0 m-t-10 text-muted">Total Orders <span
                                                    className="pull-right"><i
                                                    className="fa fa-caret-down text-danger m-r-5"></i>3.25%</span></p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-6 col-xl-3">
                                            <div className="mini-stat clearfix bg-white">
                                    <span className="font-40 text-success mr-0 float-right"><i
                                        className="mdi mdi-currency-usd"></i></span>
                                                <div className="mini-stat-info">
                                                    <h3 className="counter font-light mt-0">$29,854</h3>
                                                </div>
                                                <div className="clearfix"></div>
                                                <p className=" mb-0 m-t-10 text-muted">Successful Orders <span
                                                    className="pull-right"><i
                                                    className="fa fa-caret-up text-success m-r-5"></i>8.51%</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-6 col-xl-3">
                                            <div className="mini-stat clearfix bg-white">
                                    <span className="font-40 text-warning mr-0 float-right"><i
                                        className="mdi mdi-fingerprint"></i></span>
                                                <div className="mini-stat-info">
                                                    <h3 className="counter font-light mt-0">$4,512</h3>
                                                </div>
                                                <div className="clearfix"></div>
                                                <p className=" mb-0 m-t-10 text-muted">Refunds <span
                                                    className="pull-right"><i
                                                    className="fa fa-caret-down text-danger m-r-5"></i>5.52%</span></p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-6 col-xl-3">
                                            <div className="mini-stat clearfix bg-white">
                                    <span className="font-40 text-danger mr-0 float-right"><i
                                        className="mdi mdi-rotate-right"></i></span>
                                                <div className="mini-stat-info">
                                                    <h3 className="counter font-light mt-0">$2,854</h3>
                                                </div>
                                                <div className="clearfix"></div>
                                                <p className=" mb-0 m-t-10 text-muted">Chargebacks <span
                                                    className="pull-right"><i
                                                    className="fa fa-caret-up text-success m-r-5"></i>7.10%</span></p>
                                            </div>
                                        </div>
                                    </div>;
                                }
                            }
                        )()}

                        <div className="row">
                            <div className="col-12">
                                <div className="card m-b-20">
                                    <div className="card-body">
                                        <h4>RECENT ORDERS</h4>
                                        <table id="datatable"
                                               className="table table-striped dt-responsive nowrap table-vertical"
                                               width="100%" cellspacing="0">
                                            <thead>
                                            <tr>
                                                <th>Order ID</th>
                                                <th>Amount</th>
                                                <th>Order Date</th>
                                                <th>Payment</th>
                                                <th>Billing Name</th>
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                {details(98541201)}
                                                <td>$45</td>
                                                {date("20")}
                                                <td><i className="fa fa-cc-visa text-muted font-20"></i></td>
                                                <td>Herbert C. Patton</td>
                                                <td><span className="badge badge-success">Paid</span></td>
                                                {action()}
                                            </tr>
                                            <tr>
                                                {details(85124562)}
                                                <td>$521</td>
                                                {date("18")}
                                                <td><i className="fa fa-cc-mastercard text-muted font-20"></i></td>
                                                <td>Mathias N. Klausen</td>
                                                <td><span className="badge badge-warning">Refund</span></td>
                                                {action()}
                                            </tr>
                                            <tr>
                                                {details(45123698)}
                                                <td>$241</td>
                                                {date("14")}
                                                <td><i className="fa fa-cc-paypal text-muted font-20"></i></td>
                                                <td>Nikolaj S. Henriksen</td>
                                                <td><span className="badge badge-warning">Refund</span></td>
                                                {action()}
                                            </tr>
                                            <tr>
                                                {details(85214796)}
                                                <td>$541.34</td>
                                                {date("15")}
                                                <td><i className="fa fa-cc-paypal text-muted font-20"></i></td>
                                                <td>Kasper S. Jessen</td>
                                                <td><span className="badge badge-success">Paid</span></td>
                                                {action()}
                                            </tr>
                                            <tr>
                                                {details(23145216)}
                                                <td>$22</td>
                                                {date("11")}
                                                <td><i className="fa fa-cc-amex text-muted font-20"></i></td>
                                                <td>Lasse C. Overgaard</td>
                                                <td><span className="badge badge-success">Paid</span></td>
                                                {action()}
                                            </tr>
                                            <tr>{details(12365474)}
                                                <td>$1,541</td>
                                                {date("10")}
                                                <td><i className="fa fa-cc-mastercard text-muted font-20"></i></td>
                                                <td>Johan E. Knudsen</td>
                                                <td><span className="badge badge-danger">Chargeback</span></td>
                                                {action()}
                                            </tr>
                                            <tr>{details(32569874)}
                                                <td>$54</td>
                                                {date("09")}
                                                <td><i className="fa fa-cc-visa text-muted font-20"></i></td>
                                                <td>Herbert C. Patton</td>
                                                <td><span className="badge badge-success">Paid</span></td>
                                                {action()}
                                            </tr>
                                            <tr>{details(52147321)}
                                                <td>$845</td>
                                                {date("08")}
                                                <td><i className="fa fa-cc-discover text-muted font-20"></i></td>
                                                <td>Mathias N. Klausen</td>
                                                <td><span className="badge badge-success">Paid</span></td>
                                                {action()}
                                            </tr>
                                            <tr>{details(84125369)}
                                                <td>$421</td>
                                                {date("08")}
                                                <td><i className="fa fa-cc-paypal text-muted font-20"></i></td>
                                                <td>Nikolaj S. Henriksen</td>
                                                <td><span className="badge badge-danger">Chargeback</span></td>
                                                {action()}
                                            </tr>
                                            <tr>{details(74512368)}
                                                <td>$652</td>
                                                {date("02")}
                                                <td><i className="fa fa-cc-mastercard text-muted font-20"></i></td>
                                                <td>Lasse C. Overgaard</td>
                                                <td><span className="badge badge-danger">Chargeback</span></td>
                                                {action()}
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AUX>
        );
    }
}

export default ecommerce_order_history;   