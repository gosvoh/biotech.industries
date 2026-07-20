# biotech.industries

Landing site for **ИТМО Биотех** — "Создаем инновации в биотех-индустрии".
A static-first Next.js App Router site presenting the programme's education
tracks, technologies, events and contacts.

## Stack

- **Next.js 16** (App Router) and **React 19**
- **Ant Design 5** plus **shadcn/ui** and **Radix** primitives for the UI
- **Tailwind CSS 3** for styling
- **Nodemailer** (with DKIM signing) for the contact form
- **Yandex Maps** for the contacts page
- **npm** as the package manager

## Prerequisites

- Node.js 20+ (the Docker image builds on `node:25-alpine`)

## Setup

Install dependencies:

```bash
npm ci
```

Create a `.env.local` file with the mail settings used by the contact form:

```dotenv
MAIL_USER="no-reply@example.com"   # SMTP account used to send
MAIL_PASS="your-smtp-password"     # SMTP password
MAIL_TO="inbox@example.com"        # where submissions are delivered
DKIM_DOMAIN="example.com"          # domain used to sign outgoing mail
DKIM_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----"
```

Without these the site renders fine, but contact-form submissions will fail.

Start the development server:

```bash
npm run dev
```

The site is served at [http://localhost:3000](http://localhost:3000).

## Common commands

| Command         | Description                  |
| --------------- | ---------------------------- |
| `npm run dev`   | Start the development server |
| `npm run build` | Create a production build    |
| `npm start`     | Serve the production build   |
| `npm run lint`  | Run ESLint                   |

## Pages

| Route                 | Contents                             |
| --------------------- | ------------------------------------ |
| `/`                   | Landing page                         |
| `/education`          | Education overview                   |
| `/education/course1`  | Individual course pages              |
| `/education/course2`  |                                      |
| `/education/course3`  |                                      |
| `/education/foodtech` | FoodTech track                       |
| `/technologies`       | Technologies                         |
| `/consultations`      | Consultations                        |
| `/event`              | Event page                           |
| `/contacts`           | Contacts, incl. map and contact form |

## Deployment / Docker

The `Dockerfile` produces a standalone Next.js image on the `node:25-alpine`
base, running as a non-root `nextjs` user and listening on port 3000.

CI (`.github/workflows/push.yml`) builds the image and pushes it to Docker Hub
on every push to `master`, tagged with the `package.json` version and `latest`.
Docker Hub credentials come from the `DOCKER_USERNAME` and `DOCKER_TOKEN`
repository secrets.

Mail environment variables are **not** baked into the image — supply them to the
running container.
