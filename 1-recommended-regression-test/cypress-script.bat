docker run -it -e CYPRESS_updateSnapshots=%CYPRESS_updateSnapshots% -e CYPRESS_baseUrl=http://host.docker.internal:8000 -v "%cd%":/e2e -w /e2e cypress/included:5.4.0
exit
