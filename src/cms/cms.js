import CMS from 'netlify-cms-app';
import uploadcare from 'netlify-cms-media-library-uploadcare';
import cloudinary from 'netlify-cms-media-library-cloudinary';

import BlogPostPreview from './preview-templates/BlogPostPreview';
import IndexPagePreview from './preview-templates/IndexPagePreview';
import TemplatePagePreview from './preview-templates/TemplatePagePreview';

CMS.registerMediaLibrary(uploadcare); 
CMS.registerMediaLibrary(cloudinary);

// Note about .registerPreviewTemplate('name', component)
// Make sure that the 'name' argument matches the collections 'name' field in the cms config.yml file
// Otherwise, the preview template won't register

CMS.registerPreviewTemplate('index', IndexPagePreview);
CMS.registerPreviewTemplate('template-pages', TemplatePagePreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);
