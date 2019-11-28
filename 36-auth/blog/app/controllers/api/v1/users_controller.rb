class Api::V1::UsersController < ApplicationController

    def create
        user = User.create(user_params)
        # byebug
        if user.valid?
            render json: { user: UserSerializer.new(user), token: issue_token({ user_id: user.id }) }
        else
            render json: { errors: user.errors.full_messages }, status: :not_accepted
        end
    end

    def login
        user = User.find_by(email: login_params[:email])
        if user && user.authenticate(login_params[:password])
            render json: { user: UserSerializer.new(user), token: issue_token({ user_id: user.id }) }
        else
            render json: { errors: ["Email or password incorrect"] }, status: :not_accepted
        end
    end

    def show
        user = User.find(params[:id])
        render json: user
    end

    def validate
        if logged_in
            render json: { user: UserSerializer.new(@current_user), token: issue_token({ user_id: @current_user.id }) }
        else
            render json: { errors: ['Invalid token']}, status: :not_accepted
        end
    end

    private

    def user_params
        params.require(:user).permit(:email, :password, :password_confirmation)
    end

    def login_params
        params.require(:user).permit(:email, :password)
    end
end
