export default {
    name: 'pet', // Tells Sanity Studio that the JSON gets -> "_type": "pet"
    type: 'document', // To make new pet documents
    title: 'Pet', // Title of the document type
    fields: [
        {
            name: 'name', //Key of the output data in sanity studio
            type: 'string', // Built-in field type
            title: 'Name',
        }
    ]
}