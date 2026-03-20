#!/usr/bin/env nu

let files = (ls WEB/**/index.html | each { |f| $f.name })

$files | par-each { |file|
  let content = (open $file)
  
  # Replace body classes for background and text color
  let updated_content = ($content 
    | str replace -r 'class="bg-slate-50 text-slate-800 font-sans min-h-screen flex flex-col items-center justify-center p-4"' 'class="bg-slate-950 text-slate-100 font-sans min-h-screen flex flex-col items-center justify-center p-4"'
  )

  # Save the updated content
  $updated_content | save -f $file
}
