// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Admin extends APIResource {
  /**
   * Creates or updates an organization with the provided organization name. An API
   * Key will be returned.
   *
   * Returns 201 if a new organization was created, 200 if an existing organization
   * was found.
   */
  createOrganization(
    body: AdminCreateOrganizationParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AdminCreateOrganizationResponse> {
    return this._client.post('/admin/create-organization', { body, ...options });
  }
}

export interface AdminCreateOrganizationResponse {
  /**
   * The API Key for this organization.
   */
  api_key: string;

  /**
   * The name of the organization
   */
  organization_name: string;
}

export interface AdminCreateOrganizationParams {
  /**
   * The orgniazation name to create. Must be unique.
   */
  organization_name: string;
}

export declare namespace Admin {
  export {
    type AdminCreateOrganizationResponse as AdminCreateOrganizationResponse,
    type AdminCreateOrganizationParams as AdminCreateOrganizationParams,
  };
}
