#!/bin/sh

set -ex

trap 'kill $(jobs -p)' EXIT

rootDir=$(cd "$(dirname "$0")/.."; pwd)
resultsDir="${rootDir}/results"

metroPort=9091
haulPort=9092

cd "${rootDir}"

# Spawn metro server
yarn start --port $metroPort &
metroPid=$!

sleep 1

# Spawn haul server
yarn haul start --port $haulPort &
haulPid=$!

sleep 1

# Get source from Metro
curl -so "${resultsDir}/metro-index.js" "http://localhost:${metroPort}/index.bundle?platform=ios&dev=true&minify=false"

# Get source map from Metro
curl -s "http://localhost:${metroPort}/index.map?platform=ios&dev=true&minify=false" | jq . > "${resultsDir}/metro-map.json"

# Get source from Haul
curl -so "${resultsDir}/haul-index.js" "http://localhost:${haulPort}/index.bundle?platform=ios&dev=true&minify=false"

# Get source map from Haul
curl -s "http://localhost:${haulPort}/index.ios.bundle.map" | jq . > "${resultsDir}/haul-map.json"

# Stop metro and haul before we go
kill $metroPid
kill $haulPid
