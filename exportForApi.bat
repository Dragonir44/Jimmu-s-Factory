@echo off
setlocal

REM Chemin du dossier client
set "clientFolder=.\client"

REM Chemin de l'archive zip
set "zipFile=%1.zip"

REM Ajouter les dossiers au fichier zip
echo Ajout des dossiers au fichier zip...
powershell -noprofile -command "Compress-Archive -Path '%clientFolder%\config', '%clientFolder%\defaultconfigs', '%clientFolder%\kubejs', '%clientFolder%\mods' -DestinationPath '%zipFile%'"

echo Les dossiers ont été ajoutés au fichier zip avec succès.

endlocal