#!/usr/bin/env nu

let files = (ls WEB/**/index.html | each { |f| $f.name })

$files | par-each { |file|
  let content = (open $file)
  
  # Update all remaining white-like backgrounds in panels/boxes
  let updated_content = ($content 
    # Update main container
    | str replace -r 'bg-white' 'bg-slate-900'
    # Update input/panel boxes
    | str replace -r 'bg-slate-100' 'bg-slate-950'
    # Update array element boxes
    | str replace -r 'bg-white border-2 border-slate-300' 'bg-slate-800 border-2 border-slate-700 text-slate-100'
    # Ensure text is readable on new dark backgrounds
    | str replace -r 'text-slate-500' 'text-slate-400'
    | str replace -r 'text-slate-600' 'text-slate-300'
    | str replace -r 'text-indigo-700' 'text-purple-400'
  )

  # Save the updated content
  $updated_content | save -f $file
}
