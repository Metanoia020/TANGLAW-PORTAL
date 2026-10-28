# Security policy

TANGLAW is an early-stage prototype and **is not approved for storing real financial or personal information**.

## Report a vulnerability

If available, use GitHub's **Report a vulnerability / private security advisory** for this repository. Otherwise contact the repository maintainer privately using a contact channel displayed on their GitHub profile. **Do not** post secrets, proof-of-concept attack steps targeting real users, or personal data in public issues.

## Known risks and required mitigations

- The original public revision included a browser-embedded administrator passcode. Treat it as compromised even after code changes. Remove its use, revoke/rotate any related credentials, and verify rules in the actual Firebase project.
- Browser-side code alone cannot authorize database/storage access. Realtime Database Rules and Storage Rules must be configured, tested and deployed separately.
- Direct, unauthenticated member uploads/payments are not a secure production design; protect the submission path with a trusted backend, validation, abuse prevention and suitable authentication or anti-abuse checks.
- Local browser caches, receipt URLs and logs can expose member information. Review retention and access controls before processing real data.
- Configure Firebase Auth administrators with trusted server-side custom claims, not a client-set role.

See [docs/SECURITY-MIGRATION.md](docs/SECURITY-MIGRATION.md) for the deployment gate and checklist.

## Supported versions

No production release or formal vulnerability response SLA is currently declared. Fixes are proposed via reviewed pull requests.
