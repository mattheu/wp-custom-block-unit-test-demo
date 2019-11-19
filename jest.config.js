module.exports = {
	setupFiles: [
		'./jest.setup.js',
	],
	moduleNameMapper: {
		// Mock file and style imports.
		'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
		'\\.(css|scss)$': '<rootDir>/__mocks__/styleMock.js',
		// Mock all wordpress dependencies that actually externals.
		'\\@wordpress/(.+)$': '<rootDir>/__mocks__/@wordpress/$1.js',
	},
};
