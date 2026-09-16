# Bitstream Dynamics

Website for the Computer Networking class at Kalamazoo KRESA CTE. "Bitstream
Dynamics" is our class's fictional business name, used as a class project —
this is not an actual business.

This site currently just hosts general info about the class. More content
will be added over time.

## Status

Early / placeholder. Right now it's a single static `index.html` page, just
enough to get something deployed.

## Deploying (Cloudflare Pages)

This is a plain static site, no build step required.

1. Push this repo to GitHub.
2. In the Cloudflare dashboard, create a new Pages project and connect the
   repo.
3. Build settings:
   - **Build command:** (leave blank)
   - **Build output directory:** `/`
4. Deploy.

Alternatively, deploy directly from the CLI with
[Wrangler](https://developers.cloudflare.com/pages/get-started/direct-upload/):

```sh
npx wrangler pages deploy .
```

## Contributing

See [CLAUDE.md](./CLAUDE.md) for notes aimed at AI coding assistants working
in this repo.

## License

No license has been chosen yet.
