echo on
START cmd /c "ECHO -------------REST API------------- && cd /d %CD%\Rest-api-back-end\. && npm i && npm start"
START cmd /c "ECHO -------------BACK END------------- && cd /d %CD%\Angular-front-end\. && npm i && npm start"

