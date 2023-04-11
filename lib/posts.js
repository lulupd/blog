import fs from 'fs';
import matter from 'gray-matter';

export function getAllPosts() {
    const files = fs.readdirSync('posts');
	const posts = files.map((fileName) => {
        const id = fileName.replace('.md', '');
        const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');
        const { data: frontmatter, content } = matter(readFile);
        return {
          id,
          frontmatter,
          content,
        };
    });
    return posts;
}