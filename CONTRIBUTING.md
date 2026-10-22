# Contributing

## Commit messages

Use [Conventional Commits](https://www.conventionalcommits.org/) for every commit:

```text
type(scope): short description
```

Allowed types are `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, and `revert`. Keep the subject at 100 characters or fewer.

Examples:

- `feat: add Android download card`
- `fix(updater): use the correct release APK URL`
- `docs: update release instructions`

### Enable local validation on Windows

Run this once from the repository checkout in PowerShell:

```powershell
.\scripts\setup-git-hooks.ps1
```

This enables the repository's `commit-msg` hook and a commit message template. Pull requests are also checked by the Commit message lint GitHub Actions workflow.
