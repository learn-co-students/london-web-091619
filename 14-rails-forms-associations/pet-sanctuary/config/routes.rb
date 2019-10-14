Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # Users
  # get "/users", to: "users#index", as: "users"
  # get "/users/:id", to: "users#show", as: "user"
  # delete "/users/:id", to: "users#destroy"
  resources :users, only: [:index, :show, :destroy]

  resources :pets
end
