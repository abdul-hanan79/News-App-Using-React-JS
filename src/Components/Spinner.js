import React, { Component } from 'react'
import Loader from './Spinner.gif'

const Spinner = () => {

  return (
    <div className='text-center'>
      <img className='my-3' src={Loader} alt="" />
    </div>
  )

}

export default Spinner






// export class Spinner extends Component {
//   render() {
//     return (
//       <div className='text-center'>
//         <img  className='my-3' src={Loader} alt="" />
//       </div>
//     )
//   }
// }

// export default Spinner
