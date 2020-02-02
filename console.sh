#!/bin/bash

function help_menu()
{
    echo "Helper scripts to run the project";
    echo "console.sh --install-deps"
    echo "    Install the required dependencies to run"
    echo "console.sh --run"
    echo "    Run a HTML localhost server"
}

function install_deps()
{
    echo "# Script to install deps to run a static webpage on NPM server"
    sudo apt-get install curl
    curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
    sudo apt-get install nodejs
    npm -v
    npm install connect serve-static
}

function run_react_server()
{
    echo ""
    echo "ACCESS YOU PROJECT ON YOUR BROWNSER USING:"
    echo "http://localhost:8080/<path-to-html-file>"
    node server.js
}


function main()
{
    help_menu;
    if [ "$1" == "--install-deps" ]
    then
        install_deps;
    elif [ "$1" == "--run" ]
    then
        run_react_server;
    else
        echo "Invalid option: $1"  
    fi;
}

main "$1";