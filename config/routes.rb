Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # resources :groups, except: [:new, :edit]
  get "/spotify" => "artists#spotify"
  get 'home/index'
  root "home#index"
  resources :artists
  resources :events
  get "users/:userId/favorites", to: "favorites#index", as: "favorites"
  post "/favorites", to: "favorites#new", as: "new_favorites"
  delete "users/:user_id/favorites/:artist_id", to: "favorites#destroy"
  
  # namespace :api do
  # end
  
end