class Appointment extends React.Component {
  handleClick(event){
    event.preventDefault()
    console.log('hello!')
    $.ajax({
      url: '/appointments/' + this.props.appointment.id,
      type: 'DELETE'
    }).done(response=>{
      console.log(response)
    })
  }

  render(){
    let { id, title, apt_time } = this.props.appointment
    return(
      <div className='appointment'>
        <h3>{title}</h3>
        <p>{moment(apt_time).format('MMMM DD YYYY, h:mm a')}</p>
        <input type="submit"
          value="Remove Appointment"
          onClick={this.handleClick.bind(this)}
        />
      </div>
    )
  }
}
