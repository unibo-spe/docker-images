#!/bin/sh
# Builds every image (i.e. every directory with a Dockerfile) for amd64 and arm64,
# and pushes it to Docker Hub as pikalab/<dir>:<version> and pikalab/<dir>:latest
set -e
VERSION="${1:?usage: $0 VERSION}"
for dockerfile in */Dockerfile; do
    image="pikalab/$(dirname "$dockerfile")"
    docker buildx build "$(dirname "$dockerfile")" \
        --platform linux/amd64,linux/arm64 \
        --tag "$image:$VERSION" \
        --tag "$image:latest" \
        --push
done
