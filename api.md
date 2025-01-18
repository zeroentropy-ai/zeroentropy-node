# Status

Types:

- <code><a href="./src/resources/status.ts">StatusGetStatusResponse</a></code>

Methods:

- <code title="post /status/get-status">client.status.<a href="./src/resources/status.ts">getStatus</a>({ ...params }) -> StatusGetStatusResponse</code>

# Collections

Types:

- <code><a href="./src/resources/collections.ts">CollectionListResponse</a></code>
- <code><a href="./src/resources/collections.ts">CollectionAddCollectionResponse</a></code>
- <code><a href="./src/resources/collections.ts">CollectionDeleteCollectionResponse</a></code>

Methods:

- <code title="post /collections/get-collection-list">client.collections.<a href="./src/resources/collections.ts">list</a>() -> CollectionListResponse</code>
- <code title="post /collections/add-collection">client.collections.<a href="./src/resources/collections.ts">addCollection</a>({ ...params }) -> CollectionAddCollectionResponse</code>
- <code title="post /collections/delete-collection">client.collections.<a href="./src/resources/collections.ts">deleteCollection</a>({ ...params }) -> CollectionDeleteCollectionResponse</code>

# Documents

Types:

- <code><a href="./src/resources/documents.ts">DocumentAddDocumentResponse</a></code>
- <code><a href="./src/resources/documents.ts">DocumentDeleteDocumentResponse</a></code>
- <code><a href="./src/resources/documents.ts">DocumentGetInfoResponse</a></code>
- <code><a href="./src/resources/documents.ts">DocumentGetPageInfoResponse</a></code>
- <code><a href="./src/resources/documents.ts">DocumentListInfoResponse</a></code>

Methods:

- <code title="post /documents/add-document">client.documents.<a href="./src/resources/documents.ts">addDocument</a>({ ...params }) -> DocumentAddDocumentResponse</code>
- <code title="post /documents/delete-document">client.documents.<a href="./src/resources/documents.ts">deleteDocument</a>({ ...params }) -> DocumentDeleteDocumentResponse</code>
- <code title="post /documents/get-document-info">client.documents.<a href="./src/resources/documents.ts">getInfo</a>({ ...params }) -> DocumentGetInfoResponse</code>
- <code title="post /documents/get-page-info">client.documents.<a href="./src/resources/documents.ts">getPageInfo</a>({ ...params }) -> DocumentGetPageInfoResponse</code>
- <code title="post /documents/get-document-info-list">client.documents.<a href="./src/resources/documents.ts">listInfo</a>({ ...params }) -> DocumentListInfoResponse</code>

# Queries

Types:

- <code><a href="./src/resources/queries.ts">QueryTopDocumentsResponse</a></code>
- <code><a href="./src/resources/queries.ts">QueryTopPagesResponse</a></code>
- <code><a href="./src/resources/queries.ts">QueryTopSnippetsResponse</a></code>

Methods:

- <code title="post /queries/top-documents">client.queries.<a href="./src/resources/queries.ts">topDocuments</a>({ ...params }) -> QueryTopDocumentsResponse</code>
- <code title="post /queries/top-pages">client.queries.<a href="./src/resources/queries.ts">topPages</a>({ ...params }) -> QueryTopPagesResponse</code>
- <code title="post /queries/top-snippets">client.queries.<a href="./src/resources/queries.ts">topSnippets</a>({ ...params }) -> QueryTopSnippetsResponse</code>

# Parsers

Types:

- <code><a href="./src/resources/parsers.ts">ParserParseResponse</a></code>

Methods:

- <code title="post /parsers/parse-document">client.parsers.<a href="./src/resources/parsers.ts">parse</a>({ ...params }) -> ParserParseResponse</code>

# Models

Types:

- <code><a href="./src/resources/models.ts">StrJson</a></code>
