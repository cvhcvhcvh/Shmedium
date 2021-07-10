class Api::StoriesController < ApplicationController
  before_action :set_story, only: [:show, :update, :destroy]

  def index
    @stories = Story.all
    render "api/stories/index"
  end

  def show
    @story = Story.find(params[:id])
    render :show
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
    @story = Story.find(params[:id])

    if @story && @story.update(story_params)
        render :show
    else 
        render json: @story.errors.full_messages, status: 422
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
    params.require(:story).permit(:title, :body, :author_id)
  end
end
