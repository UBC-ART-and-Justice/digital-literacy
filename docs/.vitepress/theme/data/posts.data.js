import { createContentLoader } from 'vitepress';

const blogPath = 'blog';

// const data = createContentLoader('blog/**/*.md', {
const data = createContentLoader(`${blogPath}/**/*.md`, {
    transform(rawData) {
        return rawData
            .map(post => {
                const base = process.env.VITEPRESS_BASE || '';
                return {
                    ...post,
                    frontmatter: {
                        ...post.frontmatter,
                        banner: base
                            ? `${base}${post.frontmatter.banner.replace(/^\//, '')}`
                            : post.frontmatter.banner
                    },
                    url: base
                        ? `${base}${post.url.replace(/^\//, '')}`
                        : post.url
                };
            })
            .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));
    }
});

// console.log('data:', data);
export default data;