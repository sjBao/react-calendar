class Appointments extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      appointments: this.props.appointments,
      title: '',
      apt_time: 'Tomorrow at 9am'
    }
    this.handleUserInput = this.handleUserInput.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  handleUserInput(obj){
    this.setState(obj)
  }

  handleFormSubmit(){
    var appointment = {
      title: this.state.title,
      apt_time: this.state.apt_time
    }

    $.post('/appointments',
           { appointment: appointment }
          ).done(response =>{
            this.addNewAppointment(response)
          }.bind(this)
    )
  }

  addNewAppointment(appointment){
    var appointments = React.addons.update( this.state.appointments, { $push: [appointment] })
    this.setState({
      appointments: appointments.sort((a,b)=>{
        return new Date(a.apt_time) - new Date(b.apt_time)
      })
    })
  }

  render(){
    return (
      <section className="container">
        <header>
          <h1>React Calendar</h1>
        </header>

        <AppointmentForm
          onUserInput={this.handleUserInput}
          onFormSubmit={this.handleFormSubmit}
          inputTitle={this.state.inputTitle}
          inputAptTime={this.state.inputAptTime}
        />

        <AppointmentsList appointments={this.state.appointments} />
      </section>
    )
  }
}
