#!/usr/bin/env nu

let files = (ls WEB/**/index.html | each { |f| $f.name })

$files | par-each { |file|
  let content = (open $file)
  
  # 1. Fix Inputs (Explicitly set dark background)
  let content = ($content 
    | str replace -a 'class="px-4 py-2 border-2 border-slate-700 rounded-lg focus:border-indigo-500 outline-none w-32 text-center font-mono font-bold"' 'class="px-4 py-2 bg-slate-900 text-slate-100 border-2 border-slate-700 rounded-lg focus:border-purple-500 outline-none w-32 text-center font-mono font-bold"'
    | str replace -a 'class="px-4 py-2 border-2 border-slate-200 rounded-lg focus:border-indigo-500 outline-none w-32 text-center font-mono font-bold"' 'class="px-4 py-2 bg-slate-900 text-slate-100 border-2 border-slate-700 rounded-lg focus:border-purple-500 outline-none w-32 text-center font-mono font-bold"'
  )

  # 2. Fix Primary Buttons (Next Step)
  let content = ($content 
    | str replace -a 'bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-bold transition-all shadow-lg active:scale-95' 'border-2 border-purple-500 hover:bg-purple-500/20 text-purple-400 font-bold py-2 px-8 rounded transition duration-300 neon-border active:scale-95'
  )

  # 3. Fix Secondary Buttons (Reset/Random)
  let content = ($content 
    | str replace -a 'bg-slate-800 hover:bg-slate-700 rounded-lg font-medium transition-colors' 'border-2 border-slate-600 hover:bg-slate-600/20 text-slate-300 font-medium py-2 px-6 rounded transition duration-300'
    | str replace -a 'bg-slate-200 hover:bg-slate-300 rounded-lg font-medium transition-colors' 'border-2 border-slate-600 hover:bg-slate-600/20 text-slate-300 font-medium py-2 px-6 rounded transition duration-300'
  )

  # 4. Fix any residual white in panels
  let content = ($content 
    | str replace -a "bg-white" "bg-slate-900"
    | str replace -a "bg-slate-100" "bg-slate-950"
    | str replace -a "bg-slate-50" "bg-slate-950"
    | str replace -a "bg-indigo-50" "bg-slate-950"
  )

  # 5. Fix text colors that might be too dark
  let content = ($content 
    | str replace -a "text-indigo-900" "text-purple-300"
    | str replace -a "text-indigo-700" "text-purple-400"
    | str replace -a "text-indigo-600" "text-purple-400"
    | str replace -a "text-slate-800" "text-slate-200"
    | str replace -a "text-slate-600" "text-slate-400"
  )

  # 6. Ensure Monocraft font is applied to examples too if not present
  # (Though they use font-sans, Monocraft is set on body in the root index only)
  # Let's add the font-face to each file for safety.
  let font_style = "@font-face {
      font-family: 'Monocraft';
      src: url('https://cdn.jsdelivr.net/gh/IdreesInc/Monocraft@main/dist/Monocraft-ttf/Monocraft.ttf') format('truetype');
      font-weight: normal;
      font-style: normal;
    }
    body {
      font-family: 'Monocraft', monospace;
    }"
  
  let content = ($content 
    | str replace -r '<style>' $"<style>\n    ($font_style)"
  )

  # Save the updated content
  $content | save -f $file
}
