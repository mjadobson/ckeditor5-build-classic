/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

import VetReviseEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import EssentialsPlugin from '@ckeditor/ckeditor5-essentials/src/essentials';
import AutoformatPlugin from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import BoldPlugin from '@ckeditor/ckeditor5-basic-styles/src/bold';
import ItalicPlugin from '@ckeditor/ckeditor5-basic-styles/src/italic';
import UnderlinePlugin from '@ckeditor/ckeditor5-basic-styles/src/underline';
import S3uploadPlugin from 'ckeditor5-sss-upload/src/s3upload';
import IndexPlugin from 'ckeditor5-super-sub/index';
import ImagePlugin from '@ckeditor/ckeditor5-image/src/image';
import ImageuploadPlugin from '@ckeditor/ckeditor5-image/src/imageupload';
import LinkPlugin from '@ckeditor/ckeditor5-link/src/link';
import ListPlugin from '@ckeditor/ckeditor5-list/src/list';
import ParagraphPlugin from '@ckeditor/ckeditor5-paragraph/src/paragraph';

export default class VetReviseEditor extends VetReviseEditorBase {}

VetReviseEditor.build = {
	plugins: [
		EssentialsPlugin,
		AutoformatPlugin,
		BoldPlugin,
		ItalicPlugin,
		UnderlinePlugin,
		S3uploadPlugin,
		IndexPlugin,
		ImagePlugin,
		ImageuploadPlugin,
		LinkPlugin,
		ListPlugin,
		ParagraphPlugin
	],
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
		language: 'en'
	}
};
