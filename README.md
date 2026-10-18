# groundmail-payload

[Payload CMS](https://payloadcms.com) email adapter for [Groundmail](https://groundmail.dev) — auth mail and `payload.sendEmail()` over the HTTP API.

## Install

```bash
npm install groundmail-payload groundmail
```

```bash
GROUNDMAIL_API_KEY=gm_your_key_here
```

## Usage

```ts
import { buildConfig } from 'payload'
import { groundmailAdapter } from 'groundmail-payload'

export default buildConfig({
  email: groundmailAdapter({
    defaultFromAddress: 'noreply@yourdomain.com',
    defaultFromName: 'Acme',
    // apiKey: process.env.GROUNDMAIL_API_KEY,
  }),
  // ...collections, etc.
})
```

Also available as `import { groundmailAdapter } from 'groundmail/payload'`.

Prefer Nodemailer? Use [`groundmail-nodemailer`](https://www.npmjs.com/package/groundmail-nodemailer) with `@payloadcms/email-nodemailer` instead.

## Docs

https://docs.groundmail.dev/guides/payload

## License

MIT
