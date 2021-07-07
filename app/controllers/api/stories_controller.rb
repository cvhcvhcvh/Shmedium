class Api::StoriesController < ApplicationController
  before_action :set_story, only: [:show, :update, :destroy]

  def index
    @story = Story.all
  end

  def show
  end

  def create
    @story = Story.new(story_params)

    if @story.save
      render :show
    else
      render json: @story.errors.full_messages, status: :unprocessable_entity
    end
  end

  def update
    if @story.update(story_params)
      render :show
    else
      render json: @story.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @story.destroy
    head :no_content
  end

  private

  def set_story
    @story = Story.find(params[:id])
  rescue
    render json: ['Story not found'], status: :not_found
  end

  def story_params
    params.require(:story).permit(:title, :body)
  end
end
