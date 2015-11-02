require "extensions/views"

activate :autoprefixer

activate :blog do |blog|
  blog.sources = "blog/{title}/index.html"
  blog.tag_template = "tag.html"
  blog.calendar_template = "calendar.html"
  blog.permalink = "blog/{title}"
  blog.taglink = "blog/tags/{tag}.html"
  blog.year_link = "blog/{year}.html"
  blog.layout = "layouts/blog"
  blog.default_extension = ".md"

  blog.custom_collections = {
    category: {
      link: 'blog/categories/{category}.html',
      template: 'category.html'
    }
  }

end

activate :directory_indexes
activate :relative_assets
activate :meta_tags
activate :views

activate :middleman_simple_thumbnailer

configure :development do
 activate :livereload
end

activate :deploy do |deploy|
  deploy.build_before = true
  deploy.method = :git
end

# Google Analytics
activate :google_analytics do |ga|
  ga.tracking_id = 'UA-57613563-1' # Replace with your property ID.
  ga.development = false
  ga.minify = true
end

# Global Settings

Time.zone = "Australia/Sydney"

## Meta tags

# Directory settings

# set :relative_links, true
set :css_dir, 'assets/stylesheets'

set :js_dir, 'assets/javascripts'
set :images_dir, 'assets/images'
set :fonts_dir, 'assets/fonts'
set :layout, 'layouts/application'

# Layouts

page "/feed.xml", :layout => false
page "blog/*", :layout => :blog
page "projects/*/*", :layout => :projects
page "work/*/*", :layout => :work

# Custom Helpers

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

  def build_categories(articles)
    categories = []
    articles.each do |article|
      category = article.metadata[:page]['category']
      unless categories.include? category
        categories.push(category)
      end
    end
    return categories
  end
  
end