class Product
  include Mongoid::Document
  field :name, type: String
  field :pirce, type: Integer
end
