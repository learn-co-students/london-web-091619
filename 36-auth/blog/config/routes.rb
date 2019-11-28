Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
        resources :users, only: [:create, :show]
        resources :posts, only: [:create, :show]
        post "/login", to: "users#login"
    end
end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
