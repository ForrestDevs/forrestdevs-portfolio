import type { GlobalConfig } from 'payload'

export const About: GlobalConfig = {
  slug: 'home-data',
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          name: 'About',
          fields: [
            {
              type: 'text',
              name: 'name',
              label: 'Name',
            },
            {
              type: 'text',
              name: 'initials',
              label: 'Initials',
            },
            {
              type: 'text',
              name: 'url',
              label: 'URL',
            },
            {
              type: 'text',
              name: 'location',
              label: 'Location',
            },
            {
              type: 'text',
              name: 'locationLink',
              label: 'Location Link',
            },
            {
              type: 'textarea',
              name: 'description',
              label: 'Description',
            },
            {
              type: 'textarea',
              name: 'summary',
              label: 'Summary',
            },
            {
              type: 'text',
              name: 'avatarUrl',
              label: 'Avatar URL',
            },
          ],
        },
        {
          name: 'Contact',
          fields: [
            {
              type: 'email',
              name: 'email',
              label: 'Email',
            },
            {
              type: 'text',
              name: 'tel',
              label: 'Telephone',
            },
            {
              type: 'array',
              name: 'social',
              label: 'Social',
              fields: [
                {
                  type: 'text',
                  name: 'name',
                  label: 'Name',
                },
                {
                  type: 'text',
                  name: 'url',
                  label: 'URL',
                },
                {
                  type: 'text',
                  name: 'icon',
                  label: 'Icon',
                },
                {
                  type: 'checkbox',
                  name: 'navbar',
                  label: 'Navbar',
                },
              ],
            },
          ],
        },
        {
          name: 'Skills',
          fields: [
            {
              type: 'array',
              name: 'skills',
              label: 'Skills',
              fields: [
                {
                  type: 'text',
                  name: 'skill',
                  label: 'Skill',
                },
                {
                  type: 'text',
                  name: 'icon',
                  label: 'Icon',
                },
              ],
            },
          ],
        },
        {
          name: 'Education',
          fields: [
            {
              type: 'array',
              name: 'education',
              label: 'Education',
              fields: [
                {
                  type: 'text',
                  name: 'school',
                  label: 'School',
                },
                {
                  type: 'text',
                  name: 'href',
                  label: 'URL',
                },
                {
                  type: 'text',
                  name: 'degree',
                  label: 'Degree',
                },
                {
                  type: 'text',
                  name: 'logoUrl',
                  label: 'Logo URL',
                },
                {
                  type: 'text',
                  name: 'start',
                  label: 'Start',
                },
                {
                  type: 'text',
                  name: 'end',
                  label: 'End',
                },
              ],
            },
          ],
        },
        {
          name: 'Work',
          fields: [
            {
              type: 'array',
              name: 'work',
              label: 'Work',
              fields: [
                {
                  type: 'text',
                  name: 'company',
                  label: 'Company',
                },
                {
                  type: 'text',
                  name: 'href',
                  label: 'URL',
                },
                {
                  type: 'array',
                  name: 'badges',
                  label: 'Badges',
                  fields: [
                    {
                      type: 'text',
                      name: 'badge',
                      label: 'Badge',
                    },
                  ],
                },
                {
                  type: 'text',
                  name: 'location',
                  label: 'Location',
                },
                {
                  type: 'text',
                  name: 'title',
                  label: 'Title',
                },
                {
                  type: 'text',
                  name: 'logoUrl',
                  label: 'Logo URL',
                },
                {
                  type: 'text',
                  name: 'start',
                  label: 'Start',
                },
                {
                  type: 'text',
                  name: 'end',
                  label: 'End',
                },
                {
                  type: 'textarea',
                  name: 'description',
                  label: 'Description',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
} as const
