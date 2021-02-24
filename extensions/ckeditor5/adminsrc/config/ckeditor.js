module.exports = ({
    toolbar: {
		items: [
			'heading',
			'|',
			'bold',
			'italic',
			'underline',
			'link',
			'bulletedList',
			'numberedList',
			'imageInsert',
			'strapiMediaLib',
			'|',
			'alignment',
			'indent',
			'outdent',
			'|',
			'specialCharacters',
			'blockQuote',
			'insertTable',
			'mediaEmbed',
			'htmlEmbed',
			'horizontalLine',
			'|',
			'undo',
			'redo'
		]
	},
	image: {
		styles: [
			'alignLeft',
			'alignCenter',
			'alignRight'
		],
		resizeOptions: [
			{
				name: 'imageResize:original',
				value: null,
				icon: 'original'
			},
			{
				name: 'imageResize:50',
				value: '50',
				icon: 'medium'
			},
			{
				name: 'imageResize:75',
				value: '75',
				icon: 'large'
			}
		],
		toolbar: [
			'imageStyle:alignLeft',
			'imageStyle:alignCenter',
			'imageStyle:alignRight',
			'|',
			'imageTextAlternative',
			'|',
			'imageResize:50',
			'imageResize:75',
			'imageResize:original',
			'|',
			'linkImage'
		]
	},
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells'
		]
	},
	heading: {
		options: [
			{ model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
			{ model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
			{ model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
			{ model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' },
			{ model: 'heading4', view: 'h4', title: 'Heading 4', class: 'ck-heading_heading4' }
		]
	},
	htmlEmbed: {
		showPreviews: true
	},
	sanitizeHtml: (inputHtml) => {
        
		const outputHtml = sanitizeHtml(inputHtml, {
            allowedTags: sanitizeHtml.defaults.allowedTags.concat([ 'script' ])
          });
		return {
			html: outputHtml,
			hasChanged: true
		};
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en'
});