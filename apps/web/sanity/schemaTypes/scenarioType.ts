import {DocumentTextIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const scenarioType = defineType({
  name: 'scenario',
  title: 'Scenario',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    // defineField({
    //   name: 'slug',
    //   type: 'slug',
    //   options: {
    //     source: 'title',
    //   },
    // }),
    defineField({
      name: 'author',
      type: 'reference',
      to: {type: 'author'},
    }),
    defineField({
      name: 'mainImage',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        })
      ]
    }),
    defineField({
      name: 'categories',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: {type: 'category'}})],
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
    }),
    defineField({
      name: 'glossary',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'word',
              type: 'string',
            }),
            defineField({
              name: 'translation',
              type: 'string',
            })
          ]
        })
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      category: 'categories.0.title',
      media: 'mainImage',
    },
    prepare(selection) {
      const {category, author} = selection
      return {...selection, subtitle: (category && `[${category}]`) + (author && ` by ${author}`)}
    },
  },
})
