---
layout: post
title: "Handle Dependency Updates the easy Way"
tags: [gradle]
redirect: /news/dependency-update
---

Every developer knows this problem - you work on a project and over time new versions of the configured dependencies are released.
Sometimes it is even not that there is a new version, but it is the stable release you've been waiting for so long!

But instead doing a manual check from time to time, there is a better approach for your gradle project: the [gradle-versions-plugin](https://github.com/ben-manes/gradle-versions-plugin) by [Ben Manes](https://twitter.com/benmanes).

Just install it and get a report for your dependencies by executing the `dependencyUpdates` task.

This will now help me to keep the dependencies for docToolchain up to date!
