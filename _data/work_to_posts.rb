require 'yaml'

works = YAML::load(File.open('./_data/works.yaml'))

works.each do |work|
  
  num            = work['slug'].to_i
  date           = Date.parse(work['date']).strftime("%F")
  photos         = work.key?('photo')   ? work['photo'].map{  |p| "  - #{p['src']}" } : []
  process_photos = work.key?('process') ? work['process'].map{|p| "  - #{p['src']}" } : []
  
  str = <<-STR
---
num:        #{num}
layout:     work
title:      "#{work['name']}"
date:       #{date}
thumbnail:  thumb_#{work['thumbnail']['src']}
background: #{work['background']['src']}
photos:
#{photos.join("\n")}
process_photos:
#{process_photos.join("\n")}
---

#{work['en']}

STR
  
  filename = "./_posts/#{date}-#{work['slug']}.markdown"
  
  File.open(filename, 'w') {|f| f.puts(str) }
  
  print "."
  
end

puts "Saved #{works.count} posts into _posts!"