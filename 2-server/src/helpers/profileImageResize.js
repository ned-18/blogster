const sharp = require('sharp');

exports.profileImageResize = async (req, fileName) => {
	const roundedCorners = Buffer.from('<svg><rect x="0" y="0" width="200" height="200" rx="50" ry="50"/></svg>');

	await sharp(req.file.buffer)
		.resize(220, 220, {
			kernel: sharp.kernel.nearest,
			fit: 'contain'
		})
		.composite([
			{
				input: roundedCorners,
				blend: 'dest-in'
			}
		])
		.png()
		.toFile(`src/uploads/images/${fileName}`);
};
