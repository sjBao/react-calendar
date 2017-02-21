class Appointment extends React.Component {
  render(){
    let { id, title, apt_time } = this.props.appointment
    return(
      <div className='appointment'>
        <h3>{title}</h3>
        <p>{moment(apt_time).format('MMMM DD YYYY, h:mm a')}</p>
      </div>
    )
  }
}
