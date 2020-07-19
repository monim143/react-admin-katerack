import React, {Component} from 'react';
import AUX from '../../../hoc/Aux_';
import {Link} from 'react-router-dom';

import {Progress} from 'reactstrap';
import ExportComponent from "../rh/ExportComponent";

class ecommerce_product_list extends Component {

    render() {
        let date = new Date();

        function addedDate() {
            return <td>{date.getDay()}/{date.getMonth()}/{date.getFullYear()}</td>;
        }

        function stock() {
            return <td>
                25
                {/* <Progress style={{height: '8px'}} value={25}/><br></br>*/}
            </td>;
        }

        function action() {
            return <td>
                <Link to="menu-details">Details</Link>
            </td>;
        }

        function image(image) {
            let imgPath = "assets/images/products/" + image + ".jpg";
            return <td className="product-list-img">
                <Link to="menu-details">
                    <img src={imgPath} className="img-fluid"
                         alt="tbl"/>
                </Link>
            </td>
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
                                                <th>Image</th>
                                                <th>Menu Name</th>
                                                <th>Amount</th>
                                                <th>Added Date</th>
                                                <th>Stock</th>
                                                <th>Action</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                {image('pizza')}
                                                <td>
                                                    <h6 className="mt-0 m-b-5">Pizza</h6>
                                                    <p className="m-0 font-14">Enjoy delicious pizza...</p>
                                                </td>
                                                <td>$21</td>
                                                {addedDate()}
                                                {stock()}
                                                {action()}
                                            </tr>
                                            <tr>
                                                {image('burger')}
                                                <td>
                                                    <h6 className="mt-0 m-b-5">Burger</h6>
                                                    <p className="m-0 font-14">Enjoy the delicious savory meals of Tasty
                                                        Treat. The mouthwatering dishes will surely satisfy your
                                                        cravings.</p>
                                                </td>
                                                <td>$11</td>
                                                {addedDate()}
                                                {stock()}
                                                {action()}
                                            </tr>

                                            <tr>
                                                {image('chicken')}
                                                <td>
                                                    <h6 className="mt-0 m-b-5">Chicken</h6>
                                                    <p className="m-0 font-14">Freshly prepared with Tasty Treat’s
                                                        amazing recipe. Fall in love with the taste of one of the finest
                                                        meals from Tasty Treat.</p>
                                                </td>

                                                <td>$521</td>
                                                {addedDate()}
                                                {stock()}
                                                {action()}
                                            </tr>
                                            <tr>
                                                {image('grill')}
                                                <td>
                                                    <h6 className="mt-0 m-b-5">Grill</h6>
                                                    <p className="m-0 font-14">Available at Tasty Treat Grill Outlets
                                                        Only.</p>
                                                </td>

                                                <td>$33</td>
                                                {addedDate()}
                                                {stock()}
                                                {action()}
                                            </tr>
                                            <tr>
                                                {image('cake')}
                                                <td>
                                                    <h6 className="mt-0 m-b-5"> Cake</h6>
                                                    <p className="m-0 font-14">A cake full of freshness is nothing but
                                                        our Cherry cake. A combination that will give you an amazing
                                                        moment of joy in every bite</p>
                                                </td>

                                                <td>$21</td>
                                                {addedDate()}
                                                {stock()}
                                                {action()}
                                            </tr>
                                            <tr>
                                                {image('pastry')}
                                                <td>
                                                    <h6 className="mt-0 m-b-5">Pastry</h6>
                                                    <p className="m-0 font-14">A passionate mixture of sweetness and
                                                        creaminess. Tasty Treat thrives in making each and every dessert
                                                        according to everyone’s taste</p>
                                                </td>

                                                <td>$27</td>
                                                {addedDate()}
                                                {stock()}
                                                {action()}
                                            </tr>
                                            </tbody>
                                            <tfoot>
                                            <tr>
                                                <td colSpan={6}>
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

export default ecommerce_product_list;