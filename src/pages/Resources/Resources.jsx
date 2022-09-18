import React from 'react'
import Heading from '../../components/heading/Heading';
import Calendar from './components/Calendar';
import './Resources.css';

function Resources() {
  return (
<div>
<Heading name ="Resources Centre"/>
<div class="grid-container">

<div class="grid-child purple">
    <Calendar/>
</div>

<div class="grid-child green">
{/* FAQ Drop Down Menu goes here */}
</div>

</div>
</div>

  )
}

export default Resources;