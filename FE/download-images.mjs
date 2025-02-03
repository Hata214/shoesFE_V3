import { createWriteStream, mkdirSync, existsSync } from 'fs';
import { get } from 'https';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const images = {
    banners: {
        'banner.jpg': 'https://images.unsplash.com/photo-1556906781-9a412961c28c'
    },
    products: {
        'nike-air-max-270.jpg': 'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
        'nike-air-force-1.jpg': 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519',
        'nike-air-max-90.jpg': 'https://images.unsplash.com/photo-1605348532760-6753d2c43329'
    },
    team: {
        'member1.jpg': 'https://images.unsplash.com/photo-1560250097-0b93528c311a',
        'member2.jpg': 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2',
        'member3.jpg': 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e'
    },
    store: {
        'storefront.jpg': 'https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0',
        'interior.jpg': 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5'
    },
    avatars: {
        'default-avatar.jpg': 'https://images.unsplash.com/photo-1633332755192-727a05c4013d'
    }
};

const downloadImage = (url, filepath) => {
    return new Promise((resolve, reject) => {
        get(url, (res) => {
            if (res.statusCode === 200) {
                res.pipe(createWriteStream(filepath))
                    .on('error', reject)
                    .once('close', () => resolve(filepath));
            } else {
                res.resume();
                reject(new Error(`Request Failed With a Status Code: ${res.statusCode}`));
            }
        });
    });
};

async function downloadAllImages() {
    const baseDir = join(__dirname, 'src', 'assets', 'images');

    for (const [category, categoryImages] of Object.entries(images)) {
        const categoryDir = join(baseDir, category);

        // Ensure directory exists
        if (!existsSync(categoryDir)) {
            mkdirSync(categoryDir, { recursive: true });
        }

        for (const [filename, url] of Object.entries(categoryImages)) {
            const filepath = join(categoryDir, filename);
            try {
                await downloadImage(url, filepath);
                console.log(`Downloaded: ${filename}`);
            } catch (err) {
                console.error(`Error downloading ${filename}:`, err);
            }
        }
    }
}

downloadAllImages().then(() => {
    console.log('All images downloaded successfully!');
}).catch(err => {
    console.error('Error downloading images:', err);
}); 