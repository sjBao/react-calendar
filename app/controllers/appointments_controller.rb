class AppointmentsController < ApplicationController
  def index
    @appointments = Appointment.order('apt_time ASC')
    @appointment = Appointment.new
    render react_component: 'Appointments'
  end

  def create
    @appointment = Appointment.new(appointment_params)
    if @appointment.save
      render json: @appointment
    else
      render json: @appointment.errors
    end
  end

  private
  def appointment_params
    params.require(:appointment).permit(:title, :apt_time)
  end
end
