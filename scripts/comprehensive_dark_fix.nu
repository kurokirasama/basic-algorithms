#!/usr/bin/env nu

let files = (ls WEB/**/index.html | each { |f| $f.name })

$files | par-each { |file|
  let content = (open $file)
  
  # A more aggressive and comprehensive replacement strategy
  let updated_content = ($content 
    # Backgrounds
    | str replace -a "bg-white" "bg-slate-900"
    | str replace -a "bg-slate-50" "bg-slate-950"
    | str replace -a "bg-slate-100" "bg-slate-950"
    | str replace -a "bg-slate-200" "bg-slate-800"
    | str replace -a "bg-indigo-50" "bg-slate-950"
    | str replace -a "bg-indigo-100" "bg-slate-900"
    | str replace -a "bg-blue-50" "bg-slate-950"
    | str replace -a "bg-emerald-50" "bg-slate-950"
    
    # Borders
    | str replace -a "border-slate-200" "border-slate-700"
    | str replace -a "border-slate-300" "border-slate-600"
    | str replace -a "border-indigo-100" "border-slate-800"
    | str replace -a "border-indigo-200" "border-slate-700"
    | str replace -a "border-red-300" "border-red-900"
    | str replace -a "border-emerald-300" "border-emerald-900"
    
    # Text colors
    | str replace -a "text-indigo-900" "text-purple-300"
    | str replace -a "text-indigo-700" "text-purple-400"
    | str replace -a "text-indigo-600" "text-purple-400"
    | str replace -a "text-slate-800" "text-slate-200"
    | str replace -a "text-slate-600" "text-slate-400"
    | str replace -a "text-slate-500" "text-slate-500" # Keep mid-gray
    
    # Hex codes (Light colors to Dark)
    | str replace -a "#fee2e2" "#450a0a" # Red-100 -> Red-950
    | str replace -a "#dcfce7" "#064e3b" # Green-100 -> Green-950
    | str replace -a "#fef08a" "#713f12" # Yellow-200 -> Yellow-950
    | str replace -a "#eff6ff" "#172554" # Blue-50 -> Blue-950
    | str replace -a "#f87171" "#991b1b" # Red-400 -> Red-800
    | str replace -a "#22c55e" "#166534" # Green-500 -> Green-800
    
    # Inputs
    | str replace -a "bg-white border-2 border-slate-200" "bg-slate-800 border-2 border-slate-700 text-slate-100"
  )

  # Save the updated content
  $updated_content | save -f $file
}
