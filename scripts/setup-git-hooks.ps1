# Configure this checkout to enforce Conventional Commit messages locally.
$ErrorActionPreference = "Stop"

$repoRoot = git rev-parse --show-toplevel
if ($LASTEXITCODE -ne 0 -or -not $repoRoot) {
    throw "Run this script from inside the repository."
}

git -C $repoRoot config core.hooksPath .githooks
if ($LASTEXITCODE -ne 0) {
    throw "Could not configure Git hooks."
}

git -C $repoRoot config commit.template .gitmessage
if ($LASTEXITCODE -ne 0) {
    throw "Could not configure the commit message template."
}

Write-Host "Conventional Commit hook and message template enabled for this checkout."
