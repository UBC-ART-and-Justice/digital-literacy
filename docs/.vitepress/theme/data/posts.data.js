import { createContentLoader } from 'vitepress';

const blogPath = 'blog';

// const data = createContentLoader('blog/**/*.md', {
const data = createContentLoader(`${blogPath}/**/*.md`, {
    transform(rawData) {
        return rawData
            .map(post => ({
                ...post,
                frontmatter: {
                    ...post.frontmatter,
                    banner: process.env.VITEPRESS_BASE 
                        ? `${process.env.VITEPRESS_BASE}${post.frontmatter.banner.replace(/^\//, '')}`
                        : post.frontmatter.banner
                }
            }))
            .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));
    }
});

export default data;