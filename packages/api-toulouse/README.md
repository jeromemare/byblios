# bibtou-api

API d'accès aux données de la bibliothèque de Toulouse

## Requête permettant de renouveler des livres

```bash

curl 'http://catalogues.toulouse.fr/web2/tramp2.exe/form/A0o2275m.000' -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:69.0) Gecko/20100101 Firefox/69.0' -H 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8' -H 'Accept-Language: fr,fr-FR;q=0.8,en-US;q=0.5,en;q=0.3' --compressed -H 'Content-Type: application/x-www-form-urlencoded' -H 'Connection: keep-alive' -H 'Referer: http://catalogues.toulouse.fr/web2/tramp2.exe/login_when_needed/A0o2275m.000' -H 'Cookie: __utma=194720447.1423782208.1526980865.1569973787.1570007082.173; __utmz=194720447.1562144007.151.63.utmcsr=bibliotheque.toulouse.fr|utmccn=(referral)|utmcmd=referral|utmcct=/; __utmc=194720447; __utmb=194720447.1.10.1570007082; __utmt=1' -H 'Upgrade-Insecure-Requests: 1' --data 'HASNOW=30170024972940%3A1&HASNOW=30170029481897%3A1&HASNOW=30170023721876%3A1&buttons=Renew%3Drenew_hasnow+screen%3DMyAccount.html&Renew=Renouveler+les+pr%EAts+s%E9lectionn%E9s&buttons=RenewAll%3Drenew_hasnow+hasnow%3Dall+screen%3DMyAccount.html'

```
