# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


ActiveRecord::Base.transaction do
  Todo.destroy_all

  todo1 = Todo.create!(title: "Walk doge", body: "walk the doge ASAP", done: false)
  todo2 = Todo.create!(title: "Walk cat", body: "walk the cat ASAP", done: true)
  todo3 = Todo.create!(title: "Walk snake", body: "walk the snake ASAP", done: false)
  todo4 = Todo.create!(title: "Walk elephant", body: "walk the elephant ASAP", done: true)


  

end