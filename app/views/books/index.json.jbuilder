json.array! @books do |book|
  json.(book, :id, :title, :prices, :year, :editor)

  json.authors    book.authors
  json.categories book.categories
end
