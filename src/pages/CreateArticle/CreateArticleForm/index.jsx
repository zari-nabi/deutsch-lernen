import React, { Fragment } from 'react';
import {reduxForm,Field} from 'redux-form';

import Banner from '../../../components/Banner';

const CreateArticle = ({handleSubmit,submitting,invalid}) => (
    <Fragment>
        <Banner />
        <main className="main-content">
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-12">
                            <form className="p-30 bg-gray rounded" onSubmit = {handleSubmit}>
                                <div className="row">
                                    <div className="form-group col-md-12 my-5">
                                        <input type="file" className="form-control" />
                                    </div>
                                    <div className="form-group col-12 col-md-6">
                                        <input className="form-control form-control-lg" type="text" name="name" placeholder="Title" />
                                    </div>
                                    <div className="form-group col-12 col-md-6">
                                        <select name id className="form-control form-control-lg">
                                            <option value>Select category</option>
                                            <option value>Vuejs</option>
                                            <option value>Reactjs</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control form-control-lg" rows={4} placeholder="Content" name="message" defaultValue={""} />
                                </div>
                                <div className="text-center">
                                    <button className="btn btn-lg btn-primary" type="submit" disabled={submitting || invalid}>Create Article</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </Fragment>
)

export default reduxForm({
    form:'create-article',
 //   validate:validateCreateArticle
})(CreateArticle)

