import { GetOrderResponse } from '../interfaces/responses'

const productTable: GetOrderResponse = {
    "id": 6,
    "customer_id": 59,
    "ordered_at": "2021-06-28 01:17:33",
    "address": {
      "id": 20,
      "user_id": 59,
      "city": "Feira de Santana",
      "state": "Bahia",
      "country": "Brazil",
      "cep": "44001-640",
      "street": "O meu mais novo endereço",
      "neighbour": "Centro",
      "house_id": "903",
      "details": "detalhes do segundo endereço",
      "owner_phone": "+5575991909777",
      "owner_name": "",
      "default": false
    },
    "payment": {
      "id": 9,
      "total": 30000,
      "status": "paid"
    },
    "products": [
      {
        "product": {
          "id": 2,
          "name": "Aparelho legal",
          "rating": 0,
          "type": "informática",
          "description": "Um aparelho portátil e bastante atraente",
          "stock": 1000,
          "provider_id": 1,
          "sold_qnt": 0,
          "active_price": {
            "value": 40000,
            "divided_max": 10,
            "payment_discount": 1000,
            "active": true
          },
          "main_media": {
            "path": "null",
            "ext": "null",
            "main": false
          }
        },
        "qnt": 1,
        "rating": 2
      },
      {
        "product": {
          "id": 3,
          "name": "Aparelho legal",
          "rating": 0,
          "type": "informática",
          "description": "Um aparelho portátil e bastante atraente",
          "stock": 1000,
          "provider_id": 1,
          "sold_qnt": 0,
          "active_price": {
            "value": 40000,
            "divided_max": 10,
            "payment_discount": 1000,
            "active": true
          },
          "main_media": {
            "path": "null",
            "ext": "null",
            "main": true
          }
        },
        "qnt": 1,
        "rating": 2
      },
      {
        "product": {
          "id": 1,
          "name": "IPHONE MASSA",
          "rating": 0,
          "type": "informática",
          "description": "Um aparelho portátil e bastante atraente",
          "stock": 1000,
          "provider_id": 1,
          "sold_qnt": 0,
          "active_price": {
            "value": 10000,
            "divided_max": 10,
            "payment_discount": 100,
            "active": true
          },
          "main_media": {
            "path": "first.jpeg",
            "ext": "jpeg",
            "main": true
          }
        },
        "qnt": 1,
        "rating": 3
      }
    ],
    "tracking": [],
    "tracking_code": "11",
    "received": true
  }

export const mockedProductTable = [
    productTable,
    productTable,
    productTable,
    productTable,
    productTable
  ]
  