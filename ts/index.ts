import { readdir } from "fs";

const fileArray : string[] = [];

readdir("./client_scripts", (err, files) => {
    if(err !== null) console.error(err);
    files.map(f => "./client_scripts/" + f).forEach(f => fileArray.push(f));
});

readdir("./startup_scripts", (err, files) => {
    if(err !== null) console.error(err);
    else files.map(f => "./startup_scripts/" + f).forEach(f => fileArray.push(f));
});

readdir("./server_scripts", (err, files) => {
    if(err !== null) console.error(err);
    else files.map(f => "./server_scripts/" + f).forEach(f => fileArray.push(f));
});

Bun.build({
    entrypoints: fileArray,
    root: ".",
    outdir: "../.minecraft/kubejs",
    target: "browser",
}).then(() => console.log("Build completed"));