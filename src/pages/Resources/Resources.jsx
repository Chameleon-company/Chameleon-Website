import React from 'react'
import Heading from '../../components/heading/Heading';
import Faq from './components/faq';
import Calendar from './components/Calendar';
import './Resources.css';

function Resources() {
  return (
<div>
<Heading name ="Resources Centre"/>

<div class="grid-container">
<div class="grid-child green">
  <Faq/>

</div>
<br></br>
<div class="grid-child purple">
    <Calendar/>
</div>



</div>
</div>

  )
}

export default Resources;