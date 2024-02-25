@echo off

set "clientModsPath=client/mods"
set "serverModsPath=server/mods"
set "excludeFiles=exclude.txt"

REM Create a temporary directory
set "tempDir=%TEMP%\exportClientToServer_%RANDOM%"
mkdir "%tempDir%"

REM Copy all files from client/mods to the temporary directory
xcopy /s /e /i "%clientModsPath%" "%tempDir%"

REM Remove the excluded files from the temporary directory
for /f "usebackq delims=" %%f in ("%excludeFiles%") do (
    echo Removing %%f
    del /q "%tempDir%\%%f" >nul 2>&1
)

REM Remove the existing files in server/mods
rmdir /s /q "%serverModsPath%"

REM Move the files from the temporary directory to server/mods
move "%tempDir%" "%serverModsPath%"

REM Clean up the temporary directory
rmdir /s /q "%tempDir%"

echo Files copied successfully.
