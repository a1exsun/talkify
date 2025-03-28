// ./src/sanity/lib/queries.ts

import {defineQuery} from 'next-sanity'

export const SCENARIOS_QUERY = defineQuery(`*[_type == "scenario"] { _id, title, "category": categories[0]-> title, "url": mainImage.asset->url }`)

export const SCENARIO_QUERY = defineQuery(`*[_type == "scenario" && _id == $id][0] { _id, title, "category": categories[0]-> title, "url": mainImage.asset->url, glossary }`)
