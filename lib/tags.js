export function getAllPostTags (posts) {
	const tagsArr = posts.map(post => {
            const {id, frontmatter, content} = post
            const {title, author, category, date, bannerImage, tags} = frontmatter
            //JSX for individual blog listing
            return tags
    })

    var tags = tagsArr[0].concat(tagsArr[1]).slice()
    tags.sort()
    tags = tags.filter((item, index, arr) => arr.indexOf(item) == index)
    return tags
}