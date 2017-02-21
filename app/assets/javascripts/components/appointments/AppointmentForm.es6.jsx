class AppointmentForm extends React.Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
    this.setAptTime = this.setAptTime.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event){
    var name = event.target.name
    obj = {}
    obj[name] = event.target.value
    this.props.onUserInput(obj)
  }

  handleSubmit(event){
    event.preventDefault()
    this.props.onFormSubmit()
  }

  setAptTime(event){
    var name = 'apt_time'
    var obj = {}
    if (obj[name] = event.toDate()) {
      this.props.onUserInput(obj)
    }
  }

  render(){
    let { inputTitle, inputAptTime } = this.props
    var inputProps = { name: 'apt_time' }
    return(
      <div className="appointments-form">
        <h3>Make a new appointment:</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            name="title"
            value={inputTitle}
            placeholder="Appointment"
            onChange={this.handleChange}
          />

          <Datetime
            open={true}
            input={false}
            inputProps={inputProps}
            onChange={this.setAptTime}
          />

          <input type="submit" value="Make Appointment"/>
        </form>
      </div>
    )
  }
}
