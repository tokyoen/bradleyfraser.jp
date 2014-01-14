module Jekyll
  module BFFilters

    def reverse(input)
      return input unless input.is_a?(Array)
      input.reverse
    end
    
  end
end
 
Liquid::Template.register_filter(Jekyll::BFFilters)
