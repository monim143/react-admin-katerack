import React, {Component} from 'react';
import AUX from '../../../hoc/Aux_';
import {Link} from "react-router-dom";
import ExportComponent from "../rh/ExportComponent";

class Pages_invoice extends Component {

    render() {
        function address(type, className) {
            className = "col-6 " + className;
            return <div className={className}>
                <address>
                    <strong>{type} To:</strong><br></br>
                    Herbert C. Patton<br></br>
                    2470 Grove Street Bethpage<br></br>
                    NY 11714
                </address>
            </div>;
        }

        function image(image) {
            return <td className="product-list-img">
                <Link to="menu-details">
                    <img src={"assets/images/products/" + image + ".jpg"} className="img-fluid"
                         alt="tbl"/>
                </Link>
            </td>;
        }

        return (
            <AUX>

                <div className="page-content-wrapper">
                    <div className="container-fluid">

                        <div className="row">
                            <div className="col-12">
                                <div className="card m-b-20">
                                    <div className="card-body">

                                        <div className="row">
                                            <div className="col-12">
                                                <div className="invoice-title">
                                                    <h4 className="pull-right font-16"><strong>Order # 98541201</strong>
                                                    </h4>
                                                    <h3 className="m-t-0">
                                                        <img src="assets/images/logo.png" alt="logo" height="26"/>
                                                    </h3>
                                                </div>
                                                <hr></hr>
                                                <div className="row">
                                                    {address('Billed')}
                                                    {address('Shipped', 'text-right')}
                                                </div>
                                                <div className="row">
                                                    <div className="col-6 m-t-30">
                                                        <address>
                                                            <strong>Payment Method:</strong><br></br>
                                                            Visa ending **** 4242<br></br>
                                                            herbart@Katerack.com
                                                        </address>
                                                    </div>
                                                    <div className="col-6 m-t-30 text-right">
                                                        <address>
                                                            <strong>Order Date:</strong><br></br>
                                                            January 7, {new Date().getFullYear()}<br></br>
                                                        </address>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-12">
                                                <div className="panel panel-default">
                                                    <div className="p-2">
                                                        <h3 className="panel-title font-20"><strong>Order
                                                            summary</strong></h3>
                                                    </div>
                                                    <div className="">
                                                        <div className="table-responsive">
                                                            <table className="table">
                                                                <thead>
                                                                <tr>
                                                                    <td></td>
                                                                    <td><strong>Item</strong></td>
                                                                    <td className="text-center"><strong>Price</strong>
                                                                    </td>
                                                                    <td className="text-center">
                                                                        <strong>Quantity</strong>
                                                                    </td>
                                                                    <td className="text-right"><strong>Totals</strong>
                                                                    </td>
                                                                </tr>
                                                                </thead>
                                                                <tbody>
                                                                <tr>
                                                                    {image('burger')}
                                                                    <td>Burger</td>
                                                                    <td className="text-center">$10.99</td>
                                                                    <td className="text-center">1</td>
                                                                    <td className="text-right">$10.99</td>
                                                                </tr>
                                                                <tr>
                                                                    {image('pizza')}
                                                                    <td>Pizza</td>
                                                                    <td className="text-center">$20.00</td>
                                                                    <td className="text-center">3</td>
                                                                    <td className="text-right">$60.00</td>
                                                                </tr>

                                                                <tr>
                                                                    <td className="thick-line"></td>
                                                                    <td className="thick-line"></td>
                                                                    <td className="thick-line"></td>
                                                                    <td className="thick-line text-center">
                                                                        <strong>Subtotal</strong></td>
                                                                    <td className="thick-line text-right">$70.99</td>
                                                                </tr>

                                                                <tr>
                                                                    <td className="thick-line"></td>
                                                                    <td className="thick-line"></td>
                                                                    <td className="thick-line"></td>
                                                                    <td className="thick-line text-center"
                                                                        style={{color: 'green'}}>
                                                                        <strong>Coupon Discount</strong></td>
                                                                    <td className="thick-line text-right"
                                                                        style={{color: 'green'}}>$5
                                                                    </td>
                                                                </tr>

                                                                <tr>
                                                                    <td className="thick-line"></td>
                                                                    <td className="thick-line"></td>
                                                                    <td className="thick-line"></td>
                                                                    <td className="thick-line text-center">
                                                                        <strong>Pick Up Fee</strong></td>
                                                                    <td className="thick-line text-right">$15</td>
                                                                </tr>


                                                                <tr>
                                                                    <td className="no-line"></td>
                                                                    <td className="no-line"></td>
                                                                    <td className="no-line"></td>
                                                                    <td className="no-line text-center">
                                                                        <strong>Total</strong></td>
                                                                    <th className="no-line text-right"><h4
                                                                        className="m-0">$80.99</h4></th>
                                                                </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>

                                                        <ExportComponent/>
                                                    </div>
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

export default Pages_invoice;   