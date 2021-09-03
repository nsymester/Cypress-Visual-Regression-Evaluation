# Adding screenshot testing with Cypress in your project

From: Leonardo Faria
Link: <https://leonardofaria.net/2020/08/03/adding-screenshot-testing-with-cypress-in-your-project/>

Options to run cypress:

-Headless; `npm run cy:run`
-Test Runner; `npm run cy:open`
-Docker, with no Dockerfile - `docker run -it -e CYPRESS_updateSnapshots=$CYPRESS_updateSnapshots --ipc=host -v $PWD:/e2e -w /e2e cypress/included:4.11.0`.

## Troubleshooting

### Problem

When I run `docker run -it -e CYPRESS_updateSnapshots=$CYPRESS_updateSnapshots --ipc=host -v $PWD:/e2e -w /e2e cypress/included:4.11.0` I get:

```bash
docker: Error response from daemon: the working directory 'C:/Program Files/cmder/vendor/git-for-windows/e2e' is invalid, it needs to be an absolute path.
See 'docker run --help'.
```

### Solution

Run using `Powershell` command line:
`docker run -it -e CYPRESS_updateSnapshots=$CYPRESS_updateSnapshots -e CYPRESS_baseUrl=http://host.docker.internal:8000 --ipc=host -v "${PWD}:/e2e" -w /e2e cypress/included:5.4.0`

Run using `MS-DOS` command line:
Replacing `PWD` with `%cd%`
`docker run -it -e CYPRESS_updateSnapshots=$CYPRESS_updateSnapshots -e CYPRESS_baseUrl=http://host.docker.internal:8000 --ipc=host -v "%cd%":/e2e -w /e2e cypress/included:5.4.0`

## Other responses

The following doesn't work in `Bash`:

-Adding a `/` before `$PWD`
-Adding brackets around `PWD` like `$(PWD)`
-Changing the case like `$(pwd)` or `$pwd`

[![cypress-example](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/simple/hcwi3o/master&style=flat&logo=cypress)](https://dashboard.cypress.io/projects/hcwi3o/runs) [![vercel](https://badgen.net/badge/icon/Vercel?icon=zeit&label&color=black&labelColor=black)](https://cypress-example.vercel.app/) [![Twitter Follow](https://img.shields.io/twitter/follow/leozera?label=Follow%20on%20Twitter)](https://twitter.com/leozera/)

Example repository showing how to use Cypress and Cypress Image Snapshot.

More details in the [step by step post](https://bit.ly/30ncCYj) in [my blog](https://leonardofaria.net).

![Screenshot](https://leonardofaria.net/wp-content/uploads/2020/08/cypress-sample-website.png)
