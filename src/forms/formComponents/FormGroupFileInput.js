import React from 'react'

const handleChange = (handler) => ({target: {files}}) =>
  handler(files.length ? {file: files[0], name: files[0].name} : {});

const FileInput = ({
  input: {onChange, onBlur, value: omitValue, ...inputProps},
  meta: omitMeta,
  ...props
}) => (
  <input type="file"
    onChange={handleChange(onChange)} onBlur={handleChange(onBlur)}
    {...inputProps} {...props} />
);

const FormGroupFileInput = ({ input, name, label, type, meta: { touched, error, warning } }) => {

    let classes = ['form-control']
    if (touched && error) {
        classes = classes.concat('is-invalid')
    }
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <FileInput />
        </div>
    )
}

export default FormGroupFileInput
