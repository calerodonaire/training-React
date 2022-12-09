#FontAwesome Icons Management

installation React icons:
[Guia oficial]
(https://fontawesome.com/docs/web/use-with/react/)

```Node
npm i --save @fortawesome/fontawesome-svg-core
# Free icons styles
npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/free-regular-svg-icons
#For components
npm i --save @fortawesome/react-fontawesome@latest
```

Como utilizar los iconos en react:

[Referencia]
(https://fontawesome.com/docs/web/use-with/react/add-icons)
```React
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faEnvelope } from "@fortawesome/free-solid-svg-icons";
 import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
 
 <FontAwesomeIcon icon={faStar}/>
```