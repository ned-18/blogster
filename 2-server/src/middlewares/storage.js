const multer = require('multer');

const diskStorage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, 'src/uploads/images');
	},
	filename: (req, file, cb) => {
		const name = 'image';
		const mimeType = file.mimetype.split('/');
		const fileType = mimeType[1];
		const fileName = Date.now() + '-' + name + '.' + fileType;
		cb(null, fileName);
	},
	limits: {
		fileSize: 1000000
	}
});

const fileFilter = (req, file, cb) => {
	const allowedMimeTypes = ['image/png', 'image/jpeg', 'image/jpg'];
	allowedMimeTypes.includes(file.mimetype) ? cb(null, true) : cb('File is not supported!', false);
};

exports.storage = multer({ storage: diskStorage, fileFilter }).single('imageUrl');

exports.profileStorage = multer({ storage: multer.memoryStorage(), fileFilter }).single('imageUrl');
