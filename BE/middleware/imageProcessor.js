const Sharp = require('sharp');

const processImage = async (req, res, next) => {
    try {
        if (!req.body.image) {
            return next();
        }

        // Kiểm tra nếu là base64 image
        if (req.body.image.startsWith('data:image')) {
            // Tách phần dữ liệu base64 từ string
            const base64Data = req.body.image.split(';base64,').pop();

            // Convert base64 thành buffer
            const imageBuffer = Buffer.from(base64Data, 'base64');

            // Xử lý ảnh với Sharp
            const processedImageBuffer = await Sharp(imageBuffer)
                .resize(800, 800, { // Giới hạn kích thước tối đa
                    fit: 'inside',
                    withoutEnlargement: true
                })
                .jpeg({ quality: 80 }) // Nén ảnh với chất lượng 80%
                .toBuffer();

            // Convert buffer trở lại base64
            const optimizedBase64 = `data:image/jpeg;base64,${processedImageBuffer.toString('base64')}`;

            // Cập nhật image trong request body
            req.body.image = optimizedBase64;
        }
        next();
    } catch (error) {
        console.error('Image processing error:', error);
        return res.status(400).json({
            success: false,
            message: 'Error processing image'
        });
    }
};

module.exports = { processImage }; 