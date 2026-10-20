# Bitstream Dynamics

Website for the Computer Networking class at Kalamazoo KRESA CTE. "Bitstream
Dynamics" is our class's fictional business name, used as a class project —
this is not an actual business.

This site currently just hosts general info about the class. More content
will be added over time.

## Status

Early / placeholder. Built with React + Vite. More content will be added
over time.

## Development

```sh
npm install
npm run dev
```

## Deploying (Cloudflare Workers)

This site is built with Vite and the
[Cloudflare Vite plugin](https://developers.cloudflare.com/workers/vite-plugin/),
and deploys as a Worker with static assets (configured in `wrangler.jsonc`).

Via Cloudflare's dashboard (Workers Builds), connect the repo and set:
- **Build command:** `npm run build`
- **Deploy command:** `npx wrangler deploy`

Alternatively, deploy directly from the CLI:

```sh
npm run deploy
```

## Contributing

See [CLAUDE.md](./CLAUDE.md) for notes aimed at AI coding assistants working
in this repo.

## License

No license has been chosen yet.
