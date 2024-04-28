$ErrorActionPreference = "Stop"

$action = $args[0]

Function Export-Client-To-Server {
    param (
        [boolean]$createZip = $false
    )

    $clientModsPath = "client/mods"
    $clientConfigPath = "client/config"
    $clientKubePath = "client/kubejs"
    $excludeFiles = "exclude.txt"
    $serverPath = "server"

    Write-Host "Creating temporary directory..."
    # Create a temporary directory
    $tempDirMods = New-Item -ItemType Directory -Path "$env:TEMP\exportClientToServerMods"
    $tempDirConfig = New-Item -ItemType Directory -Path "$env:TEMP\exportClientToServerConfig"
    $tempDirKube = New-Item -ItemType Directory -Path "$env:TEMP\exportClientToServerKube"

    Write-Host "Copying files..."
    # Copy all files from client/mods to the temporary directory
    Copy-Item -Path $clientModsPath -Destination $tempDirMods -Recurse
    Copy-Item -Path $clientConfigPath -Destination $tempDirConfig -Recurse
    Copy-Item -Path $clientKubePath -Destination $tempDirKube -Recurse

    Write-Host "Removing excluded files..."
    # # Remove the excluded files from the temporary directory via regex from type ligne*.jar
    $excludedFiles = Get-Content $excludeFiles
    foreach ($excludedFile in $excludedFiles) {
        Get-ChildItem -Path $tempDirMods -Recurse | Where-Object { $_.FullName -match "$excludedFile.*\.jar$" } | Remove-Item -Force
    }

    # Wait for the files to be moved
    Start-Sleep -Seconds 5

    Write-Host "Removing existing files..."
    # Remove the existing files in server/mods
    if ((Test-Path "$serverPath/mods") -or (Test-Path "$serverPath/config") -or (Test-Path "$serverPath/kubejs")) {
        Remove-Item -Path "$serverPath/mods" -Recurse -Force
        Remove-Item -Path "$serverPath/config" -Recurse -Force
        Remove-Item -Path "$serverPath/kubejs" -Recurse -Force
    }

    Write-Host "Moving files..."
    # Move the files from the temporary directory to server/mods
    Move-Item -Path "$tempDirMods/mods" -Destination $serverPath
    Move-Item -Path "$tempDirConfig/config" -Destination $serverPath
    Move-Item -Path "$tempDirKube/kubejs" -Destination $serverPath

    # Wait for the files to be moved
    Start-Sleep -Seconds 5

    Write-Host "Cleaning up..."
    
    # Clean up the temporary directory
    Remove-Item -Path $tempDirMods -Recurse -Force
    Remove-Item -Path $tempDirConfig -Recurse -Force
    Remove-Item -Path $tempDirKube -Recurse -Force

    if ($createZip) {
        Write-Host "Creating zip file..."
        # Create a zip file
        
        Compress-Archive -Path "$serverPath/*" -DestinationPath "$serverPath.zip" -Force
    }
}

Function Export-For-Api {
    # Chemin du dossier client
    $clientFolder = ".\client"

    # Chemin de l'archive zip
    $zipFile = $args[0] + ".zip"

    # Ajouter les dossiers au fichier zip
    Write-Host "Ajout des dossiers au fichier zip..."
    Compress-Archive -Force -Path "$clientFolder\assets", "$clientFolder\*config*", "$clientFolder\fancymenu*", "$clientFolder\kubejs", "$clientFolder\mods", "$clientFolder\shaderpacks" -DestinationPath $zipFile

    Write-Host "Les dossiers ont été ajoutés au fichier zip avec succès."
}

if ($action -eq "server") {

    if ($args[1] -eq "true") {
        Export-Client-To-Server -createZip $true
    } else {
        Export-Client-To-Server
    }

} elseif ($action -eq "api") {
    $versionName = $args[1]
    
    if ($null -eq $versionName) {
        Write-Host "Please provide a version name."
    } else {
        Export-For-Api $versionName
    }

} else {
    Write-Host "Invalid action. Please provide a valid action."
}