import React from 'react';
import {
  WebsiteIcon, GoogleDriveIcon, DropboxDriveIcon, CloudDriveIcon,
  NoResourceTypeIcon, DocumentFileIcon, WordDocumentFileIcon,
  SpreadsheetFileIcon, ExcelFileIcon, SlidesFileIcon, PowerpointFileIcon,
  ImageFileIcon, VideoFileIcon, AudioFileIcon, DirectoryIcon, ZipFileIcon,
  PDFFileIcon, JpgFileIcon, CodeRepositoryIcon, IllustratorFileIcon, PhotoshopFileIcon
} from '../Components/VisualUtilities/IconPresets';
import {
  WEBSITE, DOCUMENT_FILE, WORD_DOCUMENT_FILE, SPREADSHEET_FILE, EXCEL_FILE, SLIDES_FILE,
  POWERPOINT_FILE, IMAGE_FILE, VIDEO_FILE, AUDIO_FILE, GOOGLE_DRIVE, CLOUD_DRIVE,
  DIRECTORY, NO_RESOURCE_TYPE, ZIP_FILE, DROPBOX_DRIVE, PDF_FILE, JPG_FILE, CODE_REPOSITORY,
  ILLUSTRATOR_FILE, PHOTOSHOP_FILE
} from '../constants';
import { styleGuide } from '../StyleGuide/styleGuide';

const scanForPrimaryResourceType = (types?: string[]) => {

  if (!types) return NO_RESOURCE_TYPE;

  // -> Scan through array of resource types for a resource. Look at
  //    each resource type that comes through the loop and run them
  //    through a switch statement that returns a primary resource type
  //    that will correspond to a mapped icon to display for that element
  //    in the resource browser. This precedence is based on a custom
  //    preference and can be modified at will.
  for (let type of types) {
    switch (type) {
      case WORD_DOCUMENT_FILE: return WORD_DOCUMENT_FILE;
      case DOCUMENT_FILE: return DOCUMENT_FILE;
      case EXCEL_FILE: return EXCEL_FILE;
      case SPREADSHEET_FILE: return SPREADSHEET_FILE;
      case POWERPOINT_FILE: return POWERPOINT_FILE;
      case SLIDES_FILE: return SLIDES_FILE;
      case JPG_FILE: return JPG_FILE;
      case IMAGE_FILE: return IMAGE_FILE;
      case VIDEO_FILE: return VIDEO_FILE;
      case AUDIO_FILE: return AUDIO_FILE;
      case PDF_FILE: return PDF_FILE;
      case ZIP_FILE: return ZIP_FILE;
      case ILLUSTRATOR_FILE: return ILLUSTRATOR_FILE;
      case PHOTOSHOP_FILE: return PHOTOSHOP_FILE;
      case GOOGLE_DRIVE: return GOOGLE_DRIVE;
      case DROPBOX_DRIVE: return DROPBOX_DRIVE;
      case CLOUD_DRIVE: return CLOUD_DRIVE;
      case DIRECTORY: return DIRECTORY;
      case WEBSITE: return WEBSITE;
      case CODE_REPOSITORY: return CODE_REPOSITORY;
      default: return NO_RESOURCE_TYPE;
    }
  }
}

export const mapResourceTypeToResourceIcon = (
  types?: string[],
  size: number = styleGuide.styles.standardIconSize,
  color: string = styleGuide.palette.black
) => {
  let icon;
  const primaryResourceType = scanForPrimaryResourceType(types);

  switch (primaryResourceType) {
    case NO_RESOURCE_TYPE:
      icon = <NoResourceTypeIcon size={size} color={color} />;
      break;
    case WORD_DOCUMENT_FILE:
      icon = <WordDocumentFileIcon size={size} color={color} />;
      break;
    case DOCUMENT_FILE:
      icon = <DocumentFileIcon size={size} color={color} />;
      break;
    case EXCEL_FILE:
      icon = <ExcelFileIcon size={size} color={color} />;
      break;
    case SPREADSHEET_FILE:
      icon = <SpreadsheetFileIcon size={size} color={color} />;
      break;
    case POWERPOINT_FILE:
      icon = <PowerpointFileIcon size={size} color={color} />;
      break;
    case SLIDES_FILE:
      icon = <SlidesFileIcon size={size} color={color} />;
      break;
    case IMAGE_FILE:
      icon = <ImageFileIcon size={size} color={color} />;
      break;
    case VIDEO_FILE:
      icon = <VideoFileIcon size={size} color={color} />;
      break;
    case AUDIO_FILE:
      icon = <AudioFileIcon size={size} color={color} />;
      break;
    case PDF_FILE:
      icon = <PDFFileIcon size={size} color={color} />;
      break;
    case ZIP_FILE:
      icon = <ZipFileIcon size={size} color={color} />;
      break;
    case JPG_FILE:
      icon = <JpgFileIcon size={size} color={color} />;
      break;
    case ILLUSTRATOR_FILE:
      icon = <IllustratorFileIcon size={size} color={color} />
      break;
    case PHOTOSHOP_FILE:
      icon = <PhotoshopFileIcon size={size} color={color} />
      break;
    case GOOGLE_DRIVE:
      icon = <GoogleDriveIcon size={size - 5} color={color} />;
      break;
    case DROPBOX_DRIVE:
      icon = <DropboxDriveIcon size={size} color={color} />;
      break;
    case CLOUD_DRIVE:
      icon = <CloudDriveIcon size={size} color={color} />
      break;
    case DIRECTORY:
      icon = <DirectoryIcon size={size} color={color} />
      break;
    case WEBSITE:
      icon = <WebsiteIcon size={size - 5} color={color} />
      break;
    case CODE_REPOSITORY:
      icon = <CodeRepositoryIcon size={size} color={color} />
      break;
    default:
      icon = <NoResourceTypeIcon size={size} color={color} />
      break;
  }

  return icon;
}
