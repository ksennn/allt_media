class Post < ApplicationRecord
    scope :filter_by_user, -> (user) { where user: user }
    scope :filter_by_category, -> (category) { where category: category }
    scope :filter_by_starts_with, -> (name) { where("name like ?", "%#{name}%")}
		validates :name, :presence => true
		validates :title, :presence => true,
											:length => { :minimum => 5 }
    belongs_to :category
    mount_uploader :image
    belongs_to :user
		has_many :comments, :dependent => :destroy
    has_many :likes, dependent: :destroy
    has_many :favorites, dependent: :destroy
end
