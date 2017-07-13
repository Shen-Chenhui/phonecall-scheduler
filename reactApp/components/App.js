import React from 'react';
import Timeslot from './Timeslot';
import _ from 'underscore';
import {connect} from 'react-redux';
import {addSlot,removeSlot} from '../actions/index'
/* Equivalent function component! */
const App = ({time, addSlot,removeSlot}) => {
      return (
      <div>
        <h1>Phone call Schedule</h1>
        <div>
          {_.range(9,time,1).map(num =>
            <Timeslot key={num} time={num}/>
          )}
        </div>
        <button onClick={()=>addSlot()}> + </button>
        <span> </span>
        <button onClick={()=>removeSlot()}> - </button>
      </div>
    )
};

/*
==========================================================
  This is what you do if you want this component or any
  other to become a connected "container" component!
==========================================================
*/
// /* At top of file: */
// import { connect } from 'react-redux';
//
// /* At bottom of file: */

const mapStateToProps = (state) => ({
   time: state.time
});
//
const mapDispatchToProps = (dispatch) => ({
   addSlot: ()=> dispatch(addSlot()),
   removeSlot: ()=>dispatch(removeSlot())
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
