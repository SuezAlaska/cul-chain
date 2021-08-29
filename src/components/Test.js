import React from 'react';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';



function Swal(params) {
  const MySwal = withReactContent(Swal);
  render(


    MySwal.fire({
      title: <p>You are Subscribed</p>,
      footer: 'Copyright 2018',
      didOpen: () => {
        // `MySwal` is a subclass of `Swal`
        //   with all the same instance & static methods
        MySwal.clickConfirm()
      }
    }).then(() => {
      return MySwal.fire(<p>Shorthand works too</p>)
    })
    
  )
  
}



const ReactSwal = withReactContent(Swal)

const ReactSwalWithInput = ReactSwal.mixin({
  input: 'text',
  confirmButtonText: <i>OK</i>
})

async function Test() {
  await ReactSwal.fire(<i>Hi from Culchain</i>, `SweetAlert2 version: ${Swal.version}`)

  const {value: name} = await ReactSwalWithInput.fire({
    text: 'What is your name?',
  })

  const {value: location} = await ReactSwalWithInput.fire({
    html: <strong>Where are you from?</strong>,
  })

  await Swal.fire(`Hi ${name} from ${location}!`, '', 'success')
}

Test()
export default Test;