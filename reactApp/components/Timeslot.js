import React from 'react';
import {addEvent} from '../actions/index'
import {connect} from 'react-redux';
import Modal from 'react-modal';

class Timeslot extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      ifOpen: true,
      isModelOpen: false,
      name:'Mysterious Stranger',
      number: ''
    }
  }
  addEvent(){
    this.setState({
      isModelOpen: true
    })
  }
  closeModal(e){
    e.preventDefault();
    this.setState({isModelOpen: false});
  }
  submit(e){
    e.preventDefault();
    //validate form input fields!!!!!
    if(this.state.number.split('').join('')===''){
      alert('Cannot schedule phone call without phone number!')
    } else {
      this.setState({
        isModelOpen:false,
        ifOpen: false
      });
    }
  }
  clear(){
    this.setState({ifOpen: true});
  }
  updateName(text){
    this.setState({name: text.target.value});
  }
  updateNumber(number){
    this.setState({number: number.target.value});
  }
  render() {
    return (
      <div>
        <div className='time'>
          <p>{this.props.time+':00'}</p>
        </div>
        <div className='open'>
          {(this.state.ifOpen)?
            <button onClick={()=>this.addEvent()} style={{'backgroundColor': 'green'}}> Schedule a new phone call Here </button> :
            <div>
              Scheduled phonecall with {this.state.name}: {this.state.number} <br/>
              <button onClick={()=>this.addEvent()} style={{'backgroundColor': 'blue','color':'white'}}> Modify </button>
              <span>  </span>
              <button onClick={()=>this.clear()} style={{'backgroundColor':'red'}}> Clear </button>
            </div>
          }
        </div>
        <Modal
          isOpen={this.state.isModelOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2>Schedule new phone call</h2>
          <form>
            <b>Name: </b><input type='text' onChange={(text)=>this.updateName(text)} value={this.state.name}/><br/>
            <b>Phone: </b><input type='number' onChange={(number)=>this.updateNumber(number)} value={this.state.number}/><br/>
            <button onClick={e => this.submit(e)}>Submit</button>
            <button onClick={(e)=>this.closeModal(e)}>X</button>
          </form>
        </Modal>
      </div>
    );
  }
};

const customStyles = {
  content : {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  },
  overlay : {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(211,211,211, 0.8)'
  }
};

/*
==========================================================
  This is what you do if you want this component or any
  other to become a connected "container" component!
==========================================================
*/
// const mapStateToProps = (state) => ({
//    ifOpen: state.ifOpen,
// });
//
// const mapDispatchToProps = (dispatch) => ({
//    addEvent: () => dispatch(addEvent())
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Timeslot);
export default Timeslot;
