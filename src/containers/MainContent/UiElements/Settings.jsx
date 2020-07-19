import React, {Component} from 'react';
import AUX from '../../../hoc/Aux_';
import Form_uploads from "../Forms/Form_uploads";
import Maps from "../Maps/Maps";

class Settings extends Component {

    render() {
        let props = this.props, elements = [], elements2 = [];

        function inputElem(type, label, id, required, selectOpt = [], value = '') {
            return <div className="form-group row">
                <label htmlFor={id} className="col-sm-3 col-form-label">
                    {(
                        () => {
                            if (type != 'submit' && type != 'button') {
                                return label;
                            }
                        }
                    )()}
                </label>
                <div className="col-sm-7">
                    {(
                        () => {
                            switch (type) {
                                case "text":
                                case "email":
                                case "number":
                                case "password":
                                case "tel":
                                    return <input className="form-control" type={type} name={id} placeholder={label}
                                                  id={id} required={required} value={value}/>;
                                case "textarea":
                                    return <textarea className="form-control" name={id} placeholder={label}
                                                     id={id} required={required}></textarea>;
                                case "file":
                                    return <Form_uploads/>;

                                case "date":
                                    let date = new Date()
                                    return <input className="form-control" type="date" name={id}
                                                  value={date.getFullYear() + "-" + date.getMonth() + "12-" + date.getDay()}
                                                  id={id}/>;
                                case "select":
                                    return <select className="form-control" required={required}>
                                        <option>--Select--</option>
                                        {
                                            selectOpt.map(name => (<option>{name}</option>))
                                        }
                                    </select>;
                                case "submit":
                                case "button":
                                    return <button onClick={""} type={type}
                                                   className="btn btn-primary waves-effect waves-light" id={id}>{label}
                                    </button>;
                                default:
                                    return "";
                            }
                        }
                    )()}
                </div>
            </div>
        }

        function openingHrs(day) {
            return <div className="form-group row">
                <label htmlFor="example-time-input"
                       className="col-sm-2 col-form-label">{day}</label>
                <div className="col-sm-4">
                    <input className="form-control" type="time" value="13:45:00"
                           id="example-time-input"/>
                </div>
                <div className="col-sm-2"><span className="form-control">to</span></div>
                <div className="col-sm-4">
                    <input className="form-control" type="time" value="13:45:00"
                           id="example-time-input"/>
                </div>
            </div>;
        }

        return (
            <AUX>
                <div className="page-content-wrapper">
                    <div className="container-fluid">

                        <div className="row">
                            <div className="col-lg-8">
                                <div className="card m-b-20">
                                    <div className="card-body">

                                        <h4 className="mt-0 header-title">Settings Management</h4>
                                        <p className="text-muted m-b-30 font-14">Use the tab to make change your
                                            settings</p>

                                        <ul className="nav nav-tabs" role="tablist">
                                            <li className="nav-item">
                                                <a className="nav-link active" data-toggle="tab" href="#home"
                                                   role="tab">
                                                    <span className="d-none d-md-block">Restaurant Settings</span><span
                                                    className="d-block d-md-none"><i
                                                    className="mdi mdi-home-variant h5"></i></span>
                                                </a>
                                            </li>

                                            <li className="nav-item">
                                                <a className="nav-link" data-toggle="tab" href="#siteInfo" role="tab">
                                                    <span className="d-none d-md-block">Location/Map</span><span
                                                    className="d-block d-md-none"><i
                                                    className="mdi mdi-email h5"></i></span>
                                                </a>
                                            </li>

                                            <li className="nav-item">
                                                <a className="nav-link" data-toggle="tab" href="#siteInfo2" role="tab">
                                                    <span
                                                        className="d-none d-md-block">Restaurant Open/Close</span><span
                                                    className="d-block d-md-none"><i
                                                    className="mdi mdi-email h5"></i></span>
                                                </a>
                                            </li>
                                        </ul>

                                        <div className="tab-content">
                                            <div className="tab-pane active p-3" id="home" role="tabpanel">
                                                <p className="font-14 mb-0">
                                                    <img src={"assets/images/logo.png"} className="img-fluid"
                                                         alt="tbl"/>
                                                    {(
                                                        () => {
                                                            elements.push(inputElem('file', 'Logo', 'image'));
                                                            elements.push(inputElem('text', 'Restaurant Name *', 'name', 'required', '', 'Katerack'));
                                                            elements.push(inputElem('textarea', 'Restaurant Description *', 'desc', 'required', '', 'Katerack'));
                                                            elements.push(inputElem('text', 'Restaurant Email*', 'email', '', '', 'info@katerack.com'));
                                                            elements.push(inputElem('text', 'Restaurant Phone*', 'phone', 'required', '', '+44 (0) 20 3310 2000'));
                                                            elements.push(inputElem('text', 'Manager Name', 'manager', '', '', 'James Pattinson'));
                                                            elements.push(inputElem('text', 'Manager Contact Phone', 'manager', '', '', '+44 (0) 20 3310 2000'));

                                                            elements.push(inputElem('select', 'Restaurant Pre-Order', 'preOrder', '', ['Yes', 'No']));
                                                            elements.push(inputElem('select', 'Table Booking', 'tableBooking', '', ['Yes', 'No']));
                                                            elements.push(inputElem('text', 'PickUp Fee', 'pickupFee', '', null, 10));
                                                            elements.push(inputElem('text', 'PickUp Time', 'pickupTime', '', null, 10));
                                                        }
                                                    )()}
                                                    {elements}

                                                    {inputElem('submit', 'Save', 'submit')}
                                                </p>
                                            </div>
                                            <div className="tab-pane p-3" id="siteInfo" role="tabpanel">
                                                <p className="font-14 mb-0">
                                                    {(
                                                        () => {
                                                            elements2.push(inputElem('select', 'Country*', 'country', 'required', ['Australia', 'Bangladesh', 'India']));
                                                            elements2.push(inputElem('select', 'City', 'city'));
                                                            elements2.push(inputElem('select', 'Town', 'town'));
                                                            elements2.push(inputElem('text', 'Latitude', 'Latitude', '', '', '44.82824904885752'));
                                                            elements2.push(inputElem('text', 'Longitude', 'Longitude', '', '', '-68.75611576627045'));
                                                        }
                                                    )()}
                                                    {elements2}

                                                    <Maps/>
                                                    <br/>
                                                    {inputElem('submit', 'Save', 'submit')}
                                                </p>
                                            </div>

                                            <div className="tab-pane p-3" id="siteInfo2" role="tabpanel">
                                                <p className="font-14 mb-0">
                                                    <h4>Opening Hours</h4><br/>
                                                    {openingHrs('Monday')}
                                                    {openingHrs('Tuesday')}
                                                    {openingHrs('Wednesday')}
                                                    {openingHrs('Thursday')}
                                                    {openingHrs('Friday')}
                                                    {openingHrs('Saturday')}
                                                    {openingHrs('Sunday')}

                                                    {inputElem('submit', 'Save', 'submit')}
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 hideMe">
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
