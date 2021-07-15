class Api::ResponsesController < ApplicationController
  before_action :ensure_logged_in

  def index #
    @responses = Response.all
    render :index
  end

  def create
    @response = Response.new(response_params)

    if @response.save
      render :show
      
    else
      render json: @response.errors.full_messages, status: 422
    end
  end

  # def index 
  #   @users = User.all
  #   render :index
    
  # end
  
  def show
    @response = Response.find(params[:id])
    render :show
  end

  def destroy
    @response = Response.find(params[:id])

    if @response.destroy
        render :show
    else 
        render json: @response.errors.full_messages, status: 403
    end

  end

  private

  def response_params
    params.require(:response).permit(:body, :author_id, :story_id)
  end
end
