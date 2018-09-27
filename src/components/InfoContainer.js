import React from 'react';

const InfoContainer = ({header, rows}) => {
    console.log(rows)
    return (
        <div className='box'>
            <h5 className='text-center my-3'>{header}</h5>
            <table className='table'>
                <tbody>
                    {rows.map(row => {
                        return(
                            <tr key={row.head}>
                                <td>{row.head}</td>
                                <td>{row.value}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default InfoContainer;