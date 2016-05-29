# Generates the assets/data.js file.

require 'json'

corpus = []
Dir.glob('corpus/*.txt') do |filename|
  content = File.read(filename)

  # Remove directory from filename
  corpus << {
    filename: filename.split("/").last,
    text: content
  }
end

# Store as global variable CORPUS in JavaScript.
File.write("lib/corpus.js", "CORPUS = #{corpus.to_json}")
