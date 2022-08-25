# Express ESM Experiment

## How to launch/attach

```bash
# have to link at same time or only last will take
npm link esm-test-dependency newrelic

node --loader newrelic/nr-esm-loader/esm-instrumentation-loader.mjs .
```

## VS Code Debugging

From root ESM directory:

```json
{
  "type": "node",
  "request": "launch",
  "name": "Launch Express",
  "skipFiles": [
    "<node_internals>/**"
  ],
  "program": "${workspaceFolder}/express/index.js",
  "cwd": "${workspaceFolder}/express",
  "runtimeArgs": ["--loader", "newrelic/nr-esm-loader/esm-instrumentation-loader.mjs"]
}
```

From express directory:

```json
{
  "type": "node",
  "request": "launch",
  "name": "Launch Index",
  "skipFiles": [
    "<node_internals>/**"
  ],
  "program": "${workspaceFolder}/index.js",
  "runtimeArgs": ["--loader", "newrelic/nr-esm-loader/esm-instrumentation-loader.mjs"]
}
```

## Notes

See agent prototype branch: `esm-prototyping`
