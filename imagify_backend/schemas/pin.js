export default {
    name: 'pin',
    title: 'Pin',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },


        {
            name: 'cateogory',
            title: 'Category',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'userId',
            title: 'UserId',
            type: 'string',

        },
        {
            name: 'postedBy',
            title: 'PostedBy',
            type: 'postedby',

        },
        {
            name: 'Favourites',
            title: 'Favourites',
            type: 'array',
            of: [{ type: 'Favourites' }]

        },
        {
            name: 'comments',
            title: 'Comments',
            type: 'array',
            of: [{ type: 'comments' }]

        },

    ]
}