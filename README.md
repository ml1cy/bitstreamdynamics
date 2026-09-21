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

## Deploying (Cloudflare Pages)

This site is built with Vite and requires a build step.

1. Push this repo to GitHub.
2. In the Cloudflare dashboard, create a new Pages project and connect the
   repo.
3. Build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Deploy.

Alternatively, deploy directly from the CLI with
[Wrangler](https://developers.cloudflare.com/pages/get-started/direct-upload/):

```sh
npm run build
npx wrangler pages deploy dist
```

## Contributing

See [CLAUDE.md](./CLAUDE.md) for notes aimed at AI coding assistants working
in this repo.

## License

No license has been chosen yet.
