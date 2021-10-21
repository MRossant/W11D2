Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json } do 
    resources :todos, only:[:index, :show, :create, :destroy, :update]
  end

  get "/", to: "static_pages#root" 
end