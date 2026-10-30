# Docker images for Software Process Engineering

Multi-platform (`linux/amd64`, `linux/arm64`) images used in the
[containerization lecture](https://unibo-spe.github.io/09-containerization/) of the course:

| Image | Content |
|-------|---------|
| [`pikalab/hitcounter`](https://hub.docker.com/r/pikalab/hitcounter) | the Express Web service from the "building an image" slides, counting hits on port `8080` |
| [`pikalab/fakesim`](https://hub.docker.com/r/pikalab/fakesim) | a fake simulation, writing a random string into `/data/$(hostname).txt` |

Each directory containing a `Dockerfile` is an image, published as `pikalab/<directory>`.

## How it works

- Every push and pull request builds all images, for all platforms, and smoke-tests them
- On `master`, [semantic-release](https://semantic-release.gitbook.io/) computes the next version from the
  [Conventional Commits](https://www.conventionalcommits.org/) since the last release, and pushes the images as
  `pikalab/<image>:<version>` and `pikalab/<image>:latest` (cf. `publish.sh`)
- [Renovate](https://docs.renovatebot.com/) keeps base images and dependencies up to date:
  updates of anything ending up in the images are committed as `chore(core-deps)`, hence they trigger a patch release

## Required secrets

- `DOCKERHUB_USERNAME`, `DOCKERHUB_TOKEN`: credentials of a Docker Hub account allowed to push to `pikalab/*`
