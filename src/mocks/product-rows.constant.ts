import { Img1, Img2, Img3, Img4, Img5 } from '../assets/ProductImg'
import { ProductRowData } from '../types/product-row-data'

export const mockedProductRows: ProductRowData[] = [
  {
    id: 1,
    product:
      'Celular Iphone Turbinado Moto G Turbo Mega hiper power blaster bom OPORTUNIDADE!!',
    img: Img1,
    quantity: 1,
    total: 100,
    trackingCode: 'QWE44844uhEBEH',
    tracking: [
      { date: '2020-01-05', status: '[CTCE] são paulo' },
      { date: '2020-01-02', status: '[SALVADOR] salvador dabdhsbhbs' }
    ],
    address:
      'Independência - 1º Complemento Setor das Mansões, Aparecida de Goiânia, GO, 29109-005'
  },
  {
    id: 2,
    product: 'Celular Iphone Turbinado Moto G Turbo!!',
    img: Img2,
    quantity: 3,
    total: 50,
    trackingCode: '!YWGBEBDJEUUE#',
    tracking: [
      { date: '2020-01-05', status: '[CTE] Comercio ssa ss' },
      { date: '2020-01-02', status: '[RJ] rj rjr jr jr' }
    ],
    address:
      'Independência - 1º Complemento Setor das Mansões, Aparecida de Goiânia, GO, 29109-005'
  },
  {
    id: 3,
    product: 'Celular Iphone Turbinado Moto G Turbo!!',
    img: Img3,
    quantity: 7,
    total: 10,
    trackingCode: 'DBDHE&3bu36#beh333',
    tracking: [
      { date: '2020-01-05', status: '[SSA] anananananna' },
      { date: '2020-01-02', status: '[MG] lalalalallalalalla' },
      { date: '2020-01-02', status: '[SP] um lugar ai' },
      { date: '2020-01-02', status: '[MA] lalalalallalalalla' },
      { date: '2020-01-02', status: '[SC] centro de distribuição' },
      { date: '2020-01-02', status: '[BA] city ctiy' }
    ],
    address:
      'Independência - 1º Complemento Setor das Mansões, Aparecida de Goiânia, GO, 29109-005'
  },
  {
    id: 4,
    product: 'Celular Moto G Turbo!!',
    img: Img4,
    quantity: 2,
    total: 5,
    trackingCode: '2344DDNEY3EE344DD',
    tracking: [
      { date: '2020-01-05', status: '[EL] eleieleieleeielei' },
      { date: '2020-01-02', status: '[SPSP] CTCE mogi' }
    ],
    address:
      'Independência - 1º Complemento Setor das Mansões, Aparecida de Goiânia, GO, 29109-005'
  },
  {
    id: 5,
    product: 'Celular Iphone Turbinado Moto G Turbo!!',
    img: Img5,
    quantity: 2,
    total: 20,
    trackingCode: 'AJSD4746DDBDYEE',
    tracking: [
      { date: '2020-06-85', status: '[AAAA] ababacsvasghasbsh' },
      { date: '2020-09-02', status: '[EJE] asasahsuah' }
    ],
    address:
      'Independência - 1º Complemento Setor das Mansões, Aparecida de Goiânia, GO, 29109-005'
  }
]
