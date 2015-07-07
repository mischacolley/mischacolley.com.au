require "extensions/views"

activate :blog do |blog|
  blog.sources = "posts/{year}-{title}.html"
  blog.tag_template = "tag.html"
  blog.calendar_template = "calendar.html"

  blog.permalink = "blog/{title}"
  blog.taglink = "blog/tags/{tag}.html"
  blog.year_link = "blog/{year}.html"

  blog.layout = "layouts/blog"

  blog.default_extension = ".md"

  # # This will add a prefix to all links, template references and source paths
  # blog.prefix = "blog"


  # blog.summary_separator = /(READMORE)/
  # blog.summary_length = 250
  
  # blog.month_link = "{year}/{month}.html"
  # blog.day_link = "{year}/{month}/{day}.html"
  

  # # Enable pagination
  # blog.paginate = true
  # blog.per_page = 10
  # blog.page_link = "page/{num}"
end

activate :views
activate :directory_indexes

page "posts/*", :directory_index => false
page "/feed.xml", :layout => false

# page "views/calendar", :directory_index => false
# page "views/tag", :directory_index => false

Time.zone = "Australia/Sydney"

# A path which all have the same layout
with_layout :blog do
  page "/posts/*"
end

page "blog/*", :layout => :blog

set :relative_links, true
set :css_dir, 'assets/stylesheets'
set :js_dir, 'assets/javascripts'
set :images_dir, 'assets/images'
set :fonts_dir, 'assets/fonts'
set :layout, 'layouts/application'

configure :development do
 activate :livereload
end

configure :build do
  # Relative assets needed to deploy to Github Pages
  activate :relative_assets
end

activate :deploy do |deploy|
  deploy.build_before = true
  deploy.method = :git
end

helpers do
  def nav_link(link_text, page_url, options = {})
    options[:class] ||= ""
    if current_page.url.length > 1
      current_url = current_page.url.chop
    else
      current_url = current_page.url
    end
    options[:class] << " active" if page_url == current_url
    link_to(link_text, page_url, options)
  end
end
