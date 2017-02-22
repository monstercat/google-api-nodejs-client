/**
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* jshint maxlen: false */

'use strict';

var createAPIRequest = require('../../lib/apirequest');
var utils = require('../../lib/utils');

/**
 * Youtube Content ID API
 *
 * API for YouTube partners. To use this API YouTube CMS account is required.
 *
 * @example
 * var google = require('googleapis');
 * var youtubePartner = google.youtubePartner('v1');
 *
 * @namespace youtubePartner
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Youtubepartner
 */
function Youtubepartner(options) { // eslint-disable-line
  var self = this;
  self._options = options || {};

  self.assetLabels = {

    /**
     * youtubePartner.assetLabels.insert
     *
     * @desc Insert an asset label for an owner.
     *
     * @alias youtubePartner.assetLabels.insert
     * @memberOf! youtubePartner(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     * @param {youtubePartner(v1).AssetLabel} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/youtube/partner/v1/assetLabels',
          method: 'POST'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * youtubePartner.assetLabels.list
     *
     * @desc Retrieves a list of all asset labels for an owner.
     *
     * @alias youtubePartner.assetLabels.list
     * @memberOf! youtubePartner(v1)
     *
     * @param {object=} params Parameters for request
     * @param {string=} params.labelPrefix The labelPrefix parameter identifies the prefix of asset labels to retrieve.
     * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     * @param {string=} params.q The q parameter specifies the query string to use to filter search results. YouTube searches for the query string in the labelName field of asset labels.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/youtube/partner/v1/assetLabels',
          method: 'GET'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.assetMatchPolicy = {

    /**
     * youtubePartner.assetMatchPolicy.get
     *
     * @desc Retrieves the match policy assigned to the specified asset by the content owner associated with the authenticated user. This information is only accessible to an owner of the asset.
     *
     * @alias youtubePartner.assetMatchPolicy.get
     * @memberOf! youtubePartner(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.assetId The assetId parameter specifies the YouTube asset ID of the asset for which you are retrieving the match policy.
     * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/youtube/partner/v1/assets/{assetId}/matchPolicy',
          method: 'GET'
        }, options),
        params: params,
        requiredParams: ['assetId'],
        pathParams: ['assetId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * youtubePartner.assetMatchPolicy.patch
     *
     * @desc Updates the asset's match policy. If an asset has multiple owners, each owner may set its own match policy for the asset. YouTube then computes the match policy that is actually applied for the asset based on the territories where each owner owns the asset. This method supports patch semantics.
     *
     * @alias youtubePartner.assetMatchPolicy.patch
     * @memberOf! youtubePartner(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.assetId The assetId parameter specifies the YouTube asset ID of the asset for which you are retrieving the match policy.
     * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     * @param {youtubePartner(v1).AssetMatchPolicy} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/youtube/partner/v1/assets/{assetId}/matchPolicy',
          method: 'PATCH'
        }, options),
        params: params,
        requiredParams: ['assetId'],
        pathParams: ['assetId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * youtubePartner.assetMatchPolicy.update
     *
     * @desc Updates the asset's match policy. If an asset has multiple owners, each owner may set its own match policy for the asset. YouTube then computes the match policy that is actually applied for the asset based on the territories where each owner owns the asset.
     *
     * @alias youtubePartner.assetMatchPolicy.update
     * @memberOf! youtubePartner(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.assetId The assetId parameter specifies the YouTube asset ID of the asset for which you are retrieving the match policy.
     * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     * @param {youtubePartner(v1).AssetMatchPolicy} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/youtube/partner/v1/assets/{assetId}/matchPolicy',
          method: 'PUT'
        }, options),
        params: params,
        requiredParams: ['assetId'],
        pathParams: ['assetId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.assetRelationships = {

    /**
     * youtubePartner.assetRelationships.delete
     *
     * @desc Deletes a relationship between two assets.
     *
     * @alias youtubePartner.assetRelationships.delete
     * @memberOf! youtubePartner(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.assetRelationshipId The assetRelationshipId parameter specifies a value that uniquely identifies the relationship you are deleting.
     * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/youtube/partner/v1/assetRelationships/{assetRelationshipId}',
          method: 'DELETE'
        }, options),
        params: params,
        requiredParams: ['assetRelationshipId'],
        pathParams: ['assetRelationshipId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * youtubePartner.assetRelationships.insert
     *
     * @desc Creates a relationship that links two assets.
     *
     * @alias youtubePartner.assetRelationships.insert
     * @memberOf! youtubePartner(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     * @param {youtubePartner(v1).AssetRelationship} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/youtube/partner/v1/assetRelationships',
          method: 'POST'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * youtubePartner.assetRelationships.list
     *
     * @desc Retrieves a list of relationships for a given asset. The list contains relationships where the specified asset is either the parent (embedding) or child (embedded) asset in the relationship.
     *
     * @alias youtubePartner.assetRelationships.list
     * @memberOf! youtubePartner(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.assetId The assetId parameter specifies the asset ID of the asset for which you are retrieving relationships.
     * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     * @param {string=} params.pageToken The pageToken parameter specifies a token that identifies a particular page of results to return. Set this parameter to the value of the nextPageToken value from the previous API response to retrieve the next page of search results.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/youtube/partner/v1/assetRelationships',
          method: 'GET'
        }, options),
        params: params,
        requiredParams: ['assetId'],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.assetSearch = {

    /**
     * youtubePartner.assetSearch.list
     *
     * @desc Searches for assets based on asset metadata. The method can retrieve all assets or only assets owned by the content owner. This method mimics the functionality of the advanced search feature on the Assets page in CMS.
     *
     * @alias youtubePartner.assetSearch.list
     * @memberOf! youtubePartner(v1)
     *
     * @param {object=} params Parameters for request
     * @param {string=} params.createdAfter The createdAfter parameter restricts the set of returned assets to ones originally created on or after the specified datetime. For example: 2015-01-29T23:00:00Z
     * @param {string=} params.createdBefore The createdBefore parameter restricts the set of returned assets to ones originally created on or before the specified datetime. For example: 2015-01-29T23:00:00Z
     * @param {boolean=} params.hasConflicts The hasConflicts parameter enables you to only retrieve assets that have ownership conflicts. The only valid value is true. Setting the parameter value to false does not affect the results.
     * @param {boolean=} params.includeAnyProvidedlabel If includeAnyProvidedlabel parameter is set to true, will search for assets that contain any of the provided labels; else will search for assets that contain all the provided labels.
     * @param {string=} params.isrcs A comma-separated list of up to 50 ISRCs. If you specify a value for this parameter, the API server ignores any values set for the following parameters: q, includeAnyProvidedLabel, hasConflicts, labels, metadataSearchFields, sort, and type.
     * @param {string=} params.labels The labels parameter specifies the assets with certain asset labels that you want to retrieve. The parameter value is a comma-separated list of asset labels.
     * @param {string=} params.metadataSearchFields The metadataSearchField parameter specifies which metadata fields to search by. It is a comma-separated list of metadata field and value pairs connected by colon(:). For example: customId:my_custom_id,artist:Dandexx
     * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     * @param {string=} params.ownershipRestriction The ownershipRestriction parameter specifies the ownership filtering option for the search. By default the search is performed in the assets owned by currently authenticated user only.
     * @param {string=} params.pageToken The pageToken parameter specifies a token that identifies a particular page of results to return. Set this parameter to the value of the nextPageToken value from the previous API response to retrieve the next page of search results.
     * @param {string=} params.q YouTube searches within the id, type, and customId fields for all assets as well as in numerous other metadata fields – such as actor, album, director, isrc, and tmsId – that vary for different types of assets (movies, music videos, etc.).
     * @param {string=} params.sort The sort parameter specifies how the search results should be sorted. Note that results are always sorted in descending order.
     * @param {string=} params.type The type parameter specifies the types of assets that you want to retrieve. The parameter value is a comma-separated list of asset types.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/youtube/partner/v1/assetSearch',
          method: 'GET'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.assetShares = {

    /**
     * youtubePartner.assetShares.list
     *
     * @desc This method either retrieves a list of asset shares the partner owns and that map to a specified asset view ID or it retrieves a list of asset views associated with a specified asset share ID owned by the partner.
     *
     * @alias youtubePartner.assetShares.list
     * @memberOf! youtubePartner(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.assetId The assetId parameter specifies the asset ID for which you are retrieving data. The parameter can be an asset view ID or an asset share ID.  - If the value is an asset view ID, the API response identifies any asset share ids mapped to the asset view. - If the value is an asset share ID, the API response identifies any asset view ids that maps to that asset share.
     * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     * @param {string=} params.pageToken The pageToken parameter specifies a token that identifies a particular page of results to return. Set this parameter to the value of the nextPageToken value from the previous API response to retrieve the next page of search results.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/youtube/partner/v1/assetShares',
          method: 'GET'
        }, options),
        params: params,
        requiredParams: ['assetId'],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.assets = {

    /**
     * youtubePartner.assets.get
     *
     * @desc Retrieves the metadata for the specified asset. Note that if the request identifies an asset that has been merged with another asset, meaning that YouTube identified the requested asset as a duplicate, then the request retrieves the merged, or synthesized, asset.
     *
     * @alias youtubePartner.assets.get
     * @memberOf! youtubePartner(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.assetId The assetId parameter specifies the YouTube asset ID of the asset being retrieved.
     * @param {string=} params.fetchMatchPolicy The fetchMatchPolicy parameter specifies the version of the asset's match policy that should be returned in the API response.
     * @param {string=} params.fetchMetadata The fetchMetadata parameter specifies the version of the asset's metadata that should be returned in the API response. In some cases, YouTube receives metadata for an asset from multiple sources, such as when different partners own the asset in different territories.
     * @param {string=} params.fetchOwnership The fetchOwnership parameter specifies the version of the asset's ownership data that should be returned in the API response. As with asset metadata, YouTube can receive asset ownership data from multiple sources.
     * @param {boolean=} params.fetchOwnershipConflicts The fetchOwnershipConflicts parameter allows you to retrieve information about ownership conflicts.
     * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/youtube/partner/v1/assets/{assetId}',
          method: 'GET'
        }, options),
        params: params,
        requiredParams: ['assetId'],
        pathParams: ['assetId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * youtubePartner.assets.insert
     *
     * @desc Inserts an asset with the specified metadata. After inserting an asset, you can set its ownership data and match policy.
     *
     * @alias youtubePartner.assets.insert
     * @memberOf! youtubePartner(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     * @param {youtubePartner(v1).Asset} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/youtube/partner/v1/assets',
          method: 'POST'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * youtubePartner.assets.list
     *
     * @desc Retrieves a list of assets based on asset metadata. The method can retrieve all assets or only assets owned by the content owner.  Note that in cases where duplicate assets have been merged, the API response only contains the synthesized asset. (It does not contain the constituent assets that were merged into the synthesized asset.)
     *
     * @alias youtubePartner.assets.list
     * @memberOf! youtubePartner(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.fetchMatchPolicy The fetchMatchPolicy parameter specifies the version of the asset's match policy that should be returned in the API response.
     * @param {string=} params.fetchMetadata The fetchMetadata parameter specifies the version of the asset's metadata that should be returned in the API response. In some cases, YouTube receives metadata for an asset from multiple sources, such as when different partners own the asset in different territories.
     * @param {string=} params.fetchOwnership The fetchOwnership parameter specifies the version of the asset's ownership data that should be returned in the API response. As with asset metadata, YouTube can receive asset ownership data from multiple sources.
     * @param {boolean=} params.fetchOwnershipConflicts The fetchOwnershipConflicts parameter allows you to retrieve information about ownership conflicts.
     * @param {string} params.id The id parameter specifies a comma-separated list of YouTube Asset IDs that identify the assets you want to retrieve. As noted in the method description, if you try to retrieve an asset that YouTube identified as a duplicate and merged with another asset, the API response only returns the synthesized asset. In that case, the aliasId property in the asset resource specifies a list of other asset IDs that can be used to identify that asset.  Also note that the API response does not contain duplicates. As such, if your request identifies three asset IDs, and all of those have been merged into a single asset, then the API response identifies one matching asset.
     * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/youtube/partner/v1/assets',
          method: 'GET'
        }, options),
        params: params,
        requiredParams: ['id'],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * youtubePartner.assets.patch
     *
     * @desc Updates the metadata for the specified asset. This method supports patch semantics.
     *
     * @alias youtubePartner.assets.patch
     * @memberOf! youtubePartner(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.assetId The assetId parameter specifies the YouTube asset ID of the asset being updated.
     * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     * @param {youtubePartner(v1).Asset} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/youtube/partner/v1/assets/{assetId}',
          method: 'PATCH'
        }, options),
        params: params,
        requiredParams: ['assetId'],
        pathParams: ['assetId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * youtubePartner.assets.update
     *
     * @desc Updates the metadata for the specified asset.
     *
     * @alias youtubePartner.assets.update
     * @memberOf! youtubePartner(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.assetId The assetId parameter specifies the YouTube asset ID of the asset being updated.
     * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     * @param {youtubePartner(v1).Asset} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/youtube/partner/v1/assets/{assetId}',
          method: 'PUT'
        }, options),
        params: params,
        requiredParams: ['assetId'],
        pathParams: ['assetId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.campaigns = {

    /**
     * youtubePartner.campaigns.delete
     *
     * @desc Deletes a specified campaign for an owner.
     *
     * @alias youtubePartner.campaigns.delete
     * @memberOf! youtubePartner(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.campaignId The campaignId parameter specifies the YouTube campaign ID of the campaign being deleted.
     * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/youtube/partner/v1/campaigns/{campaignId}',
          method: 'DELETE'
        }, options),
        params: params,
        requiredParams: ['campaignId'],
        pathParams: ['campaignId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * youtubePartner.campaigns.get
     *
     * @desc Retrieves a particular campaign for an owner.
     *
     * @alias youtubePartner.campaigns.get
     * @memberOf! youtubePartner(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.campaignId The campaignId parameter specifies the YouTube campaign ID of the campaign being retrieved.
     * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/youtube/partner/v1/campaigns/{campaignId}',
          method: 'GET'
        }, options),
        params: params,
        requiredParams: ['campaignId'],
        pathParams: ['campaignId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * youtubePartner.campaigns.insert
     *
     * @desc Insert a new campaign for an owner using the specified campaign data.
     *
     * @alias youtubePartner.campaigns.insert
     * @memberOf! youtubePartner(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     * @param {youtubePartner(v1).Campaign} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/youtube/partner/v1/campaigns',
          method: 'POST'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * youtubePartner.campaigns.list
     *
     * @desc Retrieves a list of campaigns for an owner.
     *
     * @alias youtubePartner.campaigns.list
     * @memberOf! youtubePartner(v1)
     *
     * @param {object=} params Parameters for request
     * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     * @param {string=} params.pageToken The pageToken parameter specifies a token that identifies a particular page of results to return. For example, set this parameter to the value of the nextPageToken value from the previous API response to retrieve the next page of search results.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/youtube/partner/v1/campaigns',
          method: 'GET'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * youtubePartner.campaigns.patch
     *
     * @desc Update the data for a specific campaign. This method supports patch semantics.
     *
     * @alias youtubePartner.campaigns.patch
     * @memberOf! youtubePartner(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.campaignId The campaignId parameter specifies the YouTube campaign ID of the campaign being retrieved.
     * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     * @param {youtubePartner(v1).Campaign} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/youtube/partner/v1/campaigns/{campaignId}',
          method: 'PATCH'
        }, options),
        params: params,
        requiredParams: ['campaignId'],
        pathParams: ['campaignId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * youtubePartner.campaigns.update
     *
     * @desc Update the data for a specific campaign.
     *
     * @alias youtubePartner.campaigns.update
     * @memberOf! youtubePartner(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.campaignId The campaignId parameter specifies the YouTube campaign ID of the campaign being retrieved.
     * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     * @param {youtubePartner(v1).Campaign} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/youtube/partner/v1/campaigns/{campaignId}',
          method: 'PUT'
        }, options),
        params: params,
        requiredParams: ['campaignId'],
        pathParams: ['campaignId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.claimHistory = {

    /**
     * youtubePartner.claimHistory.get
     *
     * @desc Retrieves the claim history for a specified claim.
     *
     * @alias youtubePartner.claimHistory.get
     * @memberOf! youtubePartner(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.claimId The claimId parameter specifies the YouTube claim ID of the claim for which you are retrieving the claim history.
     * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/youtube/partner/v1/claimHistory/{claimId}',
          method: 'GET'
        }, options),
        params: params,
        requiredParams: ['claimId'],
        pathParams: ['claimId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.claimSearch = {

    /**
     * youtubePartner.claimSearch.list
     *
     * @desc Retrieves a list of claims that match the search criteria. You can search for claims that are associated with a specific asset or video or that match a specified query string.
     *
     * @alias youtubePartner.claimSearch.list
     * @memberOf! youtubePartner(v1)
     *
     * @param {object=} params Parameters for request
     * @param {string=} params.assetId The assetId parameter specifies the YouTube asset ID of the asset for which you are retrieving claims.
     * @param {string=} params.contentType The contentType parameter specifies the content type of claims that you want to retrieve.
     * @param {string=} params.createdAfter The createdAfter parameter allows you to restrict the set of returned claims to ones created on or after the specified date (inclusive).
     * @param {string=} params.createdBefore The createdBefore parameter allows you to restrict the set of returned claims to ones created before the specified date (exclusive).
     * @param {string=} params.inactiveReasons The inactiveReasons parameter allows you to specify what kind of inactive claims you want to find based on the reasons why the claims became inactive.
     * @param {boolean=} params.includeThirdPartyClaims Used along with the videoId parameter this parameter determines whether or not to include third party claims in the search results.
     * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     * @param {string=} params.origin The origin parameter specifies the origins you want to find claims for. It is a comma-separated list of origin values.
     * @param {string=} params.pageToken The pageToken parameter specifies a token that identifies a particular page of results to return. For example, set this parameter to the value of the nextPageToken value from the previous API response to retrieve the next page of search results.
     * @param {boolean=} params.partnerUploaded The partnerUploaded parameter specifies whether you want to filter your search results to only partner uploaded or non partner uploaded claims.
     * @param {string=} params.q The q parameter specifies the query string to use to filter search results. YouTube searches for the query string in the following claim fields: video_title, video_keywords, user_name, isrc, iswc, grid, custom_id, and in the content owner's email address.
     * @param {string=} params.referenceId The referenceId parameter specifies the YouTube reference ID of the reference for which you are retrieving claims.
     * @param {string=} params.sort The sort parameter specifies the method that will be used to order resources in the API response. The default value is date. However, if the status parameter value is either appealed, disputed, pending, potential, or routedForReview, then results will be sorted by the time that the claim review period expires.
     * @param {string=} params.status The status parameter restricts your results to only claims in the specified status.
     * @param {string=} params.statusModifiedAfter The statusModifiedAfter parameter allows you to restrict the result set to only include claims that have had their status modified on or after the specified date (inclusive). The date specified must be on or after June 30, 2016 (2016-06-30). The parameter value's format is YYYY-MM-DD.
     * @param {string=} params.statusModifiedBefore The statusModifiedBefore parameter allows you to restrict the result set to only include claims that have had their status modified before the specified date (exclusive). The date specified must be on or after July 1, 2016 (2016-07-01). The parameter value's format is YYYY-MM-DD.
     * @param {string=} params.videoId The videoId parameter specifies comma-separated list of YouTube video IDs for which you are retrieving claims.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/youtube/partner/v1/claimSearch',
          method: 'GET'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.claims = {

    /**
     * youtubePartner.claims.get
     *
     * @desc Retrieves a specific claim by ID.
     *
     * @alias youtubePartner.claims.get
     * @memberOf! youtubePartner(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.claimId The claimId parameter specifies the claim ID of the claim being retrieved.
     * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/youtube/partner/v1/claims/{claimId}',
          method: 'GET'
        }, options),
        params: params,
        requiredParams: ['claimId'],
        pathParams: ['claimId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * youtubePartner.claims.insert
     *
     * @desc Creates a claim. The video being claimed must have been uploaded to a channel associated with the same content owner as the API user sending the request. You can set the claim's policy in any of the following ways: - Use the claim resource's policy property to identify a saved policy by its unique ID. - Use the claim resource's policy property to specify a custom set of rules.
     *
     * @alias youtubePartner.claims.insert
     * @memberOf! youtubePartner(v1)
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.isManualClaim restricted
     * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     * @param {youtubePartner(v1).Claim} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/youtube/partner/v1/claims',
          method: 'POST'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * youtubePartner.claims.list
     *
     * @desc Retrieves a list of claims administered by the content owner associated with the currently authenticated user. Results are sorted in descending order of creation time.
     *
     * @alias youtubePartner.claims.list
     * @memberOf! youtubePartner(v1)
     *
     * @param {object=} params Parameters for request
     * @param {string=} params.assetId Use the claimSearch.list method's assetId parameter to search for claim snippets by asset ID. You can then retrieve the claim resources for those claims by using this method's id parameter to specify a comma-separated list of claim IDs.
     * @param {string=} params.id The id parameter specifies a list of comma-separated YouTube claim IDs to retrieve.
     * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     * @param {string=} params.pageToken The pageToken parameter specifies a token that identifies a particular page of results to return. For example, set this parameter to the value of the nextPageToken value from the previous API response to retrieve the next page of search results.
     * @param {string=} params.q Use the claimSearch.list method's q parameter to search for claim snippets that match a particular query string. You can then retrieve the claim resources for those claims by using this method's id parameter to specify a comma-separated list of claim IDs.
     * @param {string=} params.videoId Use the claimSearch.list method's videoId parameter to search for claim snippets by video ID. You can then retrieve the claim resources for those claims by using this method's id parameter to specify a comma-separated list of claim IDs.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/youtube/partner/v1/claims',
          method: 'GET'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * youtubePartner.claims.patch
     *
     * @desc Updates an existing claim by either changing its policy or its status. You can update a claim's status from active to inactive to effectively release the claim. This method supports patch semantics.
     *
     * @alias youtubePartner.claims.patch
     * @memberOf! youtubePartner(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.claimId The claimId parameter specifies the claim ID of the claim being updated.
     * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     * @param {youtubePartner(v1).Claim} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/youtube/partner/v1/claims/{claimId}',
          method: 'PATCH'
        }, options),
        params: params,
        requiredParams: ['claimId'],
        pathParams: ['claimId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * youtubePartner.claims.update
     *
     * @desc Updates an existing claim by either changing its policy or its status. You can update a claim's status from active to inactive to effectively release the claim.
     *
     * @alias youtubePartner.claims.update
     * @memberOf! youtubePartner(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.claimId The claimId parameter specifies the claim ID of the claim being updated.
     * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     * @param {youtubePartner(v1).Claim} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/youtube/partner/v1/claims/{claimId}',
          method: 'PUT'
        }, options),
        params: params,
        requiredParams: ['claimId'],
        pathParams: ['claimId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.contentOwnerAdvertisingOptions = {

    /**
     * youtubePartner.contentOwnerAdvertisingOptions.get
     *
     * @desc Retrieves advertising options for the content owner associated with the authenticated user.
     *
     * @alias youtubePartner.contentOwnerAdvertisingOptions.get
     * @memberOf! youtubePartner(v1)
     *
     * @param {object=} params Parameters for request
     * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/youtube/partner/v1/contentOwnerAdvertisingOptions',
          method: 'GET'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * youtubePartner.contentOwnerAdvertisingOptions.patch
     *
     * @desc Updates advertising options for the content owner associated with the authenticated API user. This method supports patch semantics.
     *
     * @alias youtubePartner.contentOwnerAdvertisingOptions.patch
     * @memberOf! youtubePartner(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     * @param {youtubePartner(v1).ContentOwnerAdvertisingOption} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/youtube/partner/v1/contentOwnerAdvertisingOptions',
          method: 'PATCH'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * youtubePartner.contentOwnerAdvertisingOptions.update
     *
     * @desc Updates advertising options for the content owner associated with the authenticated API user.
     *
     * @alias youtubePartner.contentOwnerAdvertisingOptions.update
     * @memberOf! youtubePartner(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     * @param {youtubePartner(v1).ContentOwnerAdvertisingOption} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/youtube/partner/v1/contentOwnerAdvertisingOptions',
          method: 'PUT'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.contentOwners = {

    /**
     * youtubePartner.contentOwners.get
     *
     * @desc Retrieves information about the specified content owner.
     *
     * @alias youtubePartner.contentOwners.get
     * @memberOf! youtubePartner(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.contentOwnerId The contentOwnerId parameter specifies a value that uniquely identifies the content owner.
     * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/youtube/partner/v1/contentOwners/{contentOwnerId}',
          method: 'GET'
        }, options),
        params: params,
        requiredParams: ['contentOwnerId'],
        pathParams: ['contentOwnerId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * youtubePartner.contentOwners.list
     *
     * @desc Retrieves a list of content owners that match the request criteria.
     *
     * @alias youtubePartner.contentOwners.list
     * @memberOf! youtubePartner(v1)
     *
     * @param {object=} params Parameters for request
     * @param {boolean=} params.fetchMine The fetchMine parameter restricts the result set to content owners associated with the currently authenticated API user.
     * @param {string=} params.id The id parameter specifies a comma-separated list of YouTube content owner IDs to retrieve.
     * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/youtube/partner/v1/contentOwners',
          method: 'GET'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.liveCuepoints = {

    /**
     * youtubePartner.liveCuepoints.insert
     *
     * @desc Inserts a cuepoint into a live broadcast.
     *
     * @alias youtubePartner.liveCuepoints.insert
     * @memberOf! youtubePartner(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.channelId The channelId parameter identifies the channel that owns the broadcast into which the cuepoint is being inserted.
     * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners. You can obtain the content owner ID that will serve as the parameter value by calling the YouTube Content ID API's contentOwners.list method.
     * @param {youtubePartner(v1).LiveCuepoint} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/youtube/partner/v1/liveCuepoints',
          method: 'POST'
        }, options),
        params: params,
        requiredParams: ['channelId'],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.metadataHistory = {

    /**
     * youtubePartner.metadataHistory.list
     *
     * @desc Retrieves a list of all metadata provided for an asset, regardless of which content owner provided the data.
     *
     * @alias youtubePartner.metadataHistory.list
     * @memberOf! youtubePartner(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.assetId The assetId parameter specifies the YouTube asset ID of the asset for which you are retrieving a metadata history.
     * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/youtube/partner/v1/metadataHistory',
          method: 'GET'
        }, options),
        params: params,
        requiredParams: ['assetId'],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.orders = {

    /**
     * youtubePartner.orders.delete
     *
     * @desc Delete an order, which moves orders to inactive state and removes any associated video.
     *
     * @alias youtubePartner.orders.delete
     * @memberOf! youtubePartner(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.onBehalfOfContentOwner ContentOwnerId that super admin acts in behalf of.
     * @param {string} params.orderId Id of the order to delete.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/youtube/partner/v1/orders/{orderId}',
          method: 'DELETE'
        }, options),
        params: params,
        requiredParams: ['orderId'],
        pathParams: ['orderId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * youtubePartner.orders.get
     *
     * @desc Retrieve the details of an existing order.
     *
     * @alias youtubePartner.orders.get
     * @memberOf! youtubePartner(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.onBehalfOfContentOwner ContentOnwerId that super admin acts in behalf of.
     * @param {string} params.orderId The id of the order.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/youtube/partner/v1/orders/{orderId}',
          method: 'GET'
        }, options),
        params: params,
        requiredParams: ['orderId'],
        pathParams: ['orderId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * youtubePartner.orders.insert
     *
     * @desc Creates a new basic order entry in the YouTube premium asset order management system. You must supply at least a country and channel in the new order.
     *
     * @alias youtubePartner.orders.insert
     * @memberOf! youtubePartner(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.onBehalfOfContentOwner ContentOnwerId that super admin acts in behalf of.
     * @param {youtubePartner(v1).Order} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/youtube/partner/v1/orders',
          method: 'POST'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * youtubePartner.orders.list
     *
     * @desc Return a list of orders, filtered by the parameters below, may return more than a single page of results.
     *
     * @alias youtubePartner.orders.list
     * @memberOf! youtubePartner(v1)
     *
     * @param {object=} params Parameters for request
     * @param {string=} params.channelId Filter results to only a specific channel ( use encrypted ID).
     * @param {string=} params.contentType Filter the results by type, possible values are SHOW or MOVIE.
     * @param {string=} params.country Filter results by country, two letter ISO country codes are used.
     * @param {string=} params.customId Filter result by orders that have this custom ID.
     * @param {string=} params.onBehalfOfContentOwner ContentOnwerId that super admin acts in behalf of.
     * @param {string=} params.pageToken The continuation token is an optional value that is only used to page through large result sets.  - To retrieve the next page of results for a request, set this parameter to the value of the nextPageToken value from the previous response. - To get the previous page of results, set this parameter to the value of the previousPageToken value from the previous response.
     * @param {string=} params.priority Filter results by priority. P0, P1, P2, P3 and P4 are the acceptable options.
     * @param {string=} params.productionHouse Filter results by a particular production house. Specified by the name of the production house.
     * @param {string=} params.q Filter results to only orders that contain this string in the title.
     * @param {string=} params.status Filter results to have this status, available options are STATUS_AVAILED, STATUS_ORDERED, STATUS_RECEIVED, STATUS_READY_FOR_QC, STATUS_MOC_FIX, STATUS_PARTNER_FIX, STATUS_YOUTUBE_FIX, STATUS_QC_APPROVED, STATUS_INACTIVE, STATUS_INGESTION_COMPLETE, STATUS_REORDERED
     * @param {string=} params.videoId Filter results to orders that are associated with this YouTube external video id.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/youtube/partner/v1/orders',
          method: 'GET'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * youtubePartner.orders.patch
     *
     * @desc Update the values in an existing order. This method supports patch semantics.
     *
     * @alias youtubePartner.orders.patch
     * @memberOf! youtubePartner(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.onBehalfOfContentOwner ContentOwnerId that super admin acts in behalf of.
     * @param {string} params.orderId The id of the order.
     * @param {youtubePartner(v1).Order} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/youtube/partner/v1/orders/{orderId}',
          method: 'PATCH'
        }, options),
        params: params,
        requiredParams: ['orderId'],
        pathParams: ['orderId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * youtubePartner.orders.update
     *
     * @desc Update the values in an existing order.
     *
     * @alias youtubePartner.orders.update
     * @memberOf! youtubePartner(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.onBehalfOfContentOwner ContentOwnerId that super admin acts in behalf of.
     * @param {string} params.orderId The id of the order.
     * @param {youtubePartner(v1).Order} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/youtube/partner/v1/orders/{orderId}',
          method: 'PUT'
        }, options),
        params: params,
        requiredParams: ['orderId'],
        pathParams: ['orderId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.ownership = {

    /**
     * youtubePartner.ownership.get
     *
     * @desc Retrieves the ownership data provided for the specified asset by the content owner associated with the authenticated user.
     *
     * @alias youtubePartner.ownership.get
     * @memberOf! youtubePartner(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.assetId The assetId parameter specifies the YouTube asset ID for which you are retrieving ownership data.
     * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/youtube/partner/v1/assets/{assetId}/ownership',
          method: 'GET'
        }, options),
        params: params,
        requiredParams: ['assetId'],
        pathParams: ['assetId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * youtubePartner.ownership.patch
     *
     * @desc Provides new ownership information for the specified asset. Note that YouTube may receive ownership information from multiple sources. For example, if an asset has multiple owners, each owner might send ownership data for the asset. YouTube algorithmically combines the ownership data received from all of those sources to generate the asset's canonical ownership data, which should provide the most comprehensive and accurate representation of the asset's ownership. This method supports patch semantics.
     *
     * @alias youtubePartner.ownership.patch
     * @memberOf! youtubePartner(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.assetId The assetId parameter specifies the YouTube asset ID of the asset being updated.
     * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     * @param {youtubePartner(v1).RightsOwnership} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/youtube/partner/v1/assets/{assetId}/ownership',
          method: 'PATCH'
        }, options),
        params: params,
        requiredParams: ['assetId'],
        pathParams: ['assetId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * youtubePartner.ownership.update
     *
     * @desc Provides new ownership information for the specified asset. Note that YouTube may receive ownership information from multiple sources. For example, if an asset has multiple owners, each owner might send ownership data for the asset. YouTube algorithmically combines the ownership data received from all of those sources to generate the asset's canonical ownership data, which should provide the most comprehensive and accurate representation of the asset's ownership.
     *
     * @alias youtubePartner.ownership.update
     * @memberOf! youtubePartner(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.assetId The assetId parameter specifies the YouTube asset ID of the asset being updated.
     * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     * @param {youtubePartner(v1).RightsOwnership} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/youtube/partner/v1/assets/{assetId}/ownership',
          method: 'PUT'
        }, options),
        params: params,
        requiredParams: ['assetId'],
        pathParams: ['assetId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.ownershipHistory = {

    /**
     * youtubePartner.ownershipHistory.list
     *
     * @desc Retrieves a list of the ownership data for an asset, regardless of which content owner provided the data. The list only includes the most recent ownership data for each content owner. However, if the content owner has submitted ownership data through multiple data sources (API, content feeds, etc.), the list will contain the most recent data for each content owner and data source.
     *
     * @alias youtubePartner.ownershipHistory.list
     * @memberOf! youtubePartner(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.assetId The assetId parameter specifies the YouTube asset ID of the asset for which you are retrieving an ownership data history.
     * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/youtube/partner/v1/ownershipHistory',
          method: 'GET'
        }, options),
        params: params,
        requiredParams: ['assetId'],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.policies = {

    /**
     * youtubePartner.policies.get
     *
     * @desc Retrieves the specified saved policy.
     *
     * @alias youtubePartner.policies.get
     * @memberOf! youtubePartner(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     * @param {string} params.policyId The policyId parameter specifies a value that uniquely identifies the policy being retrieved.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/youtube/partner/v1/policies/{policyId}',
          method: 'GET'
        }, options),
        params: params,
        requiredParams: ['policyId'],
        pathParams: ['policyId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * youtubePartner.policies.insert
     *
     * @desc Creates a saved policy.
     *
     * @alias youtubePartner.policies.insert
     * @memberOf! youtubePartner(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     * @param {youtubePartner(v1).Policy} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/youtube/partner/v1/policies',
          method: 'POST'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * youtubePartner.policies.list
     *
     * @desc Retrieves a list of the content owner's saved policies.
     *
     * @alias youtubePartner.policies.list
     * @memberOf! youtubePartner(v1)
     *
     * @param {object=} params Parameters for request
     * @param {string=} params.id The id parameter specifies a comma-separated list of saved policy IDs to retrieve. Only policies belonging to the currently authenticated content owner will be available.
     * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     * @param {string=} params.sort The sort parameter specifies how the search results should be sorted.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/youtube/partner/v1/policies',
          method: 'GET'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * youtubePartner.policies.patch
     *
     * @desc Updates the specified saved policy. This method supports patch semantics.
     *
     * @alias youtubePartner.policies.patch
     * @memberOf! youtubePartner(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     * @param {string} params.policyId The policyId parameter specifies a value that uniquely identifies the policy being updated.
     * @param {youtubePartner(v1).Policy} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/youtube/partner/v1/policies/{policyId}',
          method: 'PATCH'
        }, options),
        params: params,
        requiredParams: ['policyId'],
        pathParams: ['policyId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * youtubePartner.policies.update
     *
     * @desc Updates the specified saved policy.
     *
     * @alias youtubePartner.policies.update
     * @memberOf! youtubePartner(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     * @param {string} params.policyId The policyId parameter specifies a value that uniquely identifies the policy being updated.
     * @param {youtubePartner(v1).Policy} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/youtube/partner/v1/policies/{policyId}',
          method: 'PUT'
        }, options),
        params: params,
        requiredParams: ['policyId'],
        pathParams: ['policyId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.publishers = {

    /**
     * youtubePartner.publishers.get
     *
     * @desc Retrieves information about the specified publisher.
     *
     * @alias youtubePartner.publishers.get
     * @memberOf! youtubePartner(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     * @param {string} params.publisherId The publisherId parameter specifies a publisher ID that uniquely identifies the publisher being retrieved.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/youtube/partner/v1/publishers/{publisherId}',
          method: 'GET'
        }, options),
        params: params,
        requiredParams: ['publisherId'],
        pathParams: ['publisherId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * youtubePartner.publishers.list
     *
     * @desc Retrieves a list of publishers that match the request criteria. This method is analogous to a publisher search function.
     *
     * @alias youtubePartner.publishers.list
     * @memberOf! youtubePartner(v1)
     *
     * @param {object=} params Parameters for request
     * @param {string=} params.caeNumber The caeNumber parameter specifies the CAE number of the publisher that you want to retrieve.
     * @param {string=} params.id The id parameter specifies a comma-separated list of YouTube publisher IDs to retrieve.
     * @param {string=} params.ipiNumber The ipiNumber parameter specifies the IPI number of the publisher that you want to retrieve.
     * @param {integer=} params.maxResults The maxResults parameter specifies the maximum number of results to return per page.
     * @param {string=} params.namePrefix The namePrefix parameter indicates that the API should only return publishers whose name starts with this prefix.
     * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     * @param {string=} params.pageToken The pageToken parameter specifies a token that identifies a particular page of results to return. Set this parameter to the value of the nextPageToken value from the previous API response to retrieve the next page of search results.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/youtube/partner/v1/publishers',
          method: 'GET'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.referenceConflicts = {

    /**
     * youtubePartner.referenceConflicts.get
     *
     * @desc Retrieves information about the specified reference conflict.
     *
     * @alias youtubePartner.referenceConflicts.get
     * @memberOf! youtubePartner(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     * @param {string} params.referenceConflictId The referenceConflictId parameter specifies the YouTube reference conflict ID of the reference conflict being retrieved.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/youtube/partner/v1/referenceConflicts/{referenceConflictId}',
          method: 'GET'
        }, options),
        params: params,
        requiredParams: ['referenceConflictId'],
        pathParams: ['referenceConflictId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * youtubePartner.referenceConflicts.list
     *
     * @desc Retrieves a list of unresolved reference conflicts.
     *
     * @alias youtubePartner.referenceConflicts.list
     * @memberOf! youtubePartner(v1)
     *
     * @param {object=} params Parameters for request
     * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     * @param {string=} params.pageToken The pageToken parameter specifies a token that identifies a particular page of results to return. Set this parameter to the value of the nextPageToken value from the previous API response to retrieve the next page of search results.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/youtube/partner/v1/referenceConflicts',
          method: 'GET'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.references = {

    /**
     * youtubePartner.references.get
     *
     * @desc Retrieves information about the specified reference.
     *
     * @alias youtubePartner.references.get
     * @memberOf! youtubePartner(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     * @param {string} params.referenceId The referenceId parameter specifies the YouTube reference ID of the reference being retrieved.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/youtube/partner/v1/references/{referenceId}',
          method: 'GET'
        }, options),
        params: params,
        requiredParams: ['referenceId'],
        pathParams: ['referenceId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * youtubePartner.references.insert
     *
     * @desc Creates a reference in one of the following ways: - If your request is uploading a reference file, YouTube creates the reference from the provided content. You can provide either a video/audio file or a pre-generated fingerprint. If you are providing a pre-generated fingerprint, set the reference resource's fpDirect property to true in the request body. In this flow, you can use either the multipart or resumable upload flows to provide the reference content. - If you want to create a reference using a claimed video as the reference content, use the claimId parameter to identify the claim.
     *
     * @alias youtubePartner.references.insert
     * @memberOf! youtubePartner(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.claimId The claimId parameter specifies the YouTube claim ID of an existing claim from which a reference should be created. (The claimed video is used as the reference content.)
     * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     * @param  {object} params.resource Media resource metadata
     * @param {object} params.media Media object
     * @param {string} params.media.mimeType Media mime-type
     * @param {string|object} params.media.body Media body contents
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/youtube/partner/v1/references',
          method: 'POST'
        }, options),
        params: params,
        mediaUrl: 'https://www.googleapis.com/upload/youtube/partner/v1/references',
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * youtubePartner.references.list
     *
     * @desc Retrieves a list of references by ID or the list of references for the specified asset.
     *
     * @alias youtubePartner.references.list
     * @memberOf! youtubePartner(v1)
     *
     * @param {object=} params Parameters for request
     * @param {string=} params.assetId The assetId parameter specifies the YouTube asset ID of the asset for which you are retrieving references.
     * @param {string=} params.id The id parameter specifies a comma-separated list of YouTube reference IDs to retrieve.
     * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     * @param {string=} params.pageToken The pageToken parameter specifies a token that identifies a particular page of results to return. Set this parameter to the value of the nextPageToken value from the previous API response to retrieve the next page of search results.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/youtube/partner/v1/references',
          method: 'GET'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * youtubePartner.references.patch
     *
     * @desc Updates a reference. This method supports patch semantics.
     *
     * @alias youtubePartner.references.patch
     * @memberOf! youtubePartner(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     * @param {string} params.referenceId The referenceId parameter specifies the YouTube reference ID of the reference being updated.
     * @param {boolean=} params.releaseClaims The releaseClaims parameter indicates that you want to release all match claims associated with this reference. This parameter only works when the claim's status is being updated to 'inactive' - you can then set the parameter's value to true to release all match claims produced by this reference.
     * @param {youtubePartner(v1).Reference} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/youtube/partner/v1/references/{referenceId}',
          method: 'PATCH'
        }, options),
        params: params,
        requiredParams: ['referenceId'],
        pathParams: ['referenceId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * youtubePartner.references.update
     *
     * @desc Updates a reference.
     *
     * @alias youtubePartner.references.update
     * @memberOf! youtubePartner(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     * @param {string} params.referenceId The referenceId parameter specifies the YouTube reference ID of the reference being updated.
     * @param {boolean=} params.releaseClaims The releaseClaims parameter indicates that you want to release all match claims associated with this reference. This parameter only works when the claim's status is being updated to 'inactive' - you can then set the parameter's value to true to release all match claims produced by this reference.
     * @param {youtubePartner(v1).Reference} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/youtube/partner/v1/references/{referenceId}',
          method: 'PUT'
        }, options),
        params: params,
        requiredParams: ['referenceId'],
        pathParams: ['referenceId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.validator = {

    /**
     * youtubePartner.validator.validate
     *
     * @desc Validate a metadata file.
     *
     * @alias youtubePartner.validator.validate
     * @memberOf! youtubePartner(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     * @param {youtubePartner(v1).ValidateRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    validate: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/youtube/partner/v1/validator',
          method: 'POST'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.videoAdvertisingOptions = {

    /**
     * youtubePartner.videoAdvertisingOptions.get
     *
     * @desc Retrieves advertising settings for the specified video.
     *
     * @alias youtubePartner.videoAdvertisingOptions.get
     * @memberOf! youtubePartner(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     * @param {string} params.videoId The videoId parameter specifies the YouTube video ID of the video for which you are retrieving advertising settings.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/youtube/partner/v1/videoAdvertisingOptions/{videoId}',
          method: 'GET'
        }, options),
        params: params,
        requiredParams: ['videoId'],
        pathParams: ['videoId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * youtubePartner.videoAdvertisingOptions.getEnabledAds
     *
     * @desc Retrieves details about the types of allowed ads for a specified partner- or user-uploaded video.
     *
     * @alias youtubePartner.videoAdvertisingOptions.getEnabledAds
     * @memberOf! youtubePartner(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     * @param {string} params.videoId The videoId parameter specifies the YouTube video ID of the video for which you are retrieving advertising options.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getEnabledAds: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/youtube/partner/v1/videoAdvertisingOptions/{videoId}/getEnabledAds',
          method: 'GET'
        }, options),
        params: params,
        requiredParams: ['videoId'],
        pathParams: ['videoId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * youtubePartner.videoAdvertisingOptions.patch
     *
     * @desc Updates the advertising settings for the specified video. This method supports patch semantics.
     *
     * @alias youtubePartner.videoAdvertisingOptions.patch
     * @memberOf! youtubePartner(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     * @param {string} params.videoId The videoId parameter specifies the YouTube video ID of the video for which you are updating advertising settings.
     * @param {youtubePartner(v1).VideoAdvertisingOption} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/youtube/partner/v1/videoAdvertisingOptions/{videoId}',
          method: 'PATCH'
        }, options),
        params: params,
        requiredParams: ['videoId'],
        pathParams: ['videoId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * youtubePartner.videoAdvertisingOptions.update
     *
     * @desc Updates the advertising settings for the specified video.
     *
     * @alias youtubePartner.videoAdvertisingOptions.update
     * @memberOf! youtubePartner(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     * @param {string} params.videoId The videoId parameter specifies the YouTube video ID of the video for which you are updating advertising settings.
     * @param {youtubePartner(v1).VideoAdvertisingOption} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/youtube/partner/v1/videoAdvertisingOptions/{videoId}',
          method: 'PUT'
        }, options),
        params: params,
        requiredParams: ['videoId'],
        pathParams: ['videoId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.whitelists = {

    /**
     * youtubePartner.whitelists.delete
     *
     * @desc Removes a whitelisted channel for a content owner.
     *
     * @alias youtubePartner.whitelists.delete
     * @memberOf! youtubePartner(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.id The id parameter specifies the YouTube channel ID of the channel being removed from whitelist.
     * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/youtube/partner/v1/whitelists/{id}',
          method: 'DELETE'
        }, options),
        params: params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * youtubePartner.whitelists.get
     *
     * @desc Retrieves a specific whitelisted channel by ID.
     *
     * @alias youtubePartner.whitelists.get
     * @memberOf! youtubePartner(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.id The id parameter specifies the YouTube channel ID of the whitelisted channel being retrieved.
     * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/youtube/partner/v1/whitelists/{id}',
          method: 'GET'
        }, options),
        params: params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * youtubePartner.whitelists.insert
     *
     * @desc Whitelist a YouTube channel for your content owner. Whitelisted channels are channels that are not owned or managed by you, but you would like to whitelist so that no claims from your assets are placed on videos uploaded to these channels.
     *
     * @alias youtubePartner.whitelists.insert
     * @memberOf! youtubePartner(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     * @param {youtubePartner(v1).Whitelist} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/youtube/partner/v1/whitelists',
          method: 'POST'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * youtubePartner.whitelists.list
     *
     * @desc Retrieves a list of whitelisted channels for a content owner.
     *
     * @alias youtubePartner.whitelists.list
     * @memberOf! youtubePartner(v1)
     *
     * @param {object=} params Parameters for request
     * @param {string=} params.id The id parameter specifies a comma-separated list of YouTube channel IDs that identify the whitelisted channels you want to retrieve.
     * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     * @param {string=} params.pageToken The pageToken parameter specifies a token that identifies a particular page of results to return. Set this parameter to the value of the nextPageToken value from the previous API response to retrieve the next page of results.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/youtube/partner/v1/whitelists',
          method: 'GET'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };
}

/**
 * @typedef AdBreak
 * @memberOf! youtubePartner(v1)
 * @type object
 * @property {integer} midrollSeconds The time of the ad break specified as the number of seconds after the start of the video when the break occurs.
 * @property {string} position The point at which the break occurs during the video playback.
 * @property {youtubePartner(v1).AdSlot[]} slot A list of ad slots that occur in an ad break. Ad slots let you specify the number of ads that should run in each break.
 */
/**
 * @typedef AdSlot
 * @memberOf! youtubePartner(v1)
 * @type object
 * @property {string} id A value that identifies the ad slot to the ad server.
 * @property {string} type The type of ad that runs in the slot. The value may affect YouTube&#39;s fallback behavior if the third-party platform does not return ads.
 */
/**
 * @typedef AllowedAdvertisingOptions
 * @memberOf! youtubePartner(v1)
 * @type object
 * @property {boolean} adsOnEmbeds This setting indicates whether the partner can display ads when videos run in an embedded player.
 * @property {string} kind This property identifies the resource type. Its value is youtubePartner#allowedAdvertisingOptions.
 * @property {string[]} licAdFormats A list of ad formats that the partner is allowed to use for its uploaded videos.
 * @property {string[]} ugcAdFormats A list of ad formats that the partner is allowed to use for claimed, user-uploaded content.
 */
/**
 * @typedef Asset
 * @memberOf! youtubePartner(v1)
 * @type object
 * @property {string[]} aliasId A list of asset IDs that can be used to refer to the asset. The list contains values if the asset represents multiple constituent assets that have been merged. In that case, any of the asset IDs originally assigned to the constituent assets could be used to update the master, or synthesized, asset.
 * @property {string} id An ID that YouTube assigns and uses to uniquely identify the asset.
 * @property {string} kind The type of the API resource. For asset resources, the value is youtubePartner#asset.
 * @property {string[]} label A list of asset labels on the asset.
 * @property {youtubePartner(v1).AssetMatchPolicy} matchPolicy The matchPolicy object contains information about the asset&#39;s match policy, which YouTube applies to user-uploaded videos that match the asset.
 * @property {youtubePartner(v1).AssetMatchPolicy} matchPolicyEffective 
 * @property {youtubePartner(v1).AssetMatchPolicy} matchPolicyMine 
 * @property {youtubePartner(v1).Metadata} metadata The metadata object contains information that identifies and describes the asset. This information could be used to search for the asset or to eliminate duplication within YouTube&#39;s database.
 * @property {youtubePartner(v1).Metadata} metadataEffective 
 * @property {youtubePartner(v1).Metadata} metadataMine 
 * @property {youtubePartner(v1).RightsOwnership} ownership The ownership object identifies an asset&#39;s owners and provides additional details about their ownership, such as the territories where they own the asset.
 * @property {youtubePartner(v1).OwnershipConflicts} ownershipConflicts The ownershipConflicts object contains information about the asset&#39;s ownership conflicts.
 * @property {youtubePartner(v1).RightsOwnership} ownershipEffective 
 * @property {youtubePartner(v1).RightsOwnership} ownershipMine 
 * @property {string} status The asset&#39;s status.
 * @property {string} timeCreated The date and time the asset was created. The value is specified in RFC 3339 (YYYY-MM-DDThh:mm:ss.000Z) format.
 * @property {string} type The asset&#39;s type. This value determines the metadata fields that you can set for the asset. In addition, certain API functions may only be supported for specific types of assets. For example, composition assets may have more complex ownership data than other types of assets.
 */
/**
 * @typedef AssetLabel
 * @memberOf! youtubePartner(v1)
 * @type object
 * @property {string} kind The type of the API resource. For assetLabel resources, this value is youtubePartner#assetLabel.
 * @property {string} labelName Name of the asset label.
 */
/**
 * @typedef AssetLabelListResponse
 * @memberOf! youtubePartner(v1)
 * @type object
 * @property {youtubePartner(v1).AssetLabel[]} items A list of assetLabel resources that match the request criteria.
 * @property {string} kind The type of the API response. For this operation, the value is youtubePartner#assetLabelList.
 */
/**
 * @typedef AssetListResponse
 * @memberOf! youtubePartner(v1)
 * @type object
 * @property {youtubePartner(v1).Asset[]} items A list of asset resources that match the request criteria.
 * @property {string} kind The type of the API response. For this operation, the value is youtubePartner#assetList.
 */
/**
 * @typedef AssetMatchPolicy
 * @memberOf! youtubePartner(v1)
 * @type object
 * @property {string} kind The type of the API resource. Value: youtubePartner#assetMatchPolicy.
 * @property {string} policyId A value that uniquely identifies the Policy resource that YouTube applies to user-uploaded videos that match the asset.
 * @property {youtubePartner(v1).PolicyRule[]} rules A list of rules that collectively define the policy that the content owner wants to apply to user-uploaded videos that match the asset. Each rule specifies the action that YouTube should take and may optionally specify the conditions under which that action is enforced.
 */
/**
 * @typedef AssetRelationship
 * @memberOf! youtubePartner(v1)
 * @type object
 * @property {string} childAssetId The ID of the child (contained) asset.
 * @property {string} id A value that YouTube assigns and uses to uniquely identify the asset relationship.
 * @property {string} kind The type of the API resource. For this resource, the value is youtubePartner#assetRelationship.
 * @property {string} parentAssetId The ID of the parent (containing) asset.
 */
/**
 * @typedef AssetRelationshipListResponse
 * @memberOf! youtubePartner(v1)
 * @type object
 * @property {youtubePartner(v1).AssetRelationship[]} items A list of assetRelationship resources that match the request criteria.
 * @property {string} kind The type of the API response. For this operation, the value is youtubePartner#assetRelationshipList.
 * @property {string} nextPageToken The token that can be used as the value of the pageToken parameter to retrieve the next page of results.
 * @property {youtubePartner(v1).PageInfo} pageInfo The pageInfo object encapsulates paging information for the result set.
 */
/**
 * @typedef AssetSearchResponse
 * @memberOf! youtubePartner(v1)
 * @type object
 * @property {youtubePartner(v1).AssetSnippet[]} items A list of asset resources that match the request criteria.
 * @property {string} kind The type of the API response. For this operation, the value is youtubePartner#assetSnippetList.
 * @property {string} nextPageToken The token that can be used as the value of the pageToken parameter to retrieve the next page of results.
 * @property {youtubePartner(v1).PageInfo} pageInfo The pageInfo object encapsulates paging information for the result set.
 */
/**
 * @typedef AssetShare
 * @memberOf! youtubePartner(v1)
 * @type object
 * @property {string} kind The type of the API resource. For this resource, the value is youtubePartner#assetShare.
 * @property {string} shareId A value that YouTube assigns and uses to uniquely identify the asset share.
 * @property {string} viewId A value that YouTube assigns and uses to uniquely identify the asset view.
 */
/**
 * @typedef AssetShareListResponse
 * @memberOf! youtubePartner(v1)
 * @type object
 * @property {youtubePartner(v1).AssetShare[]} items An assetShare resource that matches the request criteria.
 * @property {string} kind The type of the API response. For this operation, the value is youtubePartner#assetShareList.
 * @property {string} nextPageToken The token that can be used as the value of the pageToken parameter to retrieve the next page of results.
 * @property {youtubePartner(v1).PageInfo} pageInfo The pageInfo object encapsulates paging information for the result set.
 */
/**
 * @typedef AssetSnippet
 * @memberOf! youtubePartner(v1)
 * @type object
 * @property {string} customId Custom ID assigned by the content owner to this asset.
 * @property {string} id An ID that YouTube assigns and uses to uniquely identify the asset.
 * @property {string} isrc The ISRC (International Standard Recording Code) for this asset.
 * @property {string} iswc The ISWC (International Standard Musical Work Code) for this asset.
 * @property {string} kind The type of the API resource. For this operation, the value is youtubePartner#assetSnippet.
 * @property {string} timeCreated The date and time the asset was created. The value is specified in RFC 3339 (YYYY-MM-DDThh:mm:ss.000Z) format.
 * @property {string} title Title of this asset.
 * @property {string} type The asset&#39;s type. This value determines which metadata fields might be included in the metadata object.
 */
/**
 * @typedef Campaign
 * @memberOf! youtubePartner(v1)
 * @type object
 * @property {youtubePartner(v1).CampaignData} campaignData The campaignData object contains details like the campaign&#39;s start and end dates, target and source.
 * @property {string} id The unique ID that YouTube uses to identify the campaign.
 * @property {string} kind The type of the API resource. For campaign resources, this value is youtubePartner#campaign.
 * @property {string} status The status of the campaign.
 * @property {string} timeCreated The time the campaign was created.
 * @property {string} timeLastModified The time the campaign was last modified.
 */
/**
 * @typedef CampaignData
 * @memberOf! youtubePartner(v1)
 * @type object
 * @property {youtubePartner(v1).CampaignSource} campaignSource The campaignSource object contains information about the assets for which the campaign will generate links.
 * @property {string} expireTime The time at which the campaign should expire. Do not specify a value if the campaign has no expiration time.
 * @property {string} name The user-given name of the campaign.
 * @property {youtubePartner(v1).PromotedContent[]} promotedContent A list of videos or channels that will be linked to from claimed videos that are included in the campaign.
 * @property {string} startTime The time at which the campaign should start. Do not specify a value if the campaign should start immediately.
 */
/**
 * @typedef CampaignList
 * @memberOf! youtubePartner(v1)
 * @type object
 * @property {youtubePartner(v1).Campaign[]} items A list of campaigns.
 * @property {string} kind The type of the API response. For this operation, the value is youtubePartner#campaignList.
 */
/**
 * @typedef CampaignSource
 * @memberOf! youtubePartner(v1)
 * @type object
 * @property {string} sourceType The type of the campaign source.
 * @property {string[]} sourceValue A list of values of the campaign source.
 */
/**
 * @typedef CampaignTargetLink
 * @memberOf! youtubePartner(v1)
 * @type object
 * @property {string} targetId The channel ID or video ID of the link target.
 * @property {string} targetType Indicates whether the link target is a channel or video.
 */
/**
 * @typedef Claim
 * @memberOf! youtubePartner(v1)
 * @type object
 * @property {youtubePartner(v1).Policy} appliedPolicy The applied policy for the viewing owner on the claim. This might not be the same as the final claim policy on the video as it does not consider other partners&#39; policy of the same claim.
 * @property {string} assetId The unique YouTube asset ID that identifies the asset associated with the claim.
 * @property {boolean} blockOutsideOwnership Indicates whether or not the claimed video should be blocked anywhere it is not explicitly owned.
 * @property {string} contentType This value indicates whether the claim covers the audio, video, or audiovisual portion of the claimed content.
 * @property {string} id The ID that YouTube assigns and uses to uniquely identify the claim.
 * @property {boolean} isPartnerUploaded Indicates whether or not the claim is a partner uploaded claim.
 * @property {string} kind The type of the API resource. For claim resources, this value is youtubePartner#claim.
 * @property {object} matchInfo If this claim was auto-generated based on a provided reference, this section will provide details of the match that generated the claim.
 * @property {object} origin 
 * @property {youtubePartner(v1).Policy} policy The policy provided by the viewing owner on the claim.
 * @property {string} status The claim&#39;s status. When updating a claim, you can update its status from active to inactive to effectively release the claim, but the API does not support other updates to a claim&#39;s status.
 * @property {string} timeCreated The time the claim was created.
 * @property {string} videoId The unique YouTube video ID that identifies the video associated with the claim.
 */
/**
 * @typedef ClaimEvent
 * @memberOf! youtubePartner(v1)
 * @type object
 * @property {string} kind The type of the API resource. For claimEvent resources, this value is youtubePartner#claimEvent.
 * @property {string} reason Reason of the event.
 * @property {object} source Data related to source of the event.
 * @property {string} time The time when the event occurred.
 * @property {string} type Type of the event.
 * @property {object} typeDetails Details of event&#39;s type.
 */
/**
 * @typedef ClaimHistory
 * @memberOf! youtubePartner(v1)
 * @type object
 * @property {youtubePartner(v1).ClaimEvent[]} event A list of claim history events.
 * @property {string} id The ID that YouTube assigns and uses to uniquely identify the claim.
 * @property {string} kind The type of the API resource. For claimHistory resources, this value is youtubePartner#claimHistory.
 * @property {string} uploaderChannelId The external channel id of claimed video&#39;s uploader.
 */
/**
 * @typedef ClaimListResponse
 * @memberOf! youtubePartner(v1)
 * @type object
 * @property {youtubePartner(v1).Claim[]} items A list of claims that match the request criteria.
 * @property {string} kind The type of the API response. For this operation, the value is youtubePartner#claimList.
 * @property {string} nextPageToken The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
 * @property {youtubePartner(v1).PageInfo} pageInfo The pageInfo object encapsulates paging information for the result set.
 * @property {string} previousPageToken The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set.
 */
/**
 * @typedef ClaimSearchResponse
 * @memberOf! youtubePartner(v1)
 * @type object
 * @property {youtubePartner(v1).ClaimSnippet[]} items A list of claims that match the request criteria.
 * @property {string} kind The type of the API response. For this operation, the value is youtubePartner#claimSnippetList.
 * @property {string} nextPageToken The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
 * @property {youtubePartner(v1).PageInfo} pageInfo The pageInfo object encapsulates paging information for the result set.
 * @property {string} previousPageToken The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set.
 */
/**
 * @typedef ClaimSnippet
 * @memberOf! youtubePartner(v1)
 * @type object
 * @property {string} assetId The unique YouTube asset ID that identifies the asset associated with the claim.
 * @property {string} contentType This value indicates whether the claim covers the audio, video, or audiovisual portion of the claimed content.
 * @property {string} id The ID that YouTube assigns and uses to uniquely identify the claim.
 * @property {boolean} isPartnerUploaded Indicates whether or not the claim is a partner uploaded claim.
 * @property {string} kind The type of the API resource. For this operation, the value is youtubePartner#claimSnippet.
 * @property {object} origin 
 * @property {string} status The claim&#39;s status.
 * @property {boolean} thirdPartyClaim Indicates that this is a third party claim.
 * @property {string} timeCreated The time the claim was created.
 * @property {string} timeStatusLastModified The time the claim status and/or status detail was last modified.
 * @property {string} videoId The unique YouTube video ID that identifies the video associated with the claim.
 * @property {string} videoTitle The title of the claimed video.
 * @property {string} videoViews Number of views for the claimed video.
 */
/**
 * @typedef ClaimedVideoDefaults
 * @memberOf! youtubePartner(v1)
 * @type object
 * @property {boolean} autoGeneratedBreaks Set this property to true to enable automatically generated breaks for a newly claimed video longer than 10 minutes. The first partner that claims the video sets its default advertising options to that video. claimedVideoOptions.auto_generated_breaks_default
 * @property {boolean} channelOverride Set this property to true to indicate that the channel&#39;s claimedVideoOptions can override the content owner&#39;s claimedVideoOptions.
 * @property {string} kind Identifies this resource as default options for newly claimed video. Value: &quot;youtubePartner#claimedVideoDefaults&quot;.
 * @property {string[]} newVideoDefaults A list of ad formats that could be used as the default settings for a newly claimed video. The first partner that claims the video sets its default advertising options to that video.
 */
/**
 * @typedef Conditions
 * @memberOf! youtubePartner(v1)
 * @type object
 * @property {string[]} contentMatchType This match condition specifies whether the user- or partner-uploaded content needs to match the audio, video or audiovisual content of a reference file for the rule to apply.
 * @property {youtubePartner(v1).IntervalCondition[]} matchDuration This match condition specifies an amount of time that the user- or partner- uploaded content needs to match a reference file for the rule to apply.
 * @property {youtubePartner(v1).IntervalCondition[]} matchPercent This match condition specifies a percentage of the user- or partner-uploaded content that needs to match a reference file for the rule to apply.
 * @property {youtubePartner(v1).IntervalCondition[]} referenceDuration This match condition indicates that the reference must be a certain duration for the rule to apply.
 * @property {youtubePartner(v1).IntervalCondition[]} referencePercent This match condition indicates that the specified percentage of a reference file must match the user- or partner-uploaded content for the rule to apply.
 * @property {youtubePartner(v1).TerritoryCondition} requiredTerritories This watch condition specifies where users are (or or not) allowed to watch (or listen to) an asset. YouTube determines whether the condition is satisfied based on the user&#39;s location.
 */
/**
 * @typedef ConflictingOwnership
 * @memberOf! youtubePartner(v1)
 * @type object
 * @property {string} owner The ID of the conflicting asset&#39;s owner.
 * @property {number} ratio The percentage of the asset that the owner controls or administers.
 */
/**
 * @typedef ContentOwner
 * @memberOf! youtubePartner(v1)
 * @type object
 * @property {string} conflictNotificationEmail The email address visible to other partners for use in managing asset ownership conflicts.
 * @property {string} displayName The content owner&#39;s display name.
 * @property {string[]} disputeNotificationEmails The email address(es) to which YouTube sends claim dispute notifications and possible claim notifications.
 * @property {string[]} fingerprintReportNotificationEmails The email address(es) to which YouTube sends fingerprint reports.
 * @property {string} id A unique ID that YouTube uses to identify the content owner.
 * @property {string} kind The type of the API resource. For content owner resources, the value is youtubePartner#contentOwner.
 * @property {string[]} primaryNotificationEmails The email address(es) to which YouTube sends CMS account details and report notifications.
 */
/**
 * @typedef ContentOwnerAdvertisingOption
 * @memberOf! youtubePartner(v1)
 * @type object
 * @property {youtubePartner(v1).AllowedAdvertisingOptions} allowedOptions This object identifies the ad formats that the content owner is allowed to use.
 * @property {youtubePartner(v1).ClaimedVideoDefaults} claimedVideoOptions This object identifies the advertising options used by default for the content owner&#39;s newly claimed videos.
 * @property {string} id The value that YouTube uses to uniquely identify the content owner.
 * @property {string} kind The type of the API resource. For this resource, the value is youtubePartner#contentOwnerAdvertisingOption.
 */
/**
 * @typedef ContentOwnerListResponse
 * @memberOf! youtubePartner(v1)
 * @type object
 * @property {youtubePartner(v1).ContentOwner[]} items A list of content owners that match the request criteria.
 * @property {string} kind The type of the API response. For this operation, the value is youtubePartner#contentOwnerList.
 */
/**
 * @typedef CountriesRestriction
 * @memberOf! youtubePartner(v1)
 * @type object
 * @property {string[]} adFormats A list of ad formats that can be used in the specified countries.
 * @property {string[]} territories A list of ISO 3166-1 alpha-2 country codes that identify the countries where ads are enabled.
 */
/**
 * @typedef CuepointSettings
 * @memberOf! youtubePartner(v1)
 * @type object
* @property {string} cueType The cuepoint&#39;s type. See the Getting started guide for an explanation of the different types of cuepoints. Also see the Life of a broadcast document for best practices about inserting cuepoints during your broadcast.
* @property {integer} durationSecs The cuepoint&#39;s duration, in seconds. This value must be specified if the cueType is ad and is ignored otherwise.
* @property {string} offsetTimeMs This value specifies a point in time in the video when viewers should see an ad or in-stream slate. The property value identifies a time offset, in milliseconds, from the beginning of the monitor stream. Though measured in milliseconds, the value is actually an approximation, and YouTube will insert the cuepoint as closely as possible to that time. You should not specify a value for this parameter if your broadcast does not have a monitor stream.

This property&#39;s default value is 0, which indicates that the cuepoint should be inserted as soon as possible. If your broadcast stream is not delayed, then 0 is also the only valid value. However, if your broadcast stream is delayed, then the property value can specify the time when the cuepoint should be inserted. See the Getting started guide for more details.

Note: If your broadcast had a testing phase, the offset is measured from the time that the testing phase began.
* @property {string} walltime This value specifies the wall clock time at which the cuepoint should be inserted. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sssZ) format.
*/
/**
 * @typedef Date
 * @memberOf! youtubePartner(v1)
 * @type object
 * @property {integer} day The date&#39;s day. The value should be an integer between 1 and 31. Note that some day-month combinations are not valid.
 * @property {integer} month The date&#39;s month. The value should be an integer between 1 and 12.
 * @property {integer} year The date&#39;s year in the Gregorian Calendar. Assumed to be A.D.
 */
/**
 * @typedef DateRange
 * @memberOf! youtubePartner(v1)
 * @type object
 * @property {youtubePartner(v1).Date} end The end date (inclusive) for the date range. This value is required for video-on-demand (VOD) orders and optional for electronic sell-through (EST) orders.
 * @property {string} kind Identifies this resource as order date range. Value: &quot;youtubePartner#dateRange&quot;.
 * @property {youtubePartner(v1).Date} start The start date for the date range. This value is required for all date ranges.
 */
/**
 * @typedef ExcludedInterval
 * @memberOf! youtubePartner(v1)
 * @type object
 * @property {number} high The end (inclusive) time in seconds of the time window. The value can be any value greater than low. If high is greater than the length of the reference, the interval between low and the end of the reference will be excluded. Every interval must specify a value for this field.
 * @property {number} low The start (inclusive) time in seconds of the time window. The value can be any value between 0 and high. Every interval must specify a value for this field.
 * @property {string} origin The source of the request to exclude the interval from Content ID matching.
 * @property {string} timeCreated The date and time that the exclusion was created. The value is specified in RFC 3339 (YYYY-MM-DDThh:mm:ss.000Z) format.
 */
/**
 * @typedef IntervalCondition
 * @memberOf! youtubePartner(v1)
 * @type object
 * @property {number} high The maximum (inclusive) allowed value for the condition to be satisfied. The default value is ∞.
 * @property {number} low The minimum (inclusive) allowed value for the condition to be satisfied. The default value is -∞.
 */
/**
 * @typedef LiveCuepoint
 * @memberOf! youtubePartner(v1)
 * @type object
 * @property {string} broadcastId The ID that YouTube assigns to uniquely identify the broadcast into which the cuepoint is being inserted.
 * @property {string} id A value that YouTube assigns to uniquely identify the cuepoint.
 * @property {string} kind The type of the API resource. For liveCuepoint resources, the value is youtubePartner#liveCuepoint.
 * @property {youtubePartner(v1).CuepointSettings} settings The settings object defines the cuepoint&#39;s settings.
 */
/**
 * @typedef MatchSegment
 * @memberOf! youtubePartner(v1)
 * @type object
 * @property {string} channel Identifies the manner in which the claimed video matches the reference video.
 * @property {youtubePartner(v1).Segment} reference_segment The reference_segment object contains information about the matched portion of the reference content.
 * @property {youtubePartner(v1).Segment} video_segment The video_segment object contains information about the matched portion of the claimed video.
 */
/**
 * @typedef Metadata
 * @memberOf! youtubePartner(v1)
 * @type object
* @property {string[]} actor A list that identifies actors associated with the asset. You can specify up to 50 actors for an asset.
* @property {string} album The album on which a sound recording asset is included. This field is only valid for sound recording assets and has a maximum length of 255 bytes.
* @property {string[]} artist The artist associated with a music video or sound recording asset. This field is only valid for music video and sound recording assets. It is required for sound recordings included in the AudioSwap program.
* @property {string[]} broadcaster Identifies the network or channel that originally broadcast a show or a season of a show. This field should only be included for an asset if the broadcaster associated with the asset is different from the partner uploading the asset to YouTube. Note that a show may have multiple broadcasters; for example, a show may switch networks between seasons.
* @property {string} category Category of this asset.
* @property {string} contentType The type of video content that the asset represents. This field is only valid for movie and episode assets, and is required for the following types of those assets:  
- Episode assets that are linked to a show 
- Movie assets that appear in YouTube&#39;s Movies category
* @property {youtubePartner(v1).Date} copyrightDate The date copyright for this asset was established. *
* @property {string} customId A unique value that you, the metadata provider, use to identify an asset. The value could be a unique ID that you created for the asset or a standard identifier, such as an ISRC. The value has a maximum length of 64 bytes and may contain alphanumeric characters, hyphens (-), underscores (_), periods (.), &quot;at&quot; symbols (@), or forward slashes (/).
* @property {string} description A description of the asset. The description may be displayed on YouTube or in CMS. This field has a maximum length of 5,000 bytes.
* @property {string[]} director A list that identifies directors associated with the asset. You can specify up to 50 directors for an asset.
* @property {string} eidr The Entertainment Identifier Registry (EIDR) assigned to an asset. This value is only used for episode and movie assets and is optional in both cases. The value contains a standard prefix for EIDR registry, followed by a forward slash, a 20-character hexadecimal string, and an alphanumeric (0-9A-Z) check character.
* @property {integer} endYear The last year that a television show aired. This value is only used for show assets, for which it is optional. Do not specify a value if new show episodes are still being created.
* @property {string} episodeNumber The episode number associated with an episode asset. This field is required for and only used for episode assets that are linked to show assets. It has a maximum length of 5 bytes.
* @property {boolean} episodesAreUntitled This value indicates that the episodes associated with a particular show asset or a particular season asset are untitled. An untitled show (or season) has episodes which are identified by their episode number or date. If this field is set to true, then YouTube will optimize the title displayed for associated episodes.
* @property {string[]} genre This field specifies a genre that can be used to categorize an asset. Assets may be categorized in more than one genre, and YouTube uses different sets of genres to categorize different types of assets. For example, Soaps might be a valid genre for a show but not for a movie or sound recording.  
- Show assets 
- Movie assets that appear in YouTube&#39;s Movies category 
- Sound recordings included in the AudioSwap program
* @property {string} grid The GRID (Global Release Identifier) of a music video or sound recording. This field&#39;s value must contain exactly 18 alphanumeric characters.
* @property {string} hfa The six-character Harry Fox Agency (HFA) song code issued to uniquely identify a composition. This value is only valid for composition assets.
* @property {string} infoUrl An official URL associated with the asset. This field has a maximum length of 1536 bytes. Please do not submit a 1537-byte URL. Your efforts would be futile.
* @property {string} isan The ISAN (International Standard Audiovisual Number) for the asset. This value is only used for episode and movie assets and is optional in both cases. The value contains 26 characters, which includes the 24 hexadecimal characters of the ISAN as well as two check characters, in the following format:  
- The first 16 characters in the tag value contain hexadecimal characters specifying the &#39;root&#39; and &#39;episode&#39; components of the ISAN. 
- The seventeenth character is a check character (a letter from A-Z). 
- Characters 18 to 25 are the remaining eight characters of the ISAN, which specify the &#39;version&#39; component of the ISAN. 
- The twenty-sixth character is another check character (A-Z).
* @property {string} isrc The ISRC (International Standard Recording Code) of a music video or sound recording asset. This field&#39;s value must contain exactly 12 alphanumeric characters.
* @property {string} iswc The ISWC (International Standard Musical Work Code) for a composition asset. The field&#39;s value must contain exactly 11 characters in the format of a letter (T) followed by 10 digits.
* @property {string[]} keyword A list of up to 100 keywords associated with a show asset. This field is required for and also only used for show assets.
* @property {string} label The record label that released a sound recording asset. This field is only valid for sound recording assets and has a maximum length of 255 bytes.
* @property {string} notes Additional information that does not map directly to one of the other metadata fields. This field has a maximum length of 255 bytes.
* @property {string} originalReleaseMedium The method by which people first had the opportunity to see a video asset. This value is only used for episode and movie assets. It is required for the assets listed below and otherwise optional:  
- Episode assets that are linked to a show 
- Movie assets that appear in YouTube&#39;s Movies category
* @property {string[]} producer A list that identifies producers of the asset. You can specify up to 50 producers for an asset.
* @property {youtubePartner(v1).Rating[]} ratings A list of ratings that an asset received. The rating must be valid under the specified rating system.
* @property {youtubePartner(v1).Date} releaseDate The date that an asset was publicly released. For season assets, this value specifies the first date that the season aired. Dates prior to the year 1902 are not supported. This value is valid for episode, season, movie, music video, and sound recording assets. It is required for the assets listed below and otherwise optional:  
- Episode assets that are linked to a show 
- Movie assets that appear in YouTube&#39;s Movies category
* @property {string} seasonNumber The season number that identifies a season asset, or the season number that is associated with an episode asset. This field has a maximum length of 5 bytes.
* @property {string} showCustomId The customId of the show asset that a season or episode asset is associated with. It is required for season and episode assets that appear in the Shows category on YouTube, and it is not valid for other types of assets. This field has a maximum length of 64 bytes and may contain alphanumeric characters, hyphens (-), underscores (_), periods (.), &quot;at&quot; symbols (@), or forward slashes (/).
* @property {string} showTitle The name of the show that an episode asset is associated with. Note: This tag is only used for and valid for episodes that are not associated with show assets and enables those assets to still display a show title in the asset metadata section of CMS. This field has a maximum length of 120 bytes.
* @property {string} spokenLanguage The video&#39;s primary spoken language. The value can be any ISO 639-1 two-letter language code. This value is only used for episode and movie assets and is not valid for other types of assets.
* @property {integer} startYear The first year that a television show aired. This value is required for and also only used for show assets.
* @property {string[]} subtitledLanguage A list of languages for which the video has either a separate caption track or burnt-in captions that are part of the video. Each value in the list should be an ISO 639-1 two-letter language code. This value is only used for episode and movie assets and is not valid for other types of assets.
* @property {string} title The asset&#39;s title or name. The value has a maximum length of 255 bytes. This value is required for the assets listed below and optional for all other assets:  
- Show assets 
- Episode assets that are linked to a show 
- Movie assets that appear in YouTube&#39;s Movies category 
- Sound recordings included in the AudioSwap program
* @property {string} tmsId TMS (Tribune Media Systems) ID for the asset.
* @property {integer} totalEpisodesExpected Specifies the total number of full-length episodes in the season. This value is used only for season assets.
* @property {string} upc The UPC (Universal Product Code) associated with the asset.
* @property {string[]} writer A list that identifies writers associated with the asset. You can specify up to 50 writers for an asset.
*/
/**
 * @typedef MetadataHistory
 * @memberOf! youtubePartner(v1)
 * @type object
 * @property {string} kind The type of the API resource. For metadata history resources, the value is youtubePartner#metadataHistory.
 * @property {youtubePartner(v1).Metadata} metadata The metadata object contains the metadata provided by the specified source (origination) at the specified time (timeProvided).
 * @property {youtubePartner(v1).Origination} origination The origination object contains information that describes the metadata source.
 * @property {string} timeProvided The time the metadata was provided.
 */
/**
 * @typedef MetadataHistoryListResponse
 * @memberOf! youtubePartner(v1)
 * @type object
 * @property {youtubePartner(v1).MetadataHistory[]} items A list of metadata history (youtubePartner#metadataHistory) resources that match the request criteria.
 * @property {string} kind The type of the API response. For this operation, the value is youtubePartner#metadataHistoryList.
 */
/**
 * @typedef Order
 * @memberOf! youtubePartner(v1)
 * @type object
* @property {string} availGroupId Links an order to the avails associated with it.
* @property {string} channelId Channel ID - identifies the channel this order and video are associated with
* @property {string} contentType Type of content possible values are 
- MOVIE
- SHOW
* @property {string} country Two letter country code for the order only countries where YouTube does transactional business are allowed.
* @property {string} customId Secondary id to be used to identify content in other systems like partner database
* @property {youtubePartner(v1).Date} dvdReleaseDate Date when this content was first made available on DVD
* @property {youtubePartner(v1).DateRange} estDates Range of time content is to be available for rental.
* @property {youtubePartner(v1).StateCompleted[]} events History log of events for this order
* @property {string} id Order Id unique identifier for an order.
* @property {string} kind Identifies this resource as order. Value: &quot;youtubePartner#order&quot;.
* @property {string} movie Title if the order is type movie.
* @property {youtubePartner(v1).Date} originalReleaseDate Date when this content was first made available to the public
* @property {string} priority The priority for the order in the QC review queue once the content is ready for QC.
* @property {string} productionHouse Post production house that is to process this order
* @property {string} purchaseOrder Youtube purchase order reference for the post production house.
* @property {youtubePartner(v1).Requirements} requirements Minumim set of requirements for this order to be complete such as is a trailer required.
* @property {youtubePartner(v1).ShowDetails} show Details of a show, show name, season number, episode etc.
* @property {string} status The order&#39;s status.
* @property {string} videoId Video ID the video that this order is associated with if any.
* @property {youtubePartner(v1).DateRange} vodDates Range of time content is to be available for purchase.
*/
/**
 * @typedef OrderListResponse
 * @memberOf! youtubePartner(v1)
 * @type object
 * @property {youtubePartner(v1).Order[]} items A list of orders that match the request criteria.
 * @property {string} kind The type of the API response. For this operation, the value is youtubePartner#orderList.
 * @property {string} nextPageToken The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
 * @property {youtubePartner(v1).PageInfo} pageInfo The pageInfo object encapsulates paging information for the result set.
 * @property {string} previousPageToken The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set.
 */
/**
 * @typedef Origination
 * @memberOf! youtubePartner(v1)
 * @type object
 * @property {string} owner The content owner who provided the metadata or ownership information.
 * @property {string} source The mechanism by which the piece of metadata, ownership or relationship information was provided.
 */
/**
 * @typedef OwnershipConflicts
 * @memberOf! youtubePartner(v1)
 * @type object
 * @property {youtubePartner(v1).TerritoryConflicts[]} general A list that identifies ownership conflicts of an asset and the territories where conflicting ownership is inserted.
 * @property {string} kind The type of the API resource. For ownershipConflicts resources, the value is youtubePartner#ownershipConflicts.
 * @property {youtubePartner(v1).TerritoryConflicts[]} mechanical A list that identifies ownership conflicts of the mechanical rights for a composition asset and the territories where conflicting ownership is inserted.
 * @property {youtubePartner(v1).TerritoryConflicts[]} performance A list that identifies ownership conflicts of the performance rights for a composition asset and the territories where conflicting ownership is inserted.
 * @property {youtubePartner(v1).TerritoryConflicts[]} synchronization A list that identifies ownership conflicts of the synchronization rights for a composition asset and the territories where conflicting ownership is inserted.
 */
/**
 * @typedef OwnershipHistoryListResponse
 * @memberOf! youtubePartner(v1)
 * @type object
 * @property {youtubePartner(v1).RightsOwnershipHistory[]} items A list of ownership history (youtubePartner#ownershipHistory) resources that match the request criteria.
 * @property {string} kind The type of the API response. For this operation, the value is youtubePartner#ownershipHistoryList.
 */
/**
 * @typedef PageInfo
 * @memberOf! youtubePartner(v1)
 * @type object
 * @property {integer} resultsPerPage The number of results included in the API response.
 * @property {integer} startIndex The index of the first item in the API response.
 * @property {integer} totalResults The total number of results in the result set.
 */
/**
 * @typedef Policy
 * @memberOf! youtubePartner(v1)
 * @type object
 * @property {string} description The policy&#39;s description.
 * @property {string} id A value that YouTube assigns and uses to uniquely identify the policy.
 * @property {string} kind Identifies this as a policy. Value: &quot;youtubePartner#policy&quot;
 * @property {string} name The policy&#39;s name.
 * @property {youtubePartner(v1).PolicyRule[]} rules A list of rules that specify the action that YouTube should take and may optionally specify the conditions under which that action is enforced.
 * @property {string} timeUpdated The time the policy was updated.
 */
/**
 * @typedef PolicyList
 * @memberOf! youtubePartner(v1)
 * @type object
 * @property {youtubePartner(v1).Policy[]} items A list of saved policies.
 * @property {string} kind The type of the API response. For this operation, the value is youtubePartner#policyList.
 */
/**
 * @typedef PolicyRule
 * @memberOf! youtubePartner(v1)
 * @type object
 * @property {string} action The policy that YouTube should enforce if the rule&#39;s conditions are all valid for an asset or for an attempt to view that asset on YouTube.
 * @property {youtubePartner(v1).Conditions} conditions A set of conditions that must be met for the rule&#39;s action (and subactions) to be enforced. For a rule to be valid, all of its conditions must be met.
 * @property {string[]} subaction A list of additional actions that YouTube should take if the conditions in the rule are met.
 */
/**
 * @typedef PromotedContent
 * @memberOf! youtubePartner(v1)
 * @type object
 * @property {youtubePartner(v1).CampaignTargetLink[]} link A list of link targets that will be used to generate the annotation link that appears on videos included in the  campaign. If more than one link is specified, the link that is displayed to viewers will be randomly selected from the list.
 */
/**
 * @typedef Publisher
 * @memberOf! youtubePartner(v1)
 * @type object
 * @property {string} caeNumber The publisher&#39;s unique CAE (Compositeur, Auteur and Editeur) number.
 * @property {string} id A value that YouTube assigns and uses to uniquely identify the publisher.
 * @property {string} ipiNumber The publisher&#39;s unique IPI (Interested Parties Information) code.
 * @property {string} kind The type of the API resource. For this resource, the value is youtubePartner#publisher.
 * @property {string} name The publisher&#39;s name.
 */
/**
 * @typedef PublisherList
 * @memberOf! youtubePartner(v1)
 * @type object
 * @property {youtubePartner(v1).Publisher[]} items A list of publishers that match the request criteria.
 * @property {string} kind The type of the API response. For this operation, the value is youtubePartner#publisherList.
 * @property {string} nextPageToken The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
 * @property {youtubePartner(v1).PageInfo} pageInfo The pageInfo object encapsulates paging information for the result set.
 */
/**
 * @typedef Rating
 * @memberOf! youtubePartner(v1)
 * @type object
 * @property {string} rating The rating that the asset received.
 * @property {string} ratingSystem The rating system associated with the rating.
 */
/**
 * @typedef Reference
 * @memberOf! youtubePartner(v1)
 * @type object
* @property {string} assetId The ID that uniquely identifies the asset that the reference is associated with.
* @property {boolean} audioswapEnabled Set this field&#39;s value to true to indicate that the reference content should be included in YouTube&#39;s AudioSwap program.
* @property {string} claimId This field is present if the reference was created by associating an asset with an existing YouTube video that was uploaded to a YouTube channel linked to your CMS account. In that case, this field contains the ID of the claim representing the resulting association between the asset and the video.
* @property {string} contentType The type of content that the reference represents.
* @property {string} duplicateLeader The ID that uniquely identifies the reference that this reference duplicates. This field is only present if the reference&#39;s status is duplicate_on_hold.
* @property {youtubePartner(v1).ExcludedInterval[]} excludedIntervals The list of time intervals from this reference that will be ignored during the match process.
* @property {boolean} fpDirect When uploading a reference, set this value to true to indicate that the reference is a pre-generated fingerprint.
* @property {string} hashCode The MD5 hashcode of the reference content.
* @property {string} id A value that YouTube assigns and uses to uniquely identify a reference.
* @property {boolean} ignoreFpMatch Set this value to true to indicate that the reference should not be used to generate claims. This field is only used on AudioSwap references.
* @property {string} kind The type of the API resource. For reference resources, the value is youtubePartner#reference.
* @property {number} length The length of the reference in seconds.
* @property {youtubePartner(v1).Origination} origination The origination object contains information that describes the reference source.
* @property {string} status The reference&#39;s status.
* @property {string} statusReason An explanation of how a reference entered its current state. This value is only present if the reference&#39;s status is either inactive or deleted.
* @property {boolean} urgent Set this value to true to indicate that YouTube should prioritize Content ID processing for a video file. YouTube processes urgent video files before other files that are not marked as urgent. This setting is primarily used for videos of live events or other videos that require time-sensitive processing. The sooner YouTube completes Content ID processing for a video, the sooner YouTube can match user-uploaded videos to that video.

Note that marking all of your files as urgent could delay processing for those files.
* @property {string} videoId This field is present if the reference was created by associating an asset with an existing YouTube video that was uploaded to a YouTube channel linked to your CMS account. In that case, this field contains the ID of the source video.
*/
/**
 * @typedef ReferenceConflict
 * @memberOf! youtubePartner(v1)
 * @type object
 * @property {string} conflictingReferenceId An id of a conflicting reference.
 * @property {string} expiryTime Conflict review expiry time.
 * @property {string} id A value that YouTube assigns and uses to uniquely identify a reference conflict.
 * @property {string} kind The type of the API resource. For referenceConflict resources, the value is youtubePartner#referenceConflict.
 * @property {youtubePartner(v1).ReferenceConflictMatch[]} matches The list of matches between conflicting and original references at the time of conflict creation.
 * @property {string} originalReferenceId An id of an original reference.
 * @property {string} status The referenceConflict&#39;s status.
 */
/**
 * @typedef ReferenceConflictListResponse
 * @memberOf! youtubePartner(v1)
 * @type object
 * @property {youtubePartner(v1).ReferenceConflict[]} items A list of reference conflicts that match the request criteria.
 * @property {string} kind The type of the API response. For this operation, the value is youtubePartner#referenceConflictList.
 * @property {string} nextPageToken The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
 * @property {youtubePartner(v1).PageInfo} pageInfo The pageInfo object encapsulates paging information for the result set.
 */
/**
 * @typedef ReferenceConflictMatch
 * @memberOf! youtubePartner(v1)
 * @type object
 * @property {string} conflicting_reference_offset_ms Conflicting reference offset in milliseconds.
 * @property {string} length_ms Match length in milliseconds.
 * @property {string} original_reference_offset_ms Original reference offset in milliseconds.
 * @property {string} type The referenceConflictMatch&#39;s type.
 */
/**
 * @typedef ReferenceListResponse
 * @memberOf! youtubePartner(v1)
 * @type object
 * @property {youtubePartner(v1).Reference[]} items A list of references that match the request criteria.
 * @property {string} kind The type of the API response. For this operation, the value is youtubePartner#referenceList.
 * @property {string} nextPageToken The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
 * @property {youtubePartner(v1).PageInfo} pageInfo The pageInfo object encapsulates paging information for the result set.
 */
/**
 * @typedef Requirements
 * @memberOf! youtubePartner(v1)
 * @type object
 * @property {boolean} caption This value indicates whether the order requires closed captions.
 * @property {boolean} hdTranscode This value indicates whether the order requires HD-quality video.
 * @property {boolean} posterArt This value indicates whether the order requires poster artwork.
 * @property {boolean} spotlightArt This value indicates whether the order requires spotlight artwork.
 * @property {boolean} spotlightReview This value indicates whether the spotlight artwork for the order needs to be reviewed.
 * @property {boolean} trailer This value indicates whether the order requires a trailer.
 */
/**
 * @typedef RightsOwnership
 * @memberOf! youtubePartner(v1)
 * @type object
* @property {youtubePartner(v1).TerritoryOwners[]} general A list that identifies the owners of an asset and the territories where each owner has ownership. General asset ownership is used for all types of assets and is the only type of ownership data that can be provided for assets that are not compositions.

Note: You cannot specify general ownership rights and also specify either mechanical, performance, or synchronization rights.
* @property {string} kind The type of the API resource. For rightsOwnership resources, the value is youtubePartner#rightsOwnership.
* @property {youtubePartner(v1).TerritoryOwners[]} mechanical A list that identifies owners of the mechanical rights for a composition asset.
* @property {youtubePartner(v1).TerritoryOwners[]} performance A list that identifies owners of the performance rights for a composition asset.
* @property {youtubePartner(v1).TerritoryOwners[]} synchronization A list that identifies owners of the synchronization rights for a composition asset.
*/
/**
 * @typedef RightsOwnershipHistory
 * @memberOf! youtubePartner(v1)
 * @type object
 * @property {string} kind The type of the API resource. For ownership history resources, the value is youtubePartner#rightsOwnershipHistory.
 * @property {youtubePartner(v1).Origination} origination The origination object contains information that describes the metadata source.
 * @property {youtubePartner(v1).RightsOwnership} ownership The ownership object contains the ownership data provided by the specified source (origination) at the specified time (timeProvided).
 * @property {string} timeProvided The time that the ownership data was provided.
 */
/**
 * @typedef Segment
 * @memberOf! youtubePartner(v1)
 * @type object
 * @property {string} duration The duration of the segment in milliseconds.
 * @property {string} kind The type of the API resource. For segment resources, the value is youtubePartner#segment.
 * @property {string} start The start time of the segment, measured in milliseconds from the beginning.
 */
/**
 * @typedef ShowDetails
 * @memberOf! youtubePartner(v1)
 * @type object
 * @property {string} episodeNumber The episode number associated with the episode.
 * @property {string} episodeTitle The episode&#39;s title.
 * @property {string} seasonNumber The season number associated with the episode.
 * @property {string} title The show&#39;s title
 */
/**
 * @typedef StateCompleted
 * @memberOf! youtubePartner(v1)
 * @type object
 * @property {string} state The state that the order entered.
 * @property {string} timeCompleted The time that the state transition occurred.
 */
/**
 * @typedef TerritoryCondition
 * @memberOf! youtubePartner(v1)
 * @type object
 * @property {string[]} territories A list of territories. Each territory is an ISO 3166 two-letter country code..
 * @property {string} type This field indicates whether the associated policy rule is or is not valid in the specified territories.
 */
/**
 * @typedef TerritoryConflicts
 * @memberOf! youtubePartner(v1)
 * @type object
 * @property {youtubePartner(v1).ConflictingOwnership[]} conflictingOwnership A list of conflicting ownerships.
 * @property {string} territory A territories where the ownership conflict is present. Territory is an ISO 3166 two-letter country code..
 */
/**
 * @typedef TerritoryOwners
 * @memberOf! youtubePartner(v1)
 * @type object
 * @property {string} owner The name of the asset&#39;s owner or rights administrator.
 * @property {string} publisher The name of the asset&#39;s publisher. This field is only used for composition assets, and it is used when the asset owner is not known to have a formal relationship established with YouTube.
 * @property {number} ratio The percentage of the asset that the owner controls or administers. For composition assets, the value can be any value between 0 and 100 inclusive. For all other assets, the only valid values are 100, which indicates that the owner completely owns the asset in the specified territories, and 0, which indicates that you are removing ownership of the asset in the specified territories.
 * @property {string[]} territories A list of territories where the owner owns (or does not own) the asset. Each territory is an ISO 3166 two-letter country code..
 * @property {string} type This field indicates whether the ownership data applies or does not apply in the specified territories.
 */
/**
 * @typedef ValidateError
 * @memberOf! youtubePartner(v1)
 * @type object
 * @property {string} columnName The column name where the error occurred.
 * @property {integer} columnNumber The column number where the error occurred (1-based).
 * @property {integer} lineNumber The line number where the error occurred (1-based).
 * @property {string} message The error message.
 * @property {integer} messageCode The code for the error message (if one exists).
 * @property {string} severity The error severity.
 */
/**
 * @typedef ValidateRequest
 * @memberOf! youtubePartner(v1)
 * @type object
 * @property {string} content The metadata file contents.
 * @property {string} kind The type of the API resource. For this operation, the value is youtubePartner#validateRequest.
 * @property {string} locale The desired locale of the error messages as defined in BCP 47 (http://tools.ietf.org/html/bcp47). For example, &quot;en-US&quot; or &quot;de&quot;. If not specified we will return the error messages in English (&quot;en&quot;).
 * @property {string} uploaderName The uploader name.
 */
/**
 * @typedef ValidateResponse
 * @memberOf! youtubePartner(v1)
 * @type object
 * @property {youtubePartner(v1).ValidateError[]} errors The list of errors and/or warnings.
 * @property {string} kind The type of the API resource. For this operation, the value is youtubePartner#validateResponse.
 * @property {string} status The validation status.
 */
/**
 * @typedef VideoAdvertisingOption
 * @memberOf! youtubePartner(v1)
 * @type object
 * @property {youtubePartner(v1).AdBreak[]} adBreaks A list of times when YouTube can show an in-stream advertisement during playback of the video.
 * @property {string[]} adFormats A list of ad formats that the video is allowed to show.
 * @property {boolean} autoGeneratedBreaks Enables this video for automatically generated midroll breaks.
 * @property {string[]} breakPosition The point at which the break occurs during the video playback.
 * @property {string} id The ID that YouTube uses to uniquely identify the video associated with the advertising settings.
 * @property {string} kind The type of the API resource. For this resource, the value is youtubePartner#videoAdvertisingOption.
 * @property {string} tpAdServerVideoId A value that uniquely identifies the video to the third-party ad server.
 * @property {string} tpTargetingUrl The base URL for a third-party ad server from which YouTube can retrieve in-stream ads for the video.
 * @property {string} tpUrlParameters A parameter string to append to the end of the request to the third-party ad server.
 */
/**
 * @typedef VideoAdvertisingOptionGetEnabledAdsResponse
 * @memberOf! youtubePartner(v1)
 * @type object
 * @property {youtubePartner(v1).AdBreak[]} adBreaks A list of ad breaks that occur in a claimed YouTube video.
 * @property {boolean} adsOnEmbeds This field indicates whether YouTube can show ads when the video is played in an embedded player.
 * @property {youtubePartner(v1).CountriesRestriction[]} countriesRestriction A list that identifies the countries where ads can run and the types of ads allowed in those countries.
 * @property {string} id The ID that YouTube uses to uniquely identify the claimed video.
 * @property {string} kind The type of the API resource. For this resource, the value is youtubePartner#videoAdvertisingOptionGetEnabledAds.
 */
/**
 * @typedef Whitelist
 * @memberOf! youtubePartner(v1)
 * @type object
 * @property {string} id The YouTube channel ID that uniquely identifies the whitelisted channel.
 * @property {string} kind The type of the API resource. For whitelist resources, this value is youtubePartner#whitelist.
 * @property {string} title Title of the whitelisted YouTube channel.
 */
/**
 * @typedef WhitelistListResponse
 * @memberOf! youtubePartner(v1)
 * @type object
 * @property {youtubePartner(v1).Whitelist[]} items A list of whitelist resources that match the request criteria.
 * @property {string} kind The type of the API response. For this operation, the value is youtubePartner#whitelistList.
 * @property {string} nextPageToken The token that can be used as the value of the pageToken parameter to retrieve the next page of results.
 * @property {youtubePartner(v1).PageInfo} pageInfo The pageInfo object encapsulates paging information for the result set.
 */
module.exports = Youtubepartner;
