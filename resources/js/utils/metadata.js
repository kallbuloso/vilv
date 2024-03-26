export const setMetadata = (html_url, image_url, html_title, page_title, page_description) => {
  const metaData = {
    title: html_title + ' | ' + page_title,
    meta: {
      description: {
        name: 'description',
        content: page_description
      },
      og_title: {
        property: 'og:title',
        content: html_title + ' | ' + page_title
      },
      og_description: {
        property: 'og:description',
        content: page_description
      },
      og_url: {
        property: 'og:url',
        content: html_url
      },
      og_image: {
        property: 'og:image',
        content: image_url
      }
    }
  }
  return metaData
}
