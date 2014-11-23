json.array!(@articles) do |article|
  json.extract! article, :id, :title, :brief, :content
  json.url article_url(article, format: :json)
end
