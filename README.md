# compose-ingress-sample

This repository is a simiplified example of how to manage ingress with nginx and docker (for small scale deployments)
Feel free to submit comments and PRs :)

## Running

Use `docker-compose up --build` to build and start all 4 containers.
Open three browser tabs:
    > http://localhost/app-1
    > http://localhost/app-2
    > http://localhost/app-3

Notice the IP addresses in each tab. APP-2 and APP-3 are in the same network space while APP-1 is in a different one
