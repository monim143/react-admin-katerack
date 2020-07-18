import React, {Component} from 'react';
import AUX from '../../../hoc/Aux_';

class ListComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let props = this.props, type = props.type;
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
                                                <th>NAME</th>
                                                <th>EMAIL</th>
                                                <th>PHONE</th>
                                                <th>ADDRESS</th>
                                                <th>CREATION DATE</th>
                                                <th>ACTION</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>DaVinci Restorant</td>
                                                <td>herbart@Katerack.com</td>
                                                <td>801-388-6508</td>
                                                <td>2470 Grove Street
                                                    Bethpage, NY 11714
                                                </td>
                                                <td>July 20, 2017</td>
                                                <td>
                                                    <a href="javascript:void(0);" className="m-r-15 text-muted"
                                                       data-toggle="tooltip" data-placement="top" title=""
                                                       data-original-title="Edit"><i
                                                        className="mdi mdi-pencil font-18"></i></a>
                                                    <a href="javascript:void(0);" className="text-muted"
                                                       data-toggle="tooltip" data-placement="top" title=""
                                                       data-original-title="Delete"><i
                                                        className="mdi mdi-close font-18"></i></a>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>Burger House</td>
                                                <td>FabianMBerryhill@teleworm.us</td>
                                                <td>518-281-2680</td>
                                                <td>
                                                    North Greenbush, NY 12144
                                                </td>
                                                <td>June 20, 2017</td>
                                                <td>
                                                    <a href="javascript:void(0);" className="m-r-15 text-muted"
                                                       data-toggle="tooltip" data-placement="top" title=""
                                                       data-original-title="Edit"><i
                                                        className="mdi mdi-pencil font-18"></i></a>
                                                    <a href="javascript:void(0);" className="text-muted"
                                                       data-toggle="tooltip" data-placement="top" title=""
                                                       data-original-title="Delete"><i
                                                        className="mdi mdi-close font-18"></i></a>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>Burito Yum</td>
                                                <td>EdwardEWhite@armyspy.com</td>
                                                <td>850-561-1648</td>
                                                <td>1246 Drainer Avenue
                                                    Tallahassee, FL 32301
                                                </td>
                                                <td>June 22, 2017</td>
                                                <td>
                                                    <a href="javascript:void(0);" className="m-r-15 text-muted"
                                                       data-toggle="tooltip" data-placement="top" title=""
                                                       data-original-title="Edit"><i
                                                        className="mdi mdi-pencil font-18"></i></a>
                                                    <a href="javascript:void(0);" className="text-muted"
                                                       data-toggle="tooltip" data-placement="top" title=""
                                                       data-original-title="Delete"><i
                                                        className="mdi mdi-close font-18"></i></a>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>Pizza Venecia</td>
                                                <td>RodneyVDeshong@teleworm.us</td>
                                                <td>678-737-9078</td>
                                                <td>4318 Kuhl Avenue
                                                    Woodstock, GA 30188
                                                </td>
                                                <td>April 12, 2017</td>
                                                <td>
                                                    <a href="javascript:void(0);" className="m-r-15 text-muted"
                                                       data-toggle="tooltip" data-placement="top" title=""
                                                       data-original-title="Edit"><i
                                                        className="mdi mdi-pencil font-18"></i></a>
                                                    <a href="javascript:void(0);" className="text-muted"
                                                       data-toggle="tooltip" data-placement="top" title=""
                                                       data-original-title="Delete"><i
                                                        className="mdi mdi-close font-18"></i></a>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>Giovani Bar & Grill</td>
                                                <td>RonaldRMaher@armyspy.com</td>
                                                <td>949-718-5315</td>
                                                <td>3894 Elk Street
                                                    Newport Beach, CA 92660
                                                </td>
                                                <td>June 11, 2017</td>
                                                <td>
                                                    <a href="javascript:void(0);" className="m-r-15 text-muted"
                                                       data-toggle="tooltip" data-placement="top" title=""
                                                       data-original-title="Edit"><i
                                                        className="mdi mdi-pencil font-18"></i></a>
                                                    <a href="javascript:void(0);" className="text-muted"
                                                       data-toggle="tooltip" data-placement="top" title=""
                                                       data-original-title="Delete"><i
                                                        className="mdi mdi-close font-18"></i></a>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>Burger 2Go</td>
                                                <td>ChrisTParks@rhyta.com</td>
                                                <td>407-855-7376</td>
                                                <td>1521 McDonald Avenue
                                                    Orlando, FL 32809
                                                </td>
                                                <td>March 20, 2017</td>
                                                <td>
                                                    <a href="javascript:void(0);" className="m-r-15 text-muted"
                                                       data-toggle="tooltip" data-placement="top" title=""
                                                       data-original-title="Edit"><i
                                                        className="mdi mdi-pencil font-18"></i></a>
                                                    <a href="javascript:void(0);" className="text-muted"
                                                       data-toggle="tooltip" data-placement="top" title=""
                                                       data-original-title="Delete"><i
                                                        className="mdi mdi-close font-18"></i></a>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>Fresh Taco</td>
                                                <td>MarioMSloan@rhyta.com</td>
                                                <td>224-585-9508</td>
                                                <td>4733 Victoria Street
                                                    Chicago, IL 60606
                                                </td>
                                                <td>June 15, 2017</td>
                                                <td>
                                                    <a href="javascript:void(0);" className="m-r-15 text-muted"
                                                       data-toggle="tooltip" data-placement="top" title=""
                                                       data-original-title="Edit"><i
                                                        className="mdi mdi-pencil font-18"></i></a>
                                                    <a href="javascript:void(0);" className="text-muted"
                                                       data-toggle="tooltip" data-placement="top" title=""
                                                       data-original-title="Delete"><i
                                                        className="mdi mdi-close font-18"></i></a>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>Veneto Italian Restorant</td>
                                                <td>ToshaTRivera@teleworm.us</td>
                                                <td>573-426-7916</td>
                                                <td>547 Maple Court
                                                    Rolla, MO 65401
                                                </td>
                                                <td>April 02, 2017</td>
                                                <td>
                                                    <a href="javascript:void(0);" className="m-r-15 text-muted"
                                                       data-toggle="tooltip" data-placement="top" title=""
                                                       data-original-title="Edit"><i
                                                        className="mdi mdi-pencil font-18"></i></a>
                                                    <a href="javascript:void(0);" className="text-muted"
                                                       data-toggle="tooltip" data-placement="top" title=""
                                                       data-original-title="Delete"><i
                                                        className="mdi mdi-close font-18"></i></a>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>Restoran Bonimi</td>
                                                <td>JamesMHenry@dayrep.com</td>
                                                <td>732-533-0201</td>
                                                <td>2231 Webster Street
                                                    Newark, NJ 07102
                                                </td>
                                                <td>June 16, 2017</td>
                                                <td>
                                                    <a href="javascript:void(0);" className="m-r-15 text-muted"
                                                       data-toggle="tooltip" data-placement="top" title=""
                                                       data-original-title="Edit"><i
                                                        className="mdi mdi-pencil font-18"></i></a>
                                                    <a href="javascript:void(0);" className="text-muted"
                                                       data-toggle="tooltip" data-placement="top" title=""
                                                       data-original-title="Delete"><i
                                                        className="mdi mdi-close font-18"></i></a>
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
            </AUX>
        );
    }
}

export default ListComponent;