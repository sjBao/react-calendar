class AppointmentsList extends React.Component {
  render(){
    return(
      <div className="appointments-list">
        <h3>Upcoming Appointments:</h3>
        {
          this.props.appointments.map(appointment => {
            return (
              <Appointment
                key ={appointment.id}
                appointment={appointment}
                removeAppointment={this.props.removeAppointment}
               />
            )
          })
        }
      </div>
    )
  }
}
