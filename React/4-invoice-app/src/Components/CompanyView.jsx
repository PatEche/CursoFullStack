/* eslint-disable react/prop-types */

export const CompanyView = ({title, company }) => {

    const { name: companyName, fiscalNumber } = company;


    return (
        <>
        <h3>{ title }</h3>
                <ul className="list-group">
                  <li className="list-group-item active">{companyName}</li>
                  <li className="list-group-item">{fiscalNumber}</li>
                </ul>
        </>
    )

};