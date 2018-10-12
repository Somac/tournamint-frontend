import React from 'react'

const Table = ({ headers, body }) => {
    let j = 0;
    return (
        <table className='table'>
            <thead>
                <tr>
                    {headers.map(header => <th key={header}>{header}</th>)}
                </tr>
            </thead>
            <tbody>
                {body.map(data => (
                    <tr key={body.indexOf(data)}>
                        {data.map(column => {
                            j++
                            return(
                                <td key={`${body.indexOf(data)}-${j}`}>
                                    {column}
                                </td>
                        )})}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table
