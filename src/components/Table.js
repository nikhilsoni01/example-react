import React from 'react'

const Table = ({col1 , col2 , col3}) => {
  return (
    <section id='main' className='main-section'>

      <table>
        <tr><th>{col1}</th>
        <th>{col2}</th>
        <th>{col3}</th></tr>
        <tr>
          <td>Nikhil</td>
          <td>2hrs</td>
          <td>8hrs</td>
        </tr>
      </table>

    </section>
  )
}

export default Table