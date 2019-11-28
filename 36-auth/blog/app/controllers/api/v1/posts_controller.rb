class Api::V1::PostsController < ApplicationController

    def create
        post = Post.create(post_params)
        user = @current_user
        post.update(user: user)
        if post.valid?
            render json: post
        else
            render json: {errors: post.errors.full_messages}, status: :not_accepted
        end
    end

    def show
        render json: Post.find(params[:id])
    end

    private

    def post_params
        params.require(:post).permit(:title, :content)
    end
end
