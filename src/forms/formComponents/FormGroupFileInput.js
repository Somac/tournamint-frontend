import React from 'react'

const adaptFileEventToValue = delegate =>
  e => delegate(e.target.files[0])

const FileInput = ({
  input: {
    value: omitValue,
    onChange,
    onBlur,
    ...inputProps,
  },
  meta: omitMeta,
  ...props,
  name, label
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        className='form-control-file'
        onChange={adaptFileEventToValue(onChange)}
        onBlur={adaptFileEventToValue(onBlur)}
        type="file"
        {...inputProps}
        {...props}
      />
    </div>
  )
}

export default FileInput
