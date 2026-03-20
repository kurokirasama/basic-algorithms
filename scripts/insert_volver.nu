#!/usr/bin/env nu

let files = (ls WEB/**/index.html | each { |f| $f.name })

$files | par-each { |file|
  let content = (open $file)
  
  # Insert the "Volver" button after the <body> tag
  let new_button = '<a href="../../index.html" class="inline-block border-2 border-red-500 hover:bg-red-500/20 text-red-400 font-bold py-2 px-4 rounded mb-4 transition duration-300 neon-border">Volver</a>'
  let updated_content = ($content 
    | str replace -r '<body class="bg-slate-950 text-slate-100 font-sans min-h-screen flex flex-col items-center justify-center p-4">' $"<body class=\"bg-slate-950 text-slate-100 font-sans min-h-screen flex flex-col items-center justify-center p-4\">\n    <div class=\"w-full max-w-4xl p-4\">($new_button)</div>"
  )

  # Save the updated content
  $updated_content | save -f $file
}
