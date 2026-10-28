# Contributing to TANGLAW

Thank you for helping improve this experimental community software.

## Before contributing

- Open an issue describing the bug, feature, documentation gap, or accessibility improvement.
- Never include live database exports, personal information, receipt screenshots, passwords, Firebase service-account credentials, tokens, or other secrets in issues/PRs.
- Do not attempt to test against a live project without explicit permission. Use your own Firebase test project and synthetic data.
- For security vulnerabilities, follow [SECURITY.md](SECURITY.md) rather than a public issue.

## Workflow

1. Fork or create a feature branch from `main` (example: `fix/member-form-validation`).
2. Make one focused change; explain behavior changes in the PR.
3. Run `npm test` with Node.js 20+.
4. Manually preview on a local static server; include screenshots for visual changes, using fictitious data only.
5. Open a pull request. Maintainers review security implications, accessibility, compatibility and tests before merging.

## Conventions

- Keep dependencies minimal and document every external service.
- Avoid inserting untrusted values directly into `innerHTML` or URL attributes.
- Never treat a hidden button, local/session storage flag or browser-embedded secret as authentication.
- Privileged operations require Firebase security rules or a trusted backend—not only JavaScript checks.
- Changes to Firebase auth, database or storage require a deployment/migration plan and explicit maintainer review.
- Avoid claims about users, downloads, stars or releases unless there is reproducible evidence.

By submitting a contribution, you agree that your original contribution may be distributed under the repository's MIT license.
