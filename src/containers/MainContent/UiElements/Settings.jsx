import React, {Component} from 'react';
import AUX from '../../../hoc/Aux_';

class Settings extends Component {

    render() {

        return (
            <AUX>
                <div className="page-content-wrapper">
                    <div className="container-fluid">

                        <div className="row">
                            <div className="col-lg-6">
                                <div className="card m-b-20">
                                    <div className="card-body">

                                        <h4 className="mt-0 header-title">Settings Management</h4>
                                        <p className="text-muted m-b-30 font-14">Use the tab to make change your
                                            settings</p>

                                        <ul className="nav nav-tabs" role="tablist">
                                            <li className="nav-item">
                                                <a className="nav-link active" data-toggle="tab" href="#home"
                                                   role="tab">
                                                    <span className="d-none d-md-block">Site Info</span><span
                                                    className="d-block d-md-none"><i
                                                    className="mdi mdi-home-variant h5"></i></span>
                                                </a>
                                            </li>

                                            <li className="nav-item">
                                                <a className="nav-link" data-toggle="tab" href="#siteInfo" role="tab">
                                                    <span className="d-none d-md-block">Maintenance Mode</span><span
                                                    className="d-block d-md-none"><i
                                                    className="mdi mdi-email h5"></i></span>
                                                </a>
                                            </li>
                                        </ul>

                                        <div className="tab-content">
                                            <div className="tab-pane active p-3" id="home" role="tabpanel">
                                                <p className="font-14 mb-0">
                                                    <div className="form-group row">
                                                        <label htmlFor="example-text-input-lg"
                                                               className="col-sm-2 col-form-label">Site Name</label>
                                                        <div className="col-sm-10">
                                                            <input className="form-control form-control-sm" type="text"
                                                                   value="Katerack"
                                                                   id="example-text-input-lg"/>
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label htmlFor="example-text-input-lg2"
                                                               className="col-sm-2 col-form-label">Description</label>
                                                        <div className="col-sm-10">
                                                            <input className="form-control form-control-sm" type="text"
                                                                   value="Responsive Flate Admin Dashboard"
                                                                   id="example-text-input-lg2"/>
                                                        </div>
                                                    </div>
                                                </p>
                                            </div>
                                            <div className="tab-pane p-3" id="siteInfo" role="tabpanel">
                                                <p className="font-14 mb-0">
                                                    <div className="form-group row">
                                                        <div className="col-sm-10">
                                                            <select className="form-control">
                                                                <option>Deactivated</option>
                                                                <option>Activated</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="card m-b-20">
                                    <div className="card-body">

                                        <h4 className="mt-0 header-title">FAQ</h4>
                                        <p className="text-muted m-b-30 font-14">Frequently Asked Questions.</p>


                                        <div id="accordion">
                                            <div className="card">
                                                <div className="card-header p-3" id="headingOne">
                                                    <h6 className="m-0">
                                                        <a href="#collapseOne" className="text-dark"
                                                           data-toggle="collapse"
                                                           aria-expanded="true"
                                                           aria-controls="collapseOne">
                                                            How can I navigate this website?
                                                        </a>
                                                    </h6>
                                                </div>

                                                <div id="collapseOne" className="collapse show"
                                                     aria-labelledby="headingOne" data-parent="#accordion">
                                                    <div className="card-body">
                                                        You can check all these categories in this Product Categories
                                                        section. You can also visit this section - New & Interesting
                                                        Finds – to check the most popular and new items out.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="card-header p-3" id="headingTwo">
                                                    <h6 className="m-0">
                                                        <a href="#collapseTwo" className="text-dark collapsed"
                                                           data-toggle="collapse"
                                                           aria-expanded="false"
                                                           aria-controls="collapseTwo">
                                                            Where can I read reviews about these products?
                                                        </a>
                                                    </h6>
                                                </div>
                                                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo"
                                                     data-parent="#accordion">
                                                    <div className="card-body">
                                                        Our satisfied customers often give honest reviews on the
                                                        products they buy from this store. You will find them both on
                                                        the Home Page and the Customer Reviews section.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="card-header p-3" id="headingThree">
                                                    <h6 className="m-0">
                                                        <a href="#collapseThree" className="text-dark collapsed"
                                                           data-toggle="collapse"
                                                           aria-expanded="false"
                                                           aria-controls="collapseThree">
                                                            Can I affiliate with you?
                                                        </a>
                                                    </h6>
                                                </div>
                                                <div id="collapseThree" className="collapse"
                                                     aria-labelledby="headingThree" data-parent="#accordion">
                                                    <div className="card-body">
                                                        Of course! We value our affiliates and customers the same way.
                                                        We have made available an affiliate program with opportunities
                                                        to take part in our exclusive offers and social promos, product
                                                        data, free shipping, and several other features.
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

export default Settings;
