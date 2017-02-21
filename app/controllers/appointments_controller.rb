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

  def destroy
    @appointment = Appointment.find_by(id: params[:id])

    if @appointment.destroy
      @appointments = Appointment.order('apt_time ASC')
      render json: @appointments
    else
      render status: 404
    end

  end

  private
  def appointment_params
    params.require(:appointment).permit(:title, :apt_time)
  end
end
