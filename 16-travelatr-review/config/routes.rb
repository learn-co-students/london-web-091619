Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # resources :bloggers, only: [:show, :new]

  # Blogger Routes
  get '/bloggers', to: 'bloggers#index', as: 'bloggers'
  get '/bloggers/new', to: 'bloggers#new', as: 'new_blogger'
  post '/bloggers', to: 'bloggers#create'
  get '/bloggers/:id', to: 'bloggers#show', as: 'blogger'

  # Post Routes
  resources :posts, only: [:new, :index, :create, :show]
  post '/posts/:id', to: 'posts#like', as: "like"
  
  # Destination Routes
  resources :destinations, only: [:show]
end
