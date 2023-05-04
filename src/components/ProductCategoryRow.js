import React from 'react'
fetch('mockup.json')
  .then(response => response.json())
function ProductCategoryRow({category}) {
  return (
    <tr>
        <th colSpan="2">
            {category}
        </th>
    </tr>
  )
}

export default ProductCategoryRow