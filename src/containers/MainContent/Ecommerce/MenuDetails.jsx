import React, {Component} from 'react';
import AUX from '../../../hoc/Aux_';

class MenuDetails extends Component {

    render() {
        return (
            <AUX>
                <div className="page-content-wrapper">
                    <div className="container-fluid">

                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-6 col-lg-6">
                                                <div className="product-list-box">
                                                    <a href="javascript:void(0);">
                                                        <img src="assets/images/products/cake.jpg" className="img-fluid"
                                                             alt="work-thumbnail"/>
                                                    </a>
                                                    <div className="detail">
                                                        <h4 className="font-16"><a href=""
                                                                                   className="text-dark">Cake $21</a>
                                                        </h4>

                                                        <p className="m-0 font-14">Enjoy the delicious savory meals of
                                                            Tasty
                                                            Treat. The mouthwatering dishes will surely satisfy your
                                                            cravings.</p>
                                                        <p><span className="text-success"> In Stock</span></p>
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

export default MenuDetails;   