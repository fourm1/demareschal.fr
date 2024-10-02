module.exports = {
    resolve: {
        fallback: {
            "fs": false,
            "path": require.resolve("path-browserify"),
            "stream": require.resolve("stream-browserify"),
            "util": require.resolve("util/"),
            "url": require.resolve("url/")
        }
    },
}