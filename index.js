const server = Bun.serve({
  port: 3000,
  async fetch(req) {
    const url = new URL(req.url);

    if (url.pathname === "/") {
      return new Response(Bun.file("index.html"), {
        headers: {
          "Content-Type": "text/html",
        },
      });
    }

    if (url.pathname === "/style.css") {
      return new Response(Bun.file("style.css"), {
        headers: {
          "Content-Type": "text/css",
        },
      });
    }

    if (url.pathname === "/src/main.js") {
      return new Response(Bun.file("src/main.js"));
    }

    if (url.pathname === "/data/iata.js") {
      return new Response(Bun.file("data/iata.js"));
    }

    return new Response("Not Found", { status: 404 });
  },
});

console.log(`Local server is running on port: ${server.port}`);
