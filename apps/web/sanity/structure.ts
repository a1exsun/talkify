// @ts-ignore
import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S: any) =>
  S.list()
    .title('Talkify')
    .items([
      S.documentTypeListItem('scenario').title('Scenarios'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item: any) => item.getId() && !['scenario'].includes(item.getId()!),
      ),
    ])
