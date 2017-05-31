class BooksController < ApplicationController
  def index
    @books = Book.all.includes(:authors, :categories)
  end
end
