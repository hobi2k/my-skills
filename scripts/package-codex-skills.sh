#!/usr/bin/env bash

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
DIST_DIR="$REPO_ROOT/dist"
STAMP="$(date +%Y%m%d_%H%M%S)"
ARCHIVE_NAME="hobi2k-codex-skills-$STAMP.tar.gz"

mkdir -p "$DIST_DIR"

tar -czf "$DIST_DIR/$ARCHIVE_NAME" \
  -C "$REPO_ROOT" \
  .codex

echo "Created package: $DIST_DIR/$ARCHIVE_NAME"
echo "Install with: tar -xzf $DIST_DIR/$ARCHIVE_NAME -C ~"
