import React, {Component} from 'react';
import AUX from '../../../hoc/Aux_';

class Users extends Component {

    render() {
        const tbodyElements = [
            ['one' , 'two', 'three']
        ];

        const items = []

        for (const [index, value] of tbodyElements.entries()) {
            items.push(<tr>
                <td key={index}>{value}</td>
            </tr>)
        }
        const actionElems = <td>
            <a href="javascript:void(0);" className="m-r-15 text-muted"
               data-toggle="tooltip" data-placement="top" title=""
               data-original-title="Edit"><i
                className="mdi mdi-pencil font-18"></i></a>
            <a href="javascript:void(0);" className="text-muted"
               data-toggle="tooltip" data-placement="top" title=""
               data-original-title="Delete"><i
                className="mdi mdi-close font-18"></i></a>
        </td>;


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
                                                <th>Display Name</th>
                                                <th>Username/ Email</th>
                                                <th>Creating Date</th>
                                                <th>Action</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>Herbert C. Patton</td>
                                                <td>herbart@Katerack.com</td>
                                                <td>July 20, 2017</td>
                                                { actionElems }
                                            </tr>

                                            <tr>
                                                <td>Fabian M. Berryhill</td>
                                                <td>FabianMBerryhill@teleworm.us</td>
                                                <td>June 20, 2017</td>
                                                { actionElems }
                                            </tr>

                                            <tr>
                                                <td>Edward E. White</td>
                                                <td>EdwardEWhite@armyspy.com</td>
                                                <td>June 22, 2017</td>
                                                { actionElems }
                                            </tr>

                                            <tr>
                                                <td>Rodney V. Deshong</td>
                                                <td>RodneyVDeshong@teleworm.us</td>
                                                <td>April 12, 2017</td>
                                                { actionElems }
                                            </tr>

                                            <tr>
                                                <td>Ronald R. Maher</td>
                                                <td>RonaldRMaher@armyspy.com</td>
                                                <td>June 11, 2017</td>
                                                { actionElems }
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

export default Users;