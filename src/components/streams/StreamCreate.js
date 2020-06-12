import React from 'react'
// import { Field, reduxForm } from 'redux-form';
// import { getFormMeta } from 'redux-form';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamCreate extends React.Component {
    // renderError({ error, touched }) {
    //     if (touched && error) {
    //         return (
    //             <div className="ui error message">
    //                 <div className="header">{error}</div>
    //             </div>
    //         );
    //     }
    // }

    // renderInput = ({ input, label, meta }) => {  // or(formProps) {
    //     // console.log(formProps.meta);
    //     // console.log(meta);
    //     const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    //     return (
    //         <div className={className} >
    //             <label>{label}</label>
    //             <input {...input} autoComplete="off" />
    //             {/* <div>{meta.error}</div> */}
    //             {this.renderError(meta)}
    //             {/* <label>{formProps.label}</label>
    //             <input {...formProps.input} />
    //             <div>{formProps.meta.error}</div> */}
    //         </div>
    //     );
    // }

    onSubmit = (formValues) => {
        // console.log(formValues);
        this.props.createStream(formValues);
    }

    render() {
        // console.log(this.props);
        return (
            <div>
                <h3>Create a Stream</h3>
                <StreamForm onSubmit={this.onSubmit} />
            </div>

            // <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
            //     <Field name="title" component={this.renderInput} label="Enter Title: " />
            //     <Field name="description" component={this.renderInput} label="Enter Description: " />

            //     <button className="ui button primary">Submit</button>
            // </form>
        );
    }
}
//Make errors same attribute name as the Field.name for them to show from renderInput
// const validate = (formValues) => {
//     // console.log('hi');
//     const errors = {};
//     if (!formValues.title) {
//         errors.title = 'You must enter a title';
//     }
//     if (!formValues.description) {
//         errors.description = 'You must enter a description';
//     }
//     return errors;
// }

// const formWrapped = reduxForm({
//     form: 'streamCreate',
//     validate: validate
// })(StreamCreate);

export default connect(null, { createStream })(StreamCreate);