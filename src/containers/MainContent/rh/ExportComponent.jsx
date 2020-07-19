import React, {Component} from 'react';

class ExportComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="d-print-none">
                <div className="pull-right">
                    <a href="#" className="btn btn-success waves-effect waves-light"><i
                        className="fa fa-cloud-download"></i> Download </a>  &nbsp;

                    <a href="#" className="btn btn-primary waves-effect waves-light"><i
                        className="fa fa-file-pdf-o"></i> PDF </a>  &nbsp;
                    <a href="javascript:window.print()"
                       className="btn btn-success waves-effect waves-light"><i
                        className="fa fa-print"></i> Receipt </a> &nbsp;
                    <a href="#" className="btn btn-primary waves-effect waves-light"><i className="fa fa-envelope"></i> Email</a>
                </div>
            </div>
        );
    }
}

export default ExportComponent;