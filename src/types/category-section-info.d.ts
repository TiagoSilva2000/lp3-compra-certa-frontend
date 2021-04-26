export type CategorySectionInfo = {
  title: string
  categories?: string[]
  subcategories?: {
    subtitle: string
    subcategories: string[]
  }[]
}

// export type CategorySectionInfo = OnlyCategoriesSection | SubcategoriesSection
// type OnlyCategoriesSection = {
//   title: string
//   categories: string[]
// }

// type SubcategoriesSection = {
//   title: string
//   subcategories: {
//     subtitle: string
//     subcategories: string[]
//   }[]
// }
