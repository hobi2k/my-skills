#!/usr/bin/env bash

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
SOURCE_DIR="$REPO_ROOT/.codex/skills"
CODEX_HOME_DIR="${1:-${CODEX_HOME:-$HOME/.codex}}"
DEST_DIR="$CODEX_HOME_DIR/skills"

if [ ! -d "$SOURCE_DIR" ]; then
  echo "Source directory not found: $SOURCE_DIR" >&2
  exit 1
fi

mkdir -p "$DEST_DIR"
cp -R "$SOURCE_DIR"/. "$DEST_DIR"/

echo "Installed Codex skills to: $DEST_DIR"
echo "Restart Codex to pick up new skills."
