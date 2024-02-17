import React from 'react';
import '../css/card.css'
import { CCard, CCardImage, CCardBody, CCardTitle, CCardText, CButton } from '@coreui/react';
function CustomCard(){
return(
<CCard className='card-container'>
  <CCardImage orientation="top" url={''} />
  <CCardBody>
    <CCardTitle>Card title</CCardTitle>
    <CCardText>
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </CCardText>
    <CButton href="#">Go somewhere</CButton>
  </CCardBody>
</CCard>
)
}
export default CustomCard