rem install git and clone repo
rem install node

cd %~dp0%\.. rem change to batch file directory
npm install typescript -g
npm install typings -g

cd server
npm install express --save
typings install

cd ..\TypescriptApp
typings install

