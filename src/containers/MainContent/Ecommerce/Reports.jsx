import React, {Component} from 'react';
import AUX from '../../../hoc/Aux_';
import DatePicker from "react-datepicker";
import ExportComponent from "../rh/ExportComponent";

class Reports extends Component {
    constructor(props) {
        super(props);

        this.state = {
            simple_color: false,
            simple: '#fff',
            rgb_color: '#fff',
            rgb: false,
            cmp_bkg: '#bf98a4',
            btn: false,
            disbadge: false,
            disthresh: false,
            placementbadge: false,
            textcount: 0,
            optioncount: 0,
            placementcount: 0,
            advanceclass: "badgecount",
            switch1: true,
            switch2: true,
            switch3: true,
            switch4: true,
            switch5: true,
            switch6: true,
            switch7: true,
            switch8: true,
            switch9: true,
            default_date: new Date(),
            default: false,
            auto_close: new Date(),
            start_date: new Date(),
            end_date: new Date(),
            data_attr: 56,
            postfix: 20,
            prefix: 25,
            empty_val: 0,
            not_attr: 15,
            explicit_val: 33,
            selectedOption: null,
            selectedOption1: null,
        };
    }

    render() {
        return (
            <AUX>
                <div className="page-content-wrapper">
                    <div className="container-fluid">

                        <div className="row">
                            <div className="col-12">
                                <div className="card m-b-20">
                                    <div className="card-body">
                                        <h4>STATEMENTS</h4>

                                        <div className="form-group mb-0">
                                            <label>Date Range</label>
                                            <div>
                                                <div className="row">
                                                    <div className="col-md-3">
                                                        <DatePicker
                                                            className="form-control"
                                                            selected={this.state.start_date}
                                                            onChange={this.handleStart}
                                                        />
                                                    </div>

                                                    <div className="col-md-3">
                                                        <DatePicker
                                                            className="form-control"
                                                            selected={this.state.end_date}
                                                            onChange={this.handleEnd}
                                                        />
                                                    </div>

                                                    <div className="col-md-3">
                                                        <select className="form-control">
                                                            <option>--ALL--</option>
                                                            <option>Pizza</option>
                                                            <option>Burger</option>
                                                            <option>Chicken</option>
                                                            <option>Grill</option>
                                                            <option>Pastry</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <button type="submit"
                                                                className="btn btn-primary waves-effect waves-light form-control">Search
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <br/>

                                        <table id="datatable"
                                               className="table table-striped dt-responsive nowrap table-vertical"
                                               width="100%" cellspacing="0">
                                            <thead>
                                            <tr>
                                                <th>MENU</th>
                                                <th>QUANTITY</th>
                                                <th>UNIQUE PURCHASES</th>
                                                <th>PRODUCT REVENUE</th>
                                                <th>AVERAGE EXPENSE</th>
                                                <th>AVERAGE PRICE</th>
                                                <th>AVERAGE QUANTITY</th>
                                            </tr>
                                            </thead>
                                            <tbody>


                                            <tr>
                                                <td>Pizza</td>
                                                <td>3</td>
                                                <td>2</td>
                                                <td>$374.97</td>
                                                <td>$75.99</td>
                                                <td>$124.99</td>
                                                <td>1.5</td>
                                            </tr>
                                            <tr>
                                                <td>Burger</td>
                                                <td>2</td>
                                                <td>2</td>
                                                <td>$2599.98</td>
                                                <td>$1250.99</td>
                                                <td>$1299.99</td>
                                                <td>1</td>
                                            </tr>
                                            <tr>
                                                <td>Chicken</td>
                                                <td>1</td>
                                                <td>1</td>
                                                <td>$49.99</td>
                                                <td>24.99</td>
                                                <td>$49.99</td>
                                                <td>1</td>
                                            </tr>
                                            <tr>
                                                <td>Grill</td>
                                                <td>1</td>
                                                <td>1</td>
                                                <td>$44.99</td>
                                                <td>$19.99</td>
                                                <td>$44.99</td>
                                                <td>1</td>
                                            </tr>
                                            <tr>
                                                <td>Cake</td>
                                                <td>1</td>
                                                <td>1</td>
                                                <td>$124.99</td>
                                                <td>$75.99</td>
                                                <td>$124.99</td>
                                                <td>1</td>
                                            </tr>
                                            <tr>
                                                <td>Pastry</td>
                                                <td>1</td>
                                                <td>1</td>
                                                <td>$899.99</td>
                                                <td>$850.99</td>
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
                                                <th>$404.99</th>
                                                <th>$454.99</th>
                                                <th>1.12</th>
                                            </tr>
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

export default Reports;