import { readFileSync, existsSync } from 'node:fs';
import assert from 'node:assert/strict';
import test from 'node:test';
const read = path => readFileSync(new URL('../' + path, import.meta.url), 'utf8');
test('project has open-source maintenance documents', () => {
  for (const path of ['README.md', 'LICENSE', 'CONTRIBUTING.md', 'SECURITY.md', 'CODE_OF_CONDUCT.md', 'docs/ROADMAP.md']) {
    assert.ok(existsSync(new URL('../' + path, import.meta.url)), path);
  }
});
test('Firebase ES imports live within module scripts', () => {
  for (const path of ['index.html', 'member.html']) {
    const html = read(path);
    assert.match(html, /<script type="module">[\s\S]*?import \{/);
  }
});
test('embedded admin secret and browser admin session bypass are removed', () => {
  const html = read('index.html');
  assert.doesNotMatch(html, /ADMIN_PASSCODE|tanglawAdminAuthenticated|sessionStorage\.getItem/);
  assert.match(html, /getIdTokenResult\(.*true\)/);
  assert.match(html, /claims\.admin === true/);
});
test('member invoice identifiers do not use three-digit timestamp suffix', () => {
  const html = read('member.html');
  assert.match(html, /crypto\.randomUUID\(\)/);
  assert.doesNotMatch(html, /slice\(-3\)/);
});
test('Firebase rules samples deny access by default', () => {
  const db = JSON.parse(read('security/database.rules.json'));
  assert.equal(db.rules['.read'], false);
  assert.equal(db.rules['.write'], false);
  assert.match(db.rules.payments['.write'], /auth\.token\.admin/);
  const storage = read('security/storage.rules');
  assert.match(storage, /request\.auth\.token\.admin/);
  assert.match(storage, /allow read, write: if false/);
});
