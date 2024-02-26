@echo off

set "clientModsPath=client/mods"
set "serverModsPath=server/mods"
set "excludeFiles=exclude.txt"

set "clientConfigPath=client/config"
set "serverConfigPath=server/config"

set "clientKubePath=client/kubejs"
set "serverKubePath=server/kubejs"

REM Create a temporary directory
set "tempDirMods=%TEMP%\exportClientToServerMods_%RANDOM%"
set "tempDirConfig=%TEMP%\exportClientToServerConfig_%RANDOM%"
set "tempDirKube=%TEMP%\exportClientToServerKube_%RANDOM%"
mkdir "%tempDirMods%"
mkdir "%tempDirConfig%"
mkdir "%tempDirKube%"

REM Copy all files from client/mods to the temporary directory
xcopy /s /e /i "%clientModsPath%" "%tempDirMods%"
xcopy /s /e /i "%clientConfigPath%" "%tempDirConfig%"
xcopy /s /e /i "%clientKubePath%" "%tempDirKube%"


REM Remove the excluded files from the temporary directory
for /f "usebackq delims=" %%f in ("%excludeFiles%") do (
    echo Removing %%f
    del /q "%tempDirMods%\%%f" >nul 2>&1
)

REM Remove the existing files in server/mods
rmdir /s /q "%serverModsPath%"
rmdir /s /q "%serverConfigPath%"
rmdir /s /q "%serverKubePath%"

REM Move the files from the temporary directory to server/mods
move "%tempDirMods%" "%serverModsPath%"
move "%tempDirConfig%" "%serverConfigPath%"
move "%tempDirKube%" "%serverKubePath%"

REM Clean up the temporary directory
rmdir /s /q "%tempDirMods%"
rmdir /s /q "%tempDirConfig%"
rmdir /s /q "%tempDirKube%"

echo Files copied successfully.
