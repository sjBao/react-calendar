class Appointment extends React.Component {
  handleClick(event){
    event.preventDefault()
    $.ajax({
      url: '/appointments/' + this.props.appointment.id,
      type: 'DELETE'
    }).done(response=>{
      this.props.removeAppointment(response)
    })
  }

  render(){
    let { id, title, apt_time } = this.props.appointment
    return(
      <div className='appointment'>
        <h3>{title}</h3>
        <p>{moment(apt_time).format('MMMM DD YYYY, h:mm a')}</p>
        <button

          onClick={this.handleClick.bind(this)}
          className="apt-rm-btn fa fa-trash-o fa-lg" 
          aria-hidden="true"
        />
      </div>
    )
  }
}
