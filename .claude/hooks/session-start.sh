#!/bin/bash
set -euo pipefail

# Only run in Claude Code cloud sessions
if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

cd "${CLAUDE_PROJECT_DIR:-$(dirname "$0")/../..}"

# Flask server dependencies for the sample solution, in a venv outside the repo
VENV="$HOME/.venvs/copilot-hack"
if [ ! -d "$VENV" ]; then
  python3 -m venv "$VENV"
fi
"$VENV/bin/pip" install --quiet -r possible-solution/server/requirements.txt

# Put the venv first on PATH for the rest of the session
if [ -n "${CLAUDE_ENV_FILE:-}" ]; then
  echo "export VIRTUAL_ENV=\"$VENV\"" >> "$CLAUDE_ENV_FILE"
  echo "export PATH=\"$VENV/bin:\$PATH\"" >> "$CLAUDE_ENV_FILE"
fi

# SvelteKit client dependencies for the sample solution
# --legacy-peer-deps: typescript ^7 conflicts with the ^6 peer range of @sveltejs/kit 3.1
(cd possible-solution/client && npm install --no-audit --no-fund --legacy-peer-deps)
