import jluxCarrusel from "../assets/jlux-img/carrusel.png"
import jluxCrud from "../assets/jlux-img/crud-products.png"
import jluxIndex from "../assets/jlux-img/index.png"
import jluxLogin from "../assets/jlux-img/login.png"
import jluxPanel from "../assets/jlux-img/Panel-admin.png"
import jluxProduct from "../assets/jlux-img/product.png"

import ep1 from "../assets/electropow-img/1.png"
import ep2 from "../assets/electropow-img/2.png"
import ep3 from "../assets/electropow-img/3.png"
import ep4 from "../assets/electropow-img/4.png"
import ep5 from "../assets/electropow-img/5.png"
import ep6 from "../assets/electropow-img/6.png"

import jluxLogo from "../assets/logos/jluxuries.png"
import gcurlyLogo from "../assets/logos/g-curly.png"
import epLogo from "../assets/logos/electropower.png"
import cobraLogo from "../assets/logos/cobrago.png"
import logisysLogo from "../assets/logos/logisys.png"

const sorted = <T>(files: Record<string, T>): T[] =>
  Object.keys(files)
    .sort()
    .map((key) => files[key])

const gcurlyClaroFiles = import.meta.glob('../assets/g-curly-img/claro/*.{png,jpg,jpeg}', {
  eager: true,
  query: '?url',
  import: 'default',
})
const gcurlyOscuroFiles = import.meta.glob('../assets/g-curly-img/oscuro/*.{png,jpg,jpeg}', {
  eager: true,
  query: '?url',
  import: 'default',
})

const cobragoClaroFiles = import.meta.glob('../assets/cobrago-img/Claro/*.{png,jpg,jpeg}', {
  eager: true,
  query: '?url',
  import: 'default',
})
const cobragoOscuroFiles = import.meta.glob('../assets/cobrago-img/oscuro/*.{png,jpg,jpeg}', {
  eager: true,
  query: '?url',
  import: 'default',
})

const logisysClaroFiles = import.meta.glob('../assets/LogiSys-img/claro/*.{png,jpg,jpeg}', {
  eager: true,
  query: '?url',
  import: 'default',
})
const logisysOscuroFiles = import.meta.glob('../assets/LogiSys-img/oscuro/*.{png,jpg,jpeg}', {
  eager: true,
  query: '?url',
  import: 'default',
})

export const images = {
  jluxuries: {
    logo: jluxLogo,
    shots: [jluxIndex, jluxLogin, jluxProduct, jluxPanel, jluxCrud, jluxCarrusel],
  },
  electropower: {
    logo: epLogo,
    shots: [ep1, ep2, ep3, ep4, ep5, ep6],
  },
  gCurly: {
    logo: gcurlyLogo,
    claro: sorted(gcurlyClaroFiles) as string[],
    oscuro: sorted(gcurlyOscuroFiles) as string[],
  },
  cobrago: {
    logo: cobraLogo,
    claro: sorted(cobragoClaroFiles) as string[],
    oscuro: sorted(cobragoOscuroFiles) as string[],
  },
  logisys: {
    logo: logisysLogo,
    claro: sorted(logisysClaroFiles) as string[],
    oscuro: sorted(logisysOscuroFiles) as string[],
  },
}