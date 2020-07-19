import React, {Component} from 'react';
import AUX from '../../../hoc/Aux_';

import ExportComponent from "../rh/ExportComponent";
import {Link} from "react-router-dom";

class ecommerce_customers extends Component {

    render() {
        function action() {
            return <td>
                <Link to="customer-details">Details</Link>
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
                                        <table id="datatable"
                                               className="table table-striped dt-responsive nowrap table-vertical"
                                               width="100%" cellspacing="0">
                                            <thead>
                                            <tr>
                                                <th>Customer Type</th>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Phone Number</th>
                                                <th>Address</th>
                                                <th>Creation Date</th>
                                                <th>Action</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>VIP</td>
                                                <td>Herbert C. Patton</td>
                                                <td>herbart@Katerack.com</td>
                                                <td>801-388-6508</td>
                                                <td>2470 Grove Street
                                                    Bethpage, NY 11714
                                                </td>

                                                <td>July 20, 2017</td>
                                                {action()}
                                            </tr>

                                            <tr>
                                                <td>VIP</td>
                                                <td>Fabian M. Berryhill</td>
                                                <td>FabianMBerryhill@teleworm.us</td>
                                                <td>518-281-2680</td>
                                                <td>
                                                    North Greenbush, NY 12144
                                                </td>

                                                <td>June 20, 2017</td>
                                                {action()}
                                            </tr>

                                            <tr>
                                                <td>ROYAL</td>
                                                <td>Edward E. White</td>
                                                <td>EdwardEWhite@armyspy.com</td>
                                                <td>850-561-1648</td>
                                                <td>1246 Drainer Avenue
                                                    Tallahassee, FL 32301
                                                </td>

                                                <td>June 22, 2017</td>
                                                {action()}
                                            </tr>

                                            <tr>
                                                <td>ROYAL</td>
                                                <td>Rodney V. Deshong</td>
                                                <td>RodneyVDeshong@teleworm.us</td>
                                                <td>678-737-9078</td>
                                                <td>4318 Kuhl Avenue
                                                    Woodstock, GA 30188
                                                </td>

                                                <td>April 12, 2017</td>
                                                {action()}
                                            </tr>

                                            <tr>
                                                <td>SEASONAL</td>
                                                <td>Ronald R. Maher</td>
                                                <td>RonaldRMaher@armyspy.com</td>
                                                <td>949-718-5315</td>
                                                <td>3894 Elk Street
                                                    Newport Beach, CA 92660
                                                </td>

                                                <td>June 11, 2017</td>
                                                {action()}
                                            </tr>

                                            <tr>
                                                <td>SEASONAL</td>
                                                <td>Chris T. Parks</td>
                                                <td>ChrisTParks@rhyta.com</td>
                                                <td>407-855-7376</td>
                                                <td>1521 McDonald Avenue
                                                    Orlando, FL 32809
                                                </td>

                                                <td>March 20, 2017</td>
                                                {action()}
                                            </tr>

                                            <tr>
                                                <td>REGULAR</td>
                                                <td>Mario M. Sloan</td>
                                                <td>MarioMSloan@rhyta.com</td>
                                                <td>224-585-9508</td>
                                                <td>4733 Victoria Street
                                                    Chicago, IL 60606
                                                </td>

                                                <td>June 15, 2017</td>
                                                {action()}
                                            </tr>

                                            <tr>
                                                <td>REGULAR</td>
                                                <td>Tosha T. Rivera</td>
                                                <td>ToshaTRivera@teleworm.us</td>
                                                <td>573-426-7916</td>
                                                <td>547 Maple Court
                                                    Rolla, MO 65401
                                                </td>
                                                <td>April 02, 2017</td>
                                                {action()}
                                            </tr>

                                            <tr>
                                                <td>REGULAR</td>
                                                <td>Alice B. Bevill</td>
                                                <td>JamesMHenry@dayrep.com</td>
                                                <td>732-533-0201</td>
                                                <td>2231 Webster Street
                                                    Newark, NJ 07102
                                                </td>

                                                <td>June 16, 2017</td>
                                                {action()}
                                            </tr>

                                            <tr>
                                                <td>REGULAR</td>
                                                <td>Stanley I. Thurman</td>
                                                <td>StanleyIThurman@teleworm.us</td>
                                                <td>501-320-9300</td>
                                                <td>2306 Mulberry Avenue
                                                    Little Rock, AR 72211
                                                </td>
                                                <td>November 21, 2016</td>
                                                {action()}
                                            </tr>

                                            </tbody>
                                            <tfoot>
                                            <tr>
                                                <td colSpan={7}>
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
            </AUX>
        );
    }
}

export default ecommerce_customers;   