# bitstream

Website for the Computer Networking class at Kalamazoo KRESA CTE. "bitstream"
is our class's fictional business name, used as a class project. This is not
an actual business.

The site holds general info about the class: the curriculum, the class's
teams, its projects and how to reach it.

## Status

Built with React + Vite and styled with the bitstream design system
(`public/tokens.css`, `public/bitstream.css`, logos in `public/logos/`). The
full system, with its brand book and component reference, is installed as a
Claude Code skill in `.claude/skills/bitstream-design/`.

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
