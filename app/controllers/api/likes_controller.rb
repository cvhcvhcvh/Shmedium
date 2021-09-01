class Api::LikesController < ApplicationController
  # before_action :ensure_logged_in
  # before_action :set_like, only: [:show, :update, :destroy]
  
  def create
    @like = Like.new(like_params)

    if @like.save
      # render :show
      
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def destroy
    @like = Like.find_by(like_params)

    @like.destroy
      render json: {}
  end

  def show #
    @like = Like.find_by(like_params)
    if @like
      render :show  
    end
  end

  private

  def like_params
    params.require(:like).permit(:story_id, :liker_id)
  end

  def set_like
    @like = Like.find(params[:id])
  rescue
    render json: ['Like not found'], status: :not_found
  end

end
