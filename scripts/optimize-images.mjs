import sharp from 'sharp';
import { readdir, mkdir, stat } from 'fs/promises';
import { join, extname } from 'path';

const BLOG_IMG_DIR = 'images/blog/linkedin';
const THUMB_DIR = join(BLOG_IMG_DIR, 'thumb');
const THUMB_WIDTH = 240;
const THUMB_HEIGHT = 160;

const PROJECT_LOGOS = [
    { src: 'images/dacli-logo.png', width: 600 },
    { src: 'images/vibe-coding-risk-radar.png', width: 600 },
    { src: 'images/semantic-anchors.png', width: 600 },
];

async function createThumbnails() {
    await mkdir(THUMB_DIR, { recursive: true });
    const files = await readdir(BLOG_IMG_DIR);
    const images = files.filter(f => /\.(png|jpg|jpeg)$/i.test(f));

    let count = 0;
    for (const file of images) {
        const src = join(BLOG_IMG_DIR, file);
        const s = await stat(src);
        if (s.isDirectory()) continue;

        const ext = extname(file).toLowerCase();
        const outName = file.replace(/\.(png|jpg|jpeg)$/i, '.jpg');
        const dest = join(THUMB_DIR, outName);

        await sharp(src)
            .resize(THUMB_WIDTH, THUMB_HEIGHT, { fit: 'cover' })
            .jpeg({ quality: 80 })
            .toFile(dest);
        count++;
    }
    console.log(`Created ${count} thumbnails in ${THUMB_DIR}`);
}

async function resizeLogos() {
    for (const logo of PROJECT_LOGOS) {
        const metadata = await sharp(logo.src).metadata();
        if (metadata.width > logo.width) {
            const tmp = logo.src + '.tmp';
            await sharp(logo.src)
                .resize(logo.width)
                .toFile(tmp);
            const { rename } = await import('fs/promises');
            await rename(tmp, logo.src);
            const newMeta = await sharp(logo.src).metadata();
            console.log(`Resized ${logo.src}: ${metadata.width}x${metadata.height} -> ${newMeta.width}x${newMeta.height}`);
        }
    }
}

await createThumbnails();
await resizeLogos();
