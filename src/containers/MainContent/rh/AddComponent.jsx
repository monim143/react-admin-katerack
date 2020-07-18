import React, {Component} from 'react';
import AUX from '../../../hoc/Aux_';
import Form_uploads from "../Forms/Form_uploads";

class AddComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let props = this.props, type = props.type, elements = [];

        function inputElem(type, label, id, required, selectOpt = []) {
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
                                                  id={id} required={required}/>;
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

        return (
            <AUX>
                <div className="page-content-wrapper">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-6">
                                <div className="card m-b-20">
                                    <div className="card-body">
                                        <form>
                                            {(
                                                () => {
                                                    switch (type) {
                                                        case "restaurant":
                                                            elements.push(inputElem('text', 'Restaurant Name', 'name', 'required'));
                                                            elements.push(inputElem('email', 'Email', 'email'));
                                                            elements.push(inputElem('tel', 'Phone', 'phone'));
                                                            elements.push(inputElem('textarea', 'Address', 'address'));
                                                            break;
                                                        case "menu":
                                                            elements.push(inputElem('text', 'Menu Name', 'name', 'required'));
                                                            elements.push(inputElem('textarea', 'Description', 'desc'));
                                                            elements.push(inputElem('number', 'Price', 'price'));
                                                            elements.push(inputElem('file', 'Image', 'image'));
                                                            break;
                                                        case "user":
                                                            elements.push(inputElem('text', 'Display Name', 'name', 'required'));
                                                            elements.push(inputElem('email', 'Email', 'email'));
                                                            elements.push(inputElem('password', 'Password', 'password'));
                                                            elements.push(inputElem('password', 'Confirm Password', 'conf-password'));
                                                            elements.push(inputElem('select', 'User Role', 'role', 'required', ['Admin', 'User']));
                                                            elements.push(inputElem('file', 'Avatar', 'image'));
                                                            break;
                                                        default:
                                                            return "";
                                                    }
                                                }
                                            )()}
                                            {elements}
                                            {inputElem('submit', 'Save', 'submit')}
                                        </form>
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

export default AddComponent;