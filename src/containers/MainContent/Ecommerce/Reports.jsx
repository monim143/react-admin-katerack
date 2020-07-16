import React, {Component} from 'react';
import AUX from '../../../hoc/Aux_';

class Reports extends Component {

    render() {
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
                                                <th>PRODUCT</th>
                                                <th>QUANTITY</th>
                                                <th>UNIQUE PURCHASES</th>
                                                <th>PRODUCT REVENUE</th>
                                                <th>AVERAGE PRICE</th>
                                                <th>AVERAGE QUANTITY</th>
                                            </tr>
                                            </thead>
                                            <tbody>


                                            <tr>
                                                <td>Riverston Glass Chair</td>
                                                <td>3</td>
                                                <td>2</td>
                                                <td>$374.97</td>
                                                <td>$124.99</td>
                                                <td>1.5</td>
                                            </tr>
                                            <tr>
                                                <td>Shine Company Catalina</td>
                                                <td>2</td>
                                                <td>2</td>
                                                <td>$2599.98</td>
                                                <td>$1299.99</td>
                                                <td>1</td>
                                            </tr>
                                            <tr>
                                                <td>Trex Outdoor Furniture Cape</td>
                                                <td>1</td>
                                                <td>1</td>
                                                <td>$49.99</td>
                                                <td>$49.99</td>
                                                <td>1</td>
                                            </tr>
                                            <tr>
                                                <td>Oasis Bathroom Teak Corner</td>
                                                <td>1</td>
                                                <td>1</td>
                                                <td>$44.99</td>
                                                <td>$44.99</td>
                                                <td>1</td>
                                            </tr>
                                            <tr>
                                                <td>Condimentum Posuere</td>
                                                <td>1</td>
                                                <td>1</td>
                                                <td>$124.99</td>
                                                <td>$124.99</td>
                                                <td>1</td>
                                            </tr>
                                            <tr>
                                                <td>Riverston Glass Chair</td>
                                                <td>1</td>
                                                <td>1</td>
                                                <td>$899.99</td>
                                                <td>$899.99</td>
                                                <td>1</td>
                                            </tr>

                                            </tbody>
                                            <tfoot>
                                            <tr>
                                                <th></th>
                                                <th>9</th>
                                                <th>8</th>
                                                <th>$4,094.91</th>
                                                <th>$454.99</th>
                                                <th>1.12</th>
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

export default Reports;