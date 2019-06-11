import React from 'react'

const InfoContainer = ({ rows }) => {
  return (
    <div className='box my-5'>
      <table className='table'>
        <tbody>
          {rows.map(row => {
            return (
              <tr key={row.head}>
                <td>{row.head}</td>
                <td>{row.value}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default InfoContainer
