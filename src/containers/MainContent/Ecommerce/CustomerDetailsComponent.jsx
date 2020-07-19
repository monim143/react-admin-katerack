import React, {Component} from 'react';
import AUX from '../../../hoc/Aux_';
import ExportComponent from "../rh/ExportComponent";
import {Link} from "react-router-dom";


class CustomerDetailsComponent extends Component {

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

                        <div className="row">
                            <div className="col-8">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-6 col-lg-12">
                                                <div className="card-body">
                                                    <table id="datatable"
                                                           className="table table-striped dt-responsive nowrap table-vertical"
                                                           width="100%" cellSpacing="0">
                                                        <tbody>
                                                        <tr>
                                                            <th>Customer Type</th>
                                                            <td>VIP</td>
                                                        </tr>

                                                        <tr>
                                                            <th>Customer Name</th>
                                                            <td>Herbert C. Patton</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Email</th>
                                                            <td>herbart@Katerack.com</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Phone</th>
                                                            <td>801-388-6508</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Address</th>
                                                            <td>2470 Grove Street Bethpage, NY 11714</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Orders History</th>
                                                            <td>
                                                                <table id="datatable"
                                                                       className="table table-striped dt-responsive nowrap table-vertical"
                                                                       width="100%" cellSpacing="0">
                                                                    <thead>
                                                                    <tr>
                                                                        <th>Order ID</th>
                                                                        <th>Amount</th>
                                                                        <th>Order Date</th>
                                                                        <th>Payment</th>
                                                                        <th>Status</th>
                                                                        <th>Action</th>
                                                                    </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                    <tr>
                                                                        {details(98541201)}
                                                                        <td>$45</td>
                                                                        {date("20")}
                                                                        <td><i
                                                                            className="fa fa-cc-visa text-muted font-20"></i>
                                                                        </td>
                                                                        <td><span
                                                                            className="badge badge-success">Paid</span>
                                                                        </td>
                                                                        {action()}
                                                                    </tr>
                                                                    <tr>
                                                                        {details(85124562)}
                                                                        <td>$521</td>
                                                                        {date("18")}
                                                                        <td><i
                                                                            className="fa fa-cc-mastercard text-muted font-20"></i>
                                                                        </td>
                                                                        <td><span
                                                                            className="badge badge-warning">Refund</span>
                                                                        </td>
                                                                        {action()}
                                                                    </tr>
                                                                    <tr>
                                                                        {details(45123698)}
                                                                        <td>$241</td>
                                                                        {date("14")}
                                                                        <td><i
                                                                            className="fa fa-cc-paypal text-muted font-20"></i>
                                                                        </td>
                                                                        <td><span
                                                                            className="badge badge-warning">Refund</span>
                                                                        </td>
                                                                        {action()}
                                                                    </tr>
                                                                    <tr>
                                                                        {details(85214796)}
                                                                        <td>$541.34</td>
                                                                        {date("15")}
                                                                        <td><i
                                                                            className="fa fa-cc-paypal text-muted font-20"></i>
                                                                        </td>
                                                                        <td><span
                                                                            className="badge badge-success">Paid</span>
                                                                        </td>
                                                                        {action()}
                                                                    </tr>
                                                                    <tr>
                                                                        {details(23145216)}
                                                                        <td>$22</td>
                                                                        {date("11")}
                                                                        <td><i
                                                                            className="fa fa-cc-amex text-muted font-20"></i>
                                                                        </td>
                                                                        <td><span
                                                                            className="badge badge-success">Paid</span>
                                                                        </td>
                                                                        {action()}
                                                                    </tr>

                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                        <tfoot>
                                                        <tr>
                                                            <td colSpan={2}>
                                                                <ExportComponent/>
                                                            </td>
                                                        </tr>
                                                        </tfoot>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
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

export default CustomerDetailsComponent;   