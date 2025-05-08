const b = await Bun.build({
    minify:true,
    entrypoints:["./src/index.ts"],
    outdir:"./dist",
    target:"bun",
    format:"esm",
    // bytecode:true
})

b.logs.forEach((log) => {
    console.log(log)
})

export {}