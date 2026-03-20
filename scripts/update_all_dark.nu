#!/usr/bin/env nu

let files = (ls WEB/**/index.html | each { |f| $f.name })

$files | par-each { |file|
  let content = (open $file)
  
  # Update all remaining white-like backgrounds in panels/boxes
  let updated_content = ($content 
    # Update main card
    | str replace -r 'bg-white rounded-2xl shadow-xl border border-slate-200' 'bg-slate-900 rounded-2xl shadow-xl border border-slate-700'
    # Update panel/box background
    | str replace -r 'bg-slate-100' 'bg-slate-950'
    # Update array element boxes
    | str replace -r 'bg-white border-2 border-slate-300' 'bg-slate-800 border-2 border-slate-700 text-slate-100'
    # Update borders for panel
    | str replace -r 'border-slate-200' 'border-slate-800'
    # Ensure text is readable on new dark backgrounds
    | str replace -r 'text-slate-500' 'text-slate-400'
    | str replace -r 'text-slate-600' 'text-slate-300'
    | str replace -r 'text-indigo-600' 'text-indigo-400'
    | str replace -r 'text-emerald-600' 'text-emerald-400'
    # Update buttons
    | str replace -r 'bg-slate-200 hover:bg-slate-300' 'bg-slate-800 hover:bg-slate-700 text-slate-100'
  )

  # Save the updated content
  $updated_content | save -f $file
}
