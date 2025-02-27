/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as ProductsInventoryImport } from './routes/products/inventory'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const ProductsInventoryRoute = ProductsInventoryImport.update({
  id: '/products/inventory',
  path: '/products/inventory',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/products/inventory': {
      id: '/products/inventory'
      path: '/products/inventory'
      fullPath: '/products/inventory'
      preLoaderRoute: typeof ProductsInventoryImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/products/inventory': typeof ProductsInventoryRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/products/inventory': typeof ProductsInventoryRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/products/inventory': typeof ProductsInventoryRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/products/inventory'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/products/inventory'
  id: '__root__' | '/' | '/products/inventory'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  ProductsInventoryRoute: typeof ProductsInventoryRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  ProductsInventoryRoute: ProductsInventoryRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/products/inventory"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/products/inventory": {
      "filePath": "products/inventory.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
