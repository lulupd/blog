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
    return [...tags]
}

export function getSplitTags(tagsArr) {
    const splitTags = [...tagsArr];
    for (let i = 0; i < splitTags.length; i++) {
        let splitTag = splitTags[i].split("/");
        if (splitTag.length > 1) {
            splitTags.splice(i, 1);
            splitTags.push(...splitTag);
        }
    }
    return splitTags;
}