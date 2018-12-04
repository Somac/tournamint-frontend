import React from 'react'

const ErrorNotification = ({ error }) => {
  if (error) {
    return (
      <div className="alert alert-danger my-5" role="alert">
        {error}
      </div>
    )
  }
  return (<React.Fragment></React.Fragment>)
}

export default ErrorNotification
