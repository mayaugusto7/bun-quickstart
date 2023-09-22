const server = Bun.serve({
    port: 3000,
    fetch(request) {
        return new Response("Bun!");
    },
});

console.log(`Listening on http://localhost:${server.port} ...`);