/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

'use strict';

module.exports = {
	// The editor creator to use.
	editor: '@ckeditor/ckeditor5-editor-classic/src/classiceditor',

	// The name under which the editor will be exported.
	moduleName: 'VetReviseEditor',

	// Plugins to include in the build.
	plugins: [
		'@ckeditor/ckeditor5-essentials/src/essentials',
		'@ckeditor/ckeditor5-autoformat/src/autoformat',
		'@ckeditor/ckeditor5-basic-styles/src/bold',
		'@ckeditor/ckeditor5-basic-styles/src/italic',
		'@ckeditor/ckeditor5-basic-styles/src/underline',
		'ckeditor5-sss-upload/src/s3upload',
		'ckeditor5-super-sub/index',
		'@ckeditor/ckeditor5-image/src/image',
		'@ckeditor/ckeditor5-image/src/imageupload',
		'@ckeditor/ckeditor5-link/src/link',
		'@ckeditor/ckeditor5-list/src/list',
		'@ckeditor/ckeditor5-paragraph/src/paragraph'
	],

	// Editor config.
	config: {
		toolbar: {
			items: [
				'bold',
				'italic',
				'underline',
				'super',
				'sub',
				'link',
				'bulletedList',
				'numberedList',
				'imageUpload',
				'|',
				'undo',
				'redo'
			]
		},

		// UI language. Language codes follow the https://en.wikipedia.org/wiki/ISO_639-1 format.
		language: 'en'
	}
};
