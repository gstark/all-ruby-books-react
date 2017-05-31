path = Rails.root.join("db/seeds/books", "*.json")
Dir.glob(path) do |entry|
  json = JSON.parse(File.read(entry))
  authors = Array(json["authors"]).map { |author| Author.find_or_create_by(name: author) }
  categories = Array(json["categories"]).map { |category| Category.find_or_create_by(name: category) }

  Book.create(title: json["title"],
              year: json["year"],
              url: json["url"],
              prices: json["prices"],
              editor: json["editor"],
              authors: authors,
              categories: categories)
end
