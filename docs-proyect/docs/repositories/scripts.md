---
sidebar_label: "Scripts"
sidebar_position: 2
---

# Scritps

Scripts para clonar todos los micro-frontend cuando se tiene acceso a la organizaciòn

## Cómo Clonar y Usar los Repositorios

Puedes clonar todos los repositorios de forma automática y asegurarte de tener las últimas actualizaciones con el siguiente script en tu terminal. Este script realiza los siguientes pasos:

1. Clona los repositorios si no están presentes utilizando el script en bash.
2. Si el repositorio ya existe, se asegura de actualizarlo y cambiar a la rama `develop`.
3. Instala las dependencias de cada repositorio utilizando `npm install`.

### Script en bash

````bash
repos=(
 "https://github.com/Streamings-Team2/mfe-st-host"
 "https://github.com/Streamings-Team2/mfe-st-common"
 "https://github.com/Streamings-Team2/mfe-st-error"
 "https://github.com/Streamings-Team2/mfe-st-utils"
 "https://github.com/Streamings-Team2/mfe-st-login-v2"
 "https://github.com/Streamings-Team2/mse-graphql"
)

for repo_url in "${repos[@]}"
do
  repo_name=$(basename "$repo_url" .git)

  if [ ! -d "$repo_name" ]; then
    printf "\e[36m<---------------------------- Clonando $repo_name ---------------------------->\e[0m\n"
    git clone "$repo_url"

    cd "$repo_name" || exit

    printf "\e[36m<---------------------------- Cambiando a la rama develop ---------------------------->\e[0m\n"
    git checkout develop

    printf "\e[36m<---------------------------- Instalando dependencias ---------------------------->\e[0m\n"
    npm install

    cd ..
  else
    cd "$repo_name" || exit
    printf "\e[36m<---------------------------- Actualizando $repo_name ---------------------------->\e[0m\n"
    git checkout develop
    git pull

    printf "\e[36m<---------------------------- Instalando dependencias ---------------------------->\e[0m\n"
    npm install

    cd ..
  fi
done
```z

### Comando para ejecutar los repositorios
```bash
cd mfe-st-<repositorio>
npm start
````
