$ErrorActionPreference = "Stop"

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

Write-Host "Temporary directory created: $tempDirMods, $tempDirConfig, $tempDirKube"

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

Write-Host "Cleaning up..."
# # Clean up the temporary directory
Remove-Item -Path $tempDirMods -Recurse -Force
Remove-Item -Path $tempDirConfig -Recurse -Force
Remove-Item -Path $tempDirKube -Recurse -Force

Write-Host "Files copied successfully."
