#! /usr/bin/env bash
whoami 
hostname
date
docker container ps 
docker compose logs --tail=20 $(docker compose ps -q) 
ss -tuln | grep "LISTEN"
curl -i http://localhost:8000/api/health
