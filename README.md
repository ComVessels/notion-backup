# `notion-backup`

> Export [Notion](https://www.notion.so/) pages and subpages to a GitHub repo on a schedule (eg. to be used as a scheduled backup)

## Setup

1. Click on the green "Use this template" button at the top to make your own copy of this repository - make sure to choose "Private", unless you want to publicize your Notion content
2. Edit `index.js` to add the Notion pages you want to export to the `blocks` array at the top of the file
3. Optional: Edit `index.js` to specify a different export format, time zone or locale
4. Create a new repo secret called `NOTION_TOKEN` with the instructions in [this article](https://artur-en.medium.com/automated-notion-backups-f6af4edc298d)
5. After the action has run, check the `exports` folder to verify that the action is running correctly

## How

The GitHub Actions workflow is scheduled to run once a day to:

1. export each specified Notion block
2. wait until each export is done
3. download, unzip and commit the content from each export to the repository

## Credit

This script is heavily based on [`notion-guardian`](https://github.com/richartkeil/notion-guardian), thanks to [@richartkeil](https://github.com/richartkeil)!
