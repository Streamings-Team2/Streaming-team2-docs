# Streaming-team2-docs
repositorio de información general
# Repositorios del Proyecto Streamings Team 2

Este conjunto de repositorios contiene los microfrontends y las utilidades que componen el proyecto **Streamings Team 2**. A continuación, encontrarás una breve descripción de cada repositorio y cómo clonarlos y configurarlos para su uso.

## Descripción de los Repositorios

### 1. **mfe-st-host**
   - **Descripción**: Este repositorio contiene el host principal para los microfrontends. Es responsable de gestionar la carga y la integración de otros microfrontends.
   - **Tecnologías**: JavaScript, React ,tailwind,mf(modulos federados)

### 2. **mfe-st-common**
   - **Descripción**: Repositorio que contiene módulos y componentes comunes compartidos entre diferentes microfrontends. Proporciona utilidades generales como servicios y configuraciones compartidas.
  - **Tecnologías**: JavaScript, React ,tailwind,mf(modulos federados)

### 3. **mfe-st-error**
   - **Descripción**: Este repositorio maneja los componentes relacionados con el manejo de errores y la visualización de mensajes de error dentro del sistema.
    - **Tecnologías**: JavaScript, React ,tailwind,mf(modulos federados)


### 4. **mfe-st-utils**
   - **Descripción**: Repositorio con funciones y herramientas reutilizables, como validaciones, formateadores y utilidades generales que pueden ser utilizadas en varios microfrontends.
   - **Tecnologías**: JavaScript, React ,tailwind,mf(modulos federados)


## Cómo Clonar y Usar los Repositorios

Puedes clonar todos los repositorios de forma automática y asegurarte de tener las últimas actualizaciones con el siguiente script en tu terminal. Este script realiza los siguientes pasos:

1. Clona los repositorios si no están ya presentes.
2. Si el repositorio ya existe, se asegura de actualizarlo y cambiar a la rama `develop`.
3. Instala las dependencias de cada repositorio utilizando `npm install`.

### Script para Clonar y Usar los Repositorios

```bash
repos=(
 "https://github.com/Streamings-Team2/mfe-st-host"
 "https://github.com/Streamings-Team2/mfe-st-common"
 "https://github.com/Streamings-Team2/mfe-st-error"
 "https://github.com/Streamings-Team2/mfe-st-utils"
)

for repo_url in "${repos[@]}"
do
  git clone "$repo_url"
     repo_name=$(basename "$repo_url")
	  if [ ! -d "$repo_name" ]; then
            # Si no existe, clona el repositorio
            git clone "$repo_url"
            # Entra en la carpeta del repositorio
            cd "$repo_name"
	    #cambia a la rama develop 
            git checkout develop		
	#instala dependencias
	npm install
         # Regresa al directorio anterior
            cd ..
        else
            # Si la carpeta existe, entra en ella
            cd "$repo_name"
            # Cambia a la rama 'develop'
            git checkout develop
            # Actualiza el repositorio con los cambios más recientes
            git pull
            # Regresa al directorio anterior
            cd ..
        fi
done
