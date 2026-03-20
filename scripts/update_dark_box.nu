#!/usr/bin/env nu

let files = (ls WEB/**/index.html | each { |f| $f.name })

$files | par-each { |file|
  let content = (open $file)
  
  # Update main card container classes for dark background
  let updated_content = ($content 
    | str replace -r 'class="w-full max-w-4xl bg-white rounded-2xl shadow-xl border border-slate-200 p-8"' 'class="w-full max-w-4xl bg-slate-900 rounded-2xl shadow-xl border border-slate-800 p-8"'
    # Update title color
    | str replace -r 'text-indigo-700' 'text-purple-400'
    # Update panel/box background
    | str replace -r 'bg-slate-100' 'bg-slate-950'
    # Update text colors in panel
    | str replace -r 'text-slate-600' 'text-slate-400'
    | str replace -r 'text-indigo-600' 'text-indigo-400'
    | str replace -r 'text-emerald-600' 'text-emerald-400'
    # Update array elements
    | str replace -r 'bg-white border-2 border-slate-300' 'bg-slate-800 border-2 border-slate-700 text-slate-100'
    # Update buttons
    | str replace -r 'bg-slate-200 hover:bg-slate-300' 'bg-slate-800 hover:bg-slate-700'
  )

  # Save the updated content
  $updated_content | save -f $file
}
