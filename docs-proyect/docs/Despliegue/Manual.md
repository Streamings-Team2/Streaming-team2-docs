---
sidebar_label: "Manual de despliegue"
title: "Manual de despliegue"
sidebar_position: 1
---

## Pasos para llevar a cabo el despliegue manual

Para llevar a cabo el proceso de despliegue

### Servicios utilizados en Front

se utilizaron los siguientes servicios de AWS:

- AWS CloudFront: Utilizado para la distribución de contenido estático y la implementación de caché.
- AWS S3: Configurado como almacén de objetos para almacenar y servir los archivos estáticos del proyecto.

### Proceso para el despliegue

Dado que no se contaba con las credenciales necesarias para configurar pipelines de despliegue automatizados, la carga de los compilados 1\* de cada MFE (Microfrontend) se realizó de manera manual. Teniendo en cuenta esta aclaración se define la siguiente guía para realizar el proceso:

1. **Creación del bucket en S3:**

   a. En la consola de AWS se realiza la búsqueda del servicio de S3.  
   b. Una vez ingresado a S3 se procede a crear un bucket.  
   c. Se mostrará un formulario en el cual se asigna un nombre único al bucket y se desactiva el bloqueo de acceso público.  
   d. Realizada la configuración del bucket, se debe ingresar al bucket y crear las carpetas donde se alojarán los compilados de cada MFE, adicional...
