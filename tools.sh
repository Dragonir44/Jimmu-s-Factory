#!/bin/bash
action=$1

TMPDIR="./tmp"

export_client_to_server() {
    create_zip=false

    client_mods_path="client/mods"
    client_config_path="client/config"
    client_kube_path="client/kubejs"
    exclude_files="exclude.txt"
    server_path="server"

    echo "Clearing config folder..."
    rm -rf "$client_config_path"
    git restore --source=HEAD --staged --worktree -- "$client_config_path/*"

    echo "Creating temporary directory..."
    temp_dir_mods=$(mktemp -d "$TMPDIR/exportClientToServerMods.XXXXXXXXXX")
    temp_dir_config=$(mktemp -d "$TMPDIR/exportClientToServerConfig.XXXXXXXXXX")
    temp_dir_kube=$(mktemp -d "$TMPDIR/exportClientToServerKube.XXXXXXXXXX")

    echo "Copying files..."
    cp -r "$client_mods_path" "$temp_dir_mods"
    cp -r "$client_config_path" "$temp_dir_config"
    cp -r "$client_kube_path" "$temp_dir_kube"

    echo "Removing excluded files..."
    excluded_files=$(cat "$exclude_files")
    for excluded_file in $excluded_files; do
        find "$temp_dir_mods" -type f -iname "$excluded_file*.jar" -delete
    done

    sleep 5

    echo "Removing existing files..."
    if [[ -d "$server_path/mods" || -d "$server_path/config" || -d "$server_path/kubejs" ]]; then
        rm -rf "$server_path/mods"
        rm -rf "$server_path/config"
        rm -rf "$server_path/kubejs"
    fi

    echo "Moving files..."
    mv "$temp_dir_mods/mods" "$server_path"
    mv "$temp_dir_config/config" "$server_path"
    mv "$temp_dir_kube/kubejs" "$server_path"

    sleep 5

    echo "Cleaning up..."
    rm -rf "$temp_dir_mods"
    rm -rf "$temp_dir_config"
    rm -rf "$temp_dir_kube"

    if [ "$create_zip" = true ]; then
        echo "Creating zip file..."
        zip -r "$server_path.zip" "$server_path/config" "$server_path/defaultconfigs" "$server_path/kubejs" "$server_path/libraries" "$server_path/mods" "$server_path/run.bat" "$server_path/run.sh" "$server_path/server.properties" "$server_path/user_jvm_args.txt"
    fi
}

export_for_api() {
    client_folder="./client"
    zip_file="$1.zip"

    echo "Clearing config folder..."
    rm -rf "client/config"
    git restore --source=HEAD --staged --worktree -- "client/config/*"

    echo "Adding folders to zip file..."
    zip -r "$zip_file" "$client_folder/assets" "$client_folder/*config*" "$client_folder/fancymenu*" "$client_folder/kubejs" "$client_folder/mods" "$client_folder/shaderpacks"

    echo "Folders have been added to the zip file successfully."
}

install_forge_server() {
    version=$1

    if [ -z "$version" ]; then
        echo "Please provide a version name."
    else
        echo "Downloading Forge server..."
        wget -O "./server/forge-$version-installer.jar" "https://maven.minecraftforge.net/net/minecraftforge/forge/$version/forge-$version-installer.jar"

        cd "./server"

        echo "Installing Forge server..."
        java -jar "forge-$version-installer.jar" --installServer

        echo "Cleaning up..."
        rm -f "forge-$version-installer.jar"

        cd ".."
    fi
}

if [ "$action" = "server" ]; then
    if [ "$2" = "true" ]; then
        export_client_to_server
    else
        export_client_to_server
    fi
elif [ "$action" = "api" ]; then
    version_name=$2

    if [ -z "$version_name" ]; then
        echo "Please provide a version name."
    else
        export_for_api "$version_name"
    fi
elif [ "$action" = "forge" ]; then
    install_forge_server "$2"
else
    echo "Invalid action. Please provide a valid action."
fi