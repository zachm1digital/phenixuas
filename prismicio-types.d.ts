// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from '@prismicio/client';

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type MediaDocumentDataSlicesSlice = never;

/**
 * Content for Media documents
 */
interface MediaDocumentData {
  /**
   * Slice Zone field in *Media*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: media.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<MediaDocumentDataSlicesSlice>;
  /**
   * Meta Description field in *Media*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: media.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Media*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: media.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Media*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: media.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Media document from Prismic
 *
 * - **API ID**: `media`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type MediaDocument<Lang extends string = string> = prismic.PrismicDocumentWithoutUID<
  Simplify<MediaDocumentData>,
  'media',
  Lang
>;

/**
 * Content for Media Item documents
 */
interface MediaItemDocumentData {
  /**
   * Title field in *Media Item*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: media_item.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Subheading field in *Media Item*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: media_item.subheading
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  subheading: prismic.KeyTextField;

  /**
   * Content field in *Media Item*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: media_item.content
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;

  /**
   * Category field in *Media Item*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: media_item.category
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  category: prismic.SelectField<
    'Blog' | 'Press Release' | 'Gallery' | 'Youtube' | 'Instagram' | 'Linkedin' | 'Facebook'
  >;

  /**
   * Date field in *Media Item*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: media_item.date
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  date: prismic.DateField;

  /**
   * image field in *Media Item*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: media_item.image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Media Item document from Prismic
 *
 * - **API ID**: `media_item`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type MediaItemDocument<Lang extends string = string> = prismic.PrismicDocumentWithUID<
  Simplify<MediaItemDocumentData>,
  'media_item',
  Lang
>;

export type AllDocumentTypes = MediaDocument | MediaItemDocument;

/**
 * Default variation for Test Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TestSliceDefault = prismic.SharedSliceVariation<
  'default',
  Record<string, never>,
  never
>;

/**
 * Slice variation for *Test*
 */
type TestSliceVariation = TestSliceDefault;

/**
 * Test Shared Slice
 *
 * - **API ID**: `test`
 * - **Description**: Test
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TestSlice = prismic.SharedSlice<'test', TestSliceVariation>;

declare module '@prismicio/client' {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      MediaDocument,
      MediaDocumentData,
      MediaDocumentDataSlicesSlice,
      MediaItemDocument,
      MediaItemDocumentData,
      AllDocumentTypes,
      TestSlice,
      TestSliceVariation,
      TestSliceDefault
    };
  }
}