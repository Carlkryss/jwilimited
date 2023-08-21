import {defineField, defineType, defineArrayMember} from 'sanity'

export default defineType({
  name: 'Home',
  title: 'Home',
  type: 'document',
  fields: [
    defineField({
      name: 'mainImage',
      title: 'Home Background Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'secondSectionTitle',
      title: 'Second Section Title',
      type: 'string',
    }),
    defineField({
      name: 'secondSectionText',
      title: 'Second Section Text',
      type: 'string',
    }),
    defineField({
      name: "Services",
      type: "array",
      title: "Services",
      of: [
        defineArrayMember({
          type: 'object',
          name: 'Service',
          fields: [
            {type: 'string', name: 'Title'},
            {type: 'string', name: 'Text'},
            {type: 'image', name: 'image'},

          ]
        })
      ]
    }),
    defineField({
      name: 'projectText',
      title: 'Project Text',
      type: 'string',
    }),
    defineField({
      name: "officeimages",
      type: "array",
      title: "Office Images",
      of: [
        defineArrayMember({
          type: 'image',
          name: 'Office Image',
        })
      ]
    }),
    defineField({
      name: "schoolimages",
      type: "array",
      title: "School Images",
      of: [
        defineArrayMember({
          type: 'image',
          name: 'School Image',
        })
      ]
    }),
    defineField({
      name: "hotelimages",
      type: "array",
      title: "Hotel Images",
      of: [
        defineArrayMember({
          type: 'image',
          name: 'Hotel Image',
        })
      ]
    }),
    defineField({
      name: 'contactBackground',
      title: 'Contact us Background',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'aboutText1',
      title: 'About us Text first',
      type: 'string',
    }),
    defineField({
      name: 'aboutText2',
      title: 'About us Text second',
      type: 'string',
    }),
  ],
})
