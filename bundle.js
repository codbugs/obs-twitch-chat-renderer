// loads environment variables
require('dotenv').config();

// bundle javascript files
require('esbuild').build({
    entryPoints: ['./src/index.js', './src/index.css'],
    // outfile: './bundle/obs-twitch-chat-renderer.js',
    outdir: './bundle',
    bundle: true,
    define: {
        TWITCH_CHANNEL: `"${process.env.TWITCH_CHANNEL}"`,
        TWITCH_PASSWORD: `"${process.env.TWITCH_PASSWORD}"`,
        TWITCH_USERNAME: `"${process.env.TWITCH_USERNAME}"`,
    },
    watch: new Boolean(process.env.WATCH) == true ? true : false
});