# TANGLAW Portal

**An experimental, community-oriented payment tracking and receipt portal.** TANGLAW currently contains an administrative dashboard (`index.html`) and a member-facing receipt submission prototype (`member.html`). The front end is plain HTML, CSS/Tailwind CDN, JavaScript and Firebase Realtime Database/Storage.

> **Prototype warning:** TANGLAW is not audited, production-ready financial software. Do **not** submit genuine financial receipts, personal information, or live payment records to an unreviewed deployment. Existing server-side database/storage rules must be reviewed separately; front-end controls are not access control.

## Why open source?

TANGLAW is published to make a small community payment/receipt UI inspectable and adaptable by other volunteer groups. Its value is a practical, understandable starter project, **not** a claim of broad adoption. Contributions are welcome to make it safer, easier to deploy, more accessible, and better documented.

## What exists today

- Admin dashboard for viewing payment records and changing statuses
- Member-facing payment/receipt UI (experimental; secure public submissions remain a roadmap item)
- Receipt image preview/export
- Firebase Realtime Database and Cloud Storage integration in browser code

## Quick start — local preview only

1. Clone this repository.
2. Run a static server such as `python -m http.server 8080` from the project root.
3. Visit `http://localhost:8080/index.html` and `http://localhost:8080/member.html`.
4. Do not supply real records while using example or unverified Firebase settings.

**Firebase setup is NOT automatic.** The JavaScript contains client-side Firebase configuration; this is not an authentication secret or a replacement for Firebase rules. Read [the security migration guide](docs/SECURITY-MIGRATION.md) before connecting a real project. Production use requires authenticated server-side authorization and a safe member submission backend.

## Repository maintenance

- [Contributing](CONTRIBUTING.md) — local checks, pull requests and review process
- [Security](SECURITY.md) — vulnerability reporting and deployment warnings
- [Security migration plan](docs/SECURITY-MIGRATION.md) — blocking work before production
- [Roadmap](docs/ROADMAP.md) — clearly identified limitations and next milestones
- [Codex OSS application notes](docs/CODEX-OSS-APPLICATION.md) — accurate, reviewable project claims
- [MIT license](LICENSE) — applies to original repository code only; verify ownership of any contributed or third-party assets

For basic repository checks run `npm test` (Node.js 20+). A GitHub Actions job runs the same checks on pull requests.

## Maintainers and release status

Repository: [Metanoia020/TANGLAW-PORTAL](https://github.com/Metanoia020/TANGLAW-PORTAL). This is an early prototype; no released version, verified installation count, or externally validated usage metrics are currently claimed.

**Open-source does not imply production-safe.** Before accepting real member data, resolve the blockers in the security guide and obtain a genuine external review.
