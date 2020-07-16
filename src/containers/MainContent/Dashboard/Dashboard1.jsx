import React, {Component} from 'react';
import AUX from '../../../hoc/Aux_';
import {Sparklines, SparklinesLine} from 'react-sparklines';
import {Scrollbars} from 'react-custom-scrollbars';
import {Link} from 'react-router-dom';
import {LineChart, PieChart} from 'react-easy-chart';
import Chart from 'react-apexcharts';
import MixedChart from '../../../containers/Chartstypes/Apex/MixedChart';
import DonutChart from '../../../containers/Chartstypes/Apex/DonutChart';
import BarChart from "../../Chartstypes/Chartjs/BarChart";

class dashboard1 extends Component {

    constructor(props) {
        super(props);

        this.state = {
            simple: 80, simple68: 68, simple37: 37, simple72: 72,
        };
    }


    render() {
        const mixedChartData = {
            columns: [
                ['Jan', 1009, 20, 50, 40, 60, 50],
                ['Feb', 200, 130, 90, 240, 130, 220],
                ['Mar', 300, 200, 1060, 9000, 250, 250],
                ['Apr', 200, 130, 90, 240, 5000, 220],
                ['May', 130, 120, 1050, 140, 160, 150],
                ['Jun', 90, 70, 20, 50, 60, 120],
                ['Jul', 90, 70, 20, 50, 60, 1020],
                ['Aug', 90, 70, 20, 50, 60, 120],
                ['Sep', 90, 70, 20, 50, 60, 120],
                ['Oct', 800, 70, 5020, 50, 60, 120],
                ['Nov', 90, 70, 20, 50, 60, 120],
                ['Dec', 90, 70, 20, 5000, 60, 120],
            ],
            type: 'bar',
            types: {
                Jan: 'spline',
                Feb: 'area',
                Mar: 'spline',
                Apr: 'area',
                May: 'spline',
                Jun: 'line',
                Jul: 'spline',
                Aug: 'area',
                Sep: 'spline',
                Oct: 'line',
                Nov: 'spline',
                Dec: 'line',
            },
            groups: [
                ['Desktop','Tablet']
            ]
        };
        const mixedChartColors = {
            pattern : ['#6d60b0','#4ac18e','#5468da', 'red', 'blue', 'purple', 'grey', 'white', 'black', 'orange']
        };
        return (
            <AUX>
                <div className="page-content-wrapper">
                    <div className="container-fluid">

                        <div className="row">
                            <div className="col-md-6 col-xl-3">
                                <div className="mini-stat clearfix bg-white">
                                    <span className="mini-stat-icon bg-purple mr-0 float-right"><i
                                        className="mdi mdi-cart-outline"></i></span>
                                    <div className="mini-stat-info">
                                        <span className="counter text-purple">143</span>
                                        ORDERS
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-3">
                                <div className="mini-stat clearfix bg-white">
                                    <span className="mini-stat-icon bg-blue-grey mr-0 float-right"><i
                                        className="mdi mdi-currency-usd"></i></span>
                                    <div className="mini-stat-info">
                                        <span className="counter text-blue-grey">$9,444.69</span>
                                        SALES VOLUME
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-3">
                                <div className="mini-stat clearfix bg-white">
                                    <span className="mini-stat-icon bg-brown mr-0 float-right"><i
                                        className="mdi mdi-fingerprint"></i></span>
                                    <div className="mini-stat-info">
                                        <span className="counter text-brown">11</span>
                                        REFUNDS
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-3">
                                <div className="mini-stat clearfix bg-white">
                                    <span className="mini-stat-icon bg-teal mr-0 float-right"><i
                                        className="mdi mdi-human-child"></i></span>
                                    <div className="mini-stat-info">
                                        <span className="counter text-teal">100</span>
                                        Users
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                            </div>
                        </div>

                        <div className="row">

                            <div className="col-xl-12">
                                <div className="row">
                                    <div className="col-md-8 pr-md-0">
                                        <div className="card m-b-20" style={{Height: "486px"}}>
                                            <div className="card-body">
                                                <h4 className="mt-0 header-title">Sales value</h4>
                                                <MixedChart data={mixedChartData} colors={mixedChartColors}/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-4" >
                                        <div className="card m-b-20" >
                                            <div className="card-body dashboard_order_chart" style={{Height: "486px"}}>

                                                <h4 className="mt-0 header-title">Total Orders</h4>

                                                <ul className="list-inline widget-chart m-t-20 m-b-15 text-center">
                                                    <li className="list-inline-item">
                                                        <h5 className="mb-0">5412</h5>
                                                        <p className="text-muted font-14">Activated</p>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <h5 className="mb-0">542</h5>
                                                        <p className="text-muted font-14">Pending</p>
                                                    </li>
                                                </ul>

                                                <BarChart/>

                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-md-3 pl-md-0 hideMe">
                                        <div className="card m-b-20" style={{Height: "486px"}}>
                                            <div className="card-body">
                                                <div className="m-b-20">
                                                    <p>Weekly Earnings</p>
                                                    <h5>$1,542</h5>
                                                    <Sparklines height={54}
                                                                data={[5, 10, 5, 20, 15, 10, 18, 14, 20, -18, 18, 17, 29, 10, 18]}>
                                                        <SparklinesLine color="blue"/>
                                                    </Sparklines>
                                                </div>
                                                <div className="m-b-20">
                                                    <p>Monthly Earnings</p>
                                                    <h5>$6,451</h5>
                                                    <Sparklines height={54}
                                                                data={[5, 10, -5, 14, 20, -18, 17, 29, -10, 18, 14, 20, -18, 17, 29,]}>
                                                        <SparklinesLine color="blue"/>
                                                    </Sparklines>
                                                </div>
                                                <div className="m-b-20">
                                                    <p>Yearly Earnings</p>
                                                    <h5>$84,574</h5>
                                                    <Sparklines height={54}
                                                                data={[5, 10, 5, 20, 18, 17, 29, 15, 17, 29, 10, 18, 14, 20, -18]}>
                                                        <SparklinesLine color="blue"/>
                                                    </Sparklines>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-3 hideMe">
                                <div className="card m-b-20">
                                    <div className="card-body">
                                        <h4 className="mt-0 header-title">Sales Analytics</h4>

                                        <ul className="list-inline widget-chart m-t-20 m-b-15 text-center">
                                            <li className="list-inline-item">
                                                <h5 className="mb-0">25610</h5>
                                                <p className="text-muted font-14">Activated</p>
                                            </li>
                                            <li className="list-inline-item">
                                                <h5 className="mb-0">56210</h5>
                                                <p className="text-muted font-14">Pending</p>
                                            </li>
                                        </ul>

                                        <div align="center">
                                            <DonutChart/>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="row hideMe">
                            <div className="col-xl-3">
                                <div className="card m-b-20">
                                    <div className="card-body">
                                        <h4 className="mt-0 header-title m-b-30">Recent Stock</h4>

                                        <div className="text-center">

                                            <PieChart
                                                label
                                                size={100}
                                                innerHoleSize={80}
                                                data={[
                                                    {key: 'A', value: 80, color: '#ffbb44'},
                                                    {key: 'B', value: 20, color: '#fff'},
                                                ]}
                                            />

                                            <div className="clearfix"></div>
                                            <a href="#" className="btn btn-sm btn-warning m-t-20">View All Data</a>
                                            <ul className="list-inline row m-t-30 clearfix">
                                                <li className="col-6">
                                                    <p className="m-b-5 font-18 font-600">7,541</p>
                                                    <p className="mb-0">Mobile Phones</p>
                                                </li>
                                                <li className="col-6">
                                                    <p className="m-b-5 font-18 font-600">125</p>
                                                    <p className="mb-0">Desktops</p>
                                                </li>
                                            </ul>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-3">
                                <div className="card m-b-20">
                                    <div className="card-body">
                                        <h4 className="mt-0 header-title m-b-30">Purchase Order</h4>

                                        <div className="text-center">

                                            <PieChart
                                                label
                                                size={100}
                                                innerHoleSize={80}
                                                data={[
                                                    {key: 'A', value: 68, color: '#4ac18e'},
                                                    {key: 'B', value: 25, color: '#fff'},
                                                ]}
                                            />

                                            <div className="clearfix"></div>
                                            <a href="#" className="btn btn-sm btn-success m-t-20">View All Data</a>
                                            <ul className="list-inline row m-t-30 clearfix">
                                                <li className="col-6">
                                                    <p className="m-b-5 font-18 font-600">2,541</p>
                                                    <p className="mb-0">Mobile Phones</p>
                                                </li>
                                                <li className="col-6">
                                                    <p className="m-b-5 font-18 font-600">874</p>
                                                    <p className="mb-0">Desktops</p>
                                                </li>
                                            </ul>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-3">
                                <div className="card m-b-20">
                                    <div className="card-body">
                                        <h4 className="mt-0 header-title m-b-30">Shipped Orders</h4>

                                        <div className="text-center">


                                            <PieChart
                                                label
                                                size={100}
                                                innerHoleSize={80}
                                                data={[
                                                    {key: 'A', value: 69, color: '#8d6e63'},
                                                    {key: 'B', value: 30, color: '#fff'},
                                                ]}
                                            />

                                            <div className="clearfix"></div>
                                            <a href="#" className="btn btn-sm btn-brown m-t-20">View All Data</a>
                                            <ul className="list-inline row m-t-30 clearfix">
                                                <li className="col-6">
                                                    <p className="m-b-5 font-18 font-600">1,154</p>
                                                    <p className="mb-0">Mobile Phones</p>
                                                </li>
                                                <li className="col-6">
                                                    <p className="m-b-5 font-18 font-600">89</p>
                                                    <p className="mb-0">Desktops</p>
                                                </li>
                                            </ul>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-3">
                                <div className="card m-b-20">
                                    <div className="card-body">
                                        <h4 className="mt-0 header-title m-b-30">Cancelled Orders</h4>

                                        <div className="text-center">


                                            <PieChart
                                                label
                                                size={100}
                                                innerHoleSize={80}
                                                data={[
                                                    {key: 'A', value: 95, color: '#90a4ae'},
                                                    {key: 'B', value: 5, color: '#fff'},
                                                ]}
                                            />

                                            <div className="clearfix"></div>
                                            <a href="#" className="btn btn-sm btn-blue-grey m-t-20">View All Data</a>
                                            <ul className="list-inline row m-t-30 clearfix">
                                                <li className="col-6">
                                                    <p className="m-b-5 font-18 font-600">95</p>
                                                    <p className="mb-0">Mobile Phones</p>
                                                </li>
                                                <li className="col-6">
                                                    <p className="m-b-5 font-18 font-600">25</p>
                                                    <p className="mb-0">Desktops</p>
                                                </li>
                                            </ul>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="row">
                            <div className="col-xl-6">
                                <div className="card m-b-20">
                                    <div className="card-body">
                                        <h4 className="mt-0 m-b-30 header-title">Latest Transactions</h4>

                                        <div className="table-responsive">
                                            <table className="table table-vertical mb-0">

                                                <tbody>
                                                <tr>
                                                    <td>
                                                        <img src="assets/images/users/avatar-2.jpg" alt="user-image"
                                                             className="thumb-sm rounded-circle mr-2"/>
                                                        Herbert C. Patton
                                                    </td>
                                                    <td><i
                                                        className="mdi mdi-checkbox-blank-circle text-success"></i> Confirm
                                                    </td>
                                                    <td>
                                                        $14,584
                                                        <p className="m-0 text-muted font-14">Amount</p>
                                                    </td>
                                                    <td>
                                                        5/12/2016
                                                        <p className="m-0 text-muted font-14">Date</p>
                                                    </td>
                                                    <td>
                                                        <button type="button"
                                                                className="btn btn-secondary btn-sm waves-effect">Edit
                                                        </button>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <img src="assets/images/users/avatar-3.jpg" alt="user-image"
                                                             className="thumb-sm rounded-circle mr-2"/>
                                                        Mathias N. Klausen
                                                    </td>
                                                    <td><i
                                                        className="mdi mdi-checkbox-blank-circle text-warning"></i> Waiting
                                                        payment
                                                    </td>
                                                    <td>
                                                        $8,541
                                                        <p className="m-0 text-muted font-14">Amount</p>
                                                    </td>
                                                    <td>
                                                        10/11/2016
                                                        <p className="m-0 text-muted font-14">Date</p>
                                                    </td>
                                                    <td>
                                                        <button type="button"
                                                                className="btn btn-secondary btn-sm waves-effect">Edit
                                                        </button>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <img src="assets/images/users/avatar-4.jpg" alt="user-image"
                                                             className="thumb-sm rounded-circle mr-2"/>
                                                        Nikolaj S. Henriksen
                                                    </td>
                                                    <td><i
                                                        className="mdi mdi-checkbox-blank-circle text-success"></i> Confirm
                                                    </td>
                                                    <td>
                                                        $954
                                                        <p className="m-0 text-muted font-14">Amount</p>
                                                    </td>
                                                    <td>
                                                        8/11/2016
                                                        <p className="m-0 text-muted font-14">Date</p>
                                                    </td>
                                                    <td>
                                                        <button type="button"
                                                                className="btn btn-secondary btn-sm waves-effect">Edit
                                                        </button>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <img src="assets/images/users/avatar-5.jpg" alt="user-image"
                                                             className="thumb-sm rounded-circle mr-2"/>
                                                        Lasse C. Overgaard
                                                    </td>
                                                    <td><i
                                                        className="mdi mdi-checkbox-blank-circle text-danger"></i> Payment
                                                        expired
                                                    </td>
                                                    <td>
                                                        $44,584
                                                        <p className="m-0 text-muted font-14">Amount</p>
                                                    </td>
                                                    <td>
                                                        7/11/2016
                                                        <p className="m-0 text-muted font-14">Date</p>
                                                    </td>
                                                    <td>
                                                        <button type="button"
                                                                className="btn btn-secondary btn-sm waves-effect">Edit
                                                        </button>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <img src="assets/images/users/avatar-6.jpg" alt="user-image"
                                                             className="thumb-sm rounded-circle mr-2"/>
                                                        Kasper S. Jessen
                                                    </td>
                                                    <td><i
                                                        className="mdi mdi-checkbox-blank-circle text-success"></i> Confirm
                                                    </td>
                                                    <td>
                                                        $8,844
                                                        <p className="m-0 text-muted font-14">Amount</p>
                                                    </td>
                                                    <td>
                                                        1/11/2016
                                                        <p className="m-0 text-muted font-14">Date</p>
                                                    </td>
                                                    <td>
                                                        <button type="button"
                                                                className="btn btn-secondary btn-sm waves-effect">Edit
                                                        </button>
                                                    </td>
                                                </tr>

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-6">
                                <div className="card m-b-20">
                                    <div className="card-body">
                                        <h4 className="mt-0 m-b-30 header-title">Latest Orders</h4>

                                        <div className="table-responsive">
                                            <table className="table table-vertical mb-0">

                                                <tbody>
                                                <tr>
                                                    <td>#12354781</td>
                                                    <td>
                                                        <img src="assets/images/products/1.jpg" alt="user-image"
                                                             style={{height: "46px"}} className="rounded mr-2"/>
                                                        Riverston Glass Chair
                                                    </td>
                                                    <td><span
                                                        className="badge badge-pill badge-success">Delivered</span></td>
                                                    <td>
                                                        $185
                                                    </td>
                                                    <td>
                                                        5/12/2016
                                                    </td>
                                                    <td>
                                                        <button type="button"
                                                                className="btn btn-secondary btn-sm waves-effect">Edit
                                                        </button>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>#52140300</td>
                                                    <td>
                                                        <img src="assets/images/products/2.jpg" alt="user-image"
                                                             style={{height: "46px"}} className="rounded mr-2"/>
                                                        Shine Company Catalina
                                                    </td>
                                                    <td><span
                                                        className="badge badge-pill badge-success">Delivered</span></td>
                                                    <td>
                                                        $1,024
                                                    </td>
                                                    <td>
                                                        5/12/2016
                                                    </td>
                                                    <td>
                                                        <button type="button"
                                                                className="btn btn-secondary btn-sm waves-effect">Edit
                                                        </button>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>#96254137</td>
                                                    <td>
                                                        <img src="assets/images/products/3.jpg" alt="user-image"
                                                             style={{height: "46px"}} className="rounded mr-2"/>
                                                        Trex Outdoor Furniture Cape
                                                    </td>
                                                    <td><span className="badge badge-pill badge-danger">Cancel</span>
                                                    </td>
                                                    <td>
                                                        $657
                                                    </td>
                                                    <td>
                                                        5/12/2016
                                                    </td>
                                                    <td>
                                                        <button type="button"
                                                                className="btn btn-secondary btn-sm waves-effect">Edit
                                                        </button>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>#12365474</td>
                                                    <td>
                                                        <img src="assets/images/products/4.jpg" alt="user-image"
                                                             style={{height: "46px"}} className="rounded mr-2"/>
                                                        Oasis Bathroom Teak Corner
                                                    </td>
                                                    <td><span className="badge badge-pill badge-warning">Shipped</span>
                                                    </td>
                                                    <td>
                                                        $8451
                                                    </td>
                                                    <td>
                                                        5/12/2016
                                                    </td>
                                                    <td>
                                                        <button type="button"
                                                                className="btn btn-secondary btn-sm waves-effect">Edit
                                                        </button>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>#85214796</td>
                                                    <td>
                                                        <img src="assets/images/products/5.jpg" alt="user-image"
                                                             style={{height: "46px"}} className="rounded mr-2"/>
                                                        BeoPlay Speaker
                                                    </td>
                                                    <td><span
                                                        className="badge badge-pill badge-success">Delivered</span></td>
                                                    <td>
                                                        $584
                                                    </td>
                                                    <td>
                                                        5/12/2016
                                                    </td>
                                                    <td>
                                                        <button type="button"
                                                                className="btn btn-secondary btn-sm waves-effect">Edit
                                                        </button>
                                                    </td>
                                                </tr>

                                                </tbody>
                                            </table>
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

export default dashboard1;   