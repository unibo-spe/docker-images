import config from 'semantic-release-preconfigured-conventional-commits' with {type: 'json'};

config.plugins.push(
    ["@semantic-release/exec", {
        "publishCmd": "./publish.sh ${nextRelease.version}",
    }],
    "@semantic-release/github",
    ["@semantic-release/git", {
        "assets": ["CHANGELOG.md"],
        "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
    }],
)

export default config;
