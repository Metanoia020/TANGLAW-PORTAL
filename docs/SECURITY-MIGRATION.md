# Security migration — required before a real deployment

**Status: OPEN / not completed.** This document is a migration checklist, not a claim that protections are already deployed.

## Confirmed source concerns

1. A passcode was embedded in public browser JavaScript in historical commits. Removing it from the current file does **not** erase it from Git history.
2. Browser-based administrator mode and session storage did not constitute authentication.
3. Admin/member clients access Realtime Database and Storage directly. Server-side rule settings have **not** been verified.
4. A member portal prototype uses client-side uploads; anonymous direct writes should not be permitted without a carefully designed secure backend and abuse controls.
5. Payment records and receipt URLs should not be cached in browser localStorage or exposed to unauthorized viewers.
6. The original invoice ID used only the last three digits of a timestamp, creating collision risk.

## Deployment gates (must be independently verified)

- [ ] Inventory real users and data; stop the live workflow if it could expose sensitive receipts or payments.
- [ ] Rotate/revoke the old public admin passcode wherever still accepted; check other projects for reuse. Review Git history and data exposure. A Git history rewrite alone is **not** credential rotation.
- [ ] Enable Firebase Authentication email/password for approved admins; provision accounts only through trusted administration.
- [ ] Set server-side `admin: true` **custom claims** with Firebase Admin SDK in a trusted private environment, and refresh the user's ID token. Never put service-account JSON in this repo.
- [ ] Review and deploy restrictive Realtime Database/Storage rules to the **correct project**. Candidate templates live in `security/` and are not deployed automatically. Test unauthorized/authorized read/write paths with Firebase Emulator Suite first.
- [ ] Replace direct unauthenticated member writes with a trusted submission endpoint including validation, file-size/type limits, authentication or abuse controls, and rate limits. Do not permit public reads of personal/payment records.
- [ ] Migrate any live receipts safely; classify personal data, restrict download URLs, set retention/deletion policy and avoid PII in console logs and localStorage.
- [ ] Address authorization UI, invoice IDs, XSS/HTML attribute escaping, duplicate listeners, and database write error handling.
- [ ] Create explicit privacy notice, backup/recovery plan and maintainer approval before production release.
- [ ] Obtain independent security review and document evidence of deployed rules.

## Sample Firebase security templates

`security/database.rules.json` and `security/storage.rules` are **deny-by-default** templates for an admin-only backend; applying them before implementing a secure submission service will cause member uploads to fail. The branch does not deploy these rules. They deliberately avoid allowing untrusted visitors to submit payments.

## Why browser configuration remains visible

Firebase web config identifies the project but **does not** authorize access. Some config fields (such as Firebase web API key) are meant for clients; access security must be enforced by Auth and server-side rules. Privileged service-account keys are secrets and must never be committed.

## Production release

This open-source readiness branch should be reviewed and tested first. No payment workflow, database policy, Firebase Authentication account or hosting deployment should be presumed updated by merging documentation.
