#!/bin/sh

set -ex

trap 'kill $(jobs -p)' EXIT

rootDir=$(cd "$(dirname "$0")/.."; pwd)
resultsDir="${rootDir}/results"

metroPort=9091
haulPort=9092

if [ $# -gt 0 ]
then
    do_metro=0
    do_haul=0
    for var in "$@"
    do
        if [ $var == "metro" ]
        then
            do_metro=1
        elif [ $var == "haul" ]
        then
            do_haul=1
        else
            echo "Unknownt argument $var"
            exit 1
        fi
    done
else
    do_metro=1
    do_haul=1
fi

cd "${rootDir}"

if [ $do_metro -gt 0 ]
then
    # Spawn metro server
    yarn start --port $metroPort &
    metroPid=$!

    sleep 5

    # Get source from Metro
    curl -so "${resultsDir}/metro-index.js" "http://localhost:${metroPort}/index.bundle?platform=ios&dev=true&minify=false"

    # Get source map from Metro
    curl -s "http://localhost:${metroPort}/index.map?platform=ios&dev=true&minify=false" | jq . > "${resultsDir}/metro-map.json"

    # Kill metro before we go
    kill $metroPid
fi

if [ $do_haul -gt 0 ]
then
    # Spawn haul server
    yarn haul start --port $haulPort &
    haulPid=$!

    sleep 5

    # Get source from Haul
    curl -so "${resultsDir}/haul-index.js" "http://localhost:${haulPort}/index.bundle?platform=ios&dev=true&minify=false"

    # Get source map from Haul
    curl -s "http://localhost:${haulPort}/index.ios.bundle.map" | jq . > "${resultsDir}/haul-map.json"

    # Stop haul before we go
    kill $haulPid
fi
