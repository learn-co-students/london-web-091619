class BloggersController < ApplicationController

  def new
    @blogger = Blogger.new
  end

  def create
    @blogger = Blogger.create(blogger_params)

    @blogger = Blogger.new(blogger_params)
    @blogger.save

    if @blogger.valid?
      redirect_to blogger_path(@blogger)
    else
      render :new
    end
  end

  def show
    @blogger = Blogger.find(params[:id])
  end

  private

  def blogger_params
    params.require(:blogger).permit(:name, :bio, :age)
  end
end
