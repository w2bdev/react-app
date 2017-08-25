import React from 'react';
import Datepicker from '../../../components/Datepicker/Datepicker';

export const Role = () => {
    return (
        <div>
            <h1 className="page-header">
                Role <small>manage access control</small>
            </h1>
            <div className="row">
                <div className="col-md-8">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            Heading
                        </div>
                        <div className="panel-body">
                            body
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                   <Datepicker range={true} />
                </div>
            </div>
        </div>
    )
}

export default Role